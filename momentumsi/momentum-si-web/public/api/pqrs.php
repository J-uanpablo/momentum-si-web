<?php

error_reporting(E_ALL);
ini_set("log_errors", "1");
ini_set("display_errors", "0");

$redirectPage = "/contacto.html";

function redirect_to($status = "") {
  global $redirectPage;

  if ($status === "") {
    header("Location: " . $redirectPage);
    exit;
  }

  header("Location: " . $redirectPage . "?estado=" . urlencode($status));
  exit;
}

try {
  if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    redirect_to();
  }

  $homePath = dirname(__DIR__);

  $autoloadPath = $homePath . "/vendor/autoload.php";
  $configPath = $homePath . "/private/pqrs-mail-config.php";

  if (!file_exists($autoloadPath)) {
    error_log("PQR ERROR: No existe autoload: " . $autoloadPath);
    redirect_to("error-config");
  }

  if (!file_exists($configPath)) {
    error_log("PQR ERROR: No existe config SMTP: " . $configPath);
    redirect_to("error-config");
  }

  require_once $autoloadPath;

  if (!class_exists("PHPMailer\\PHPMailer\\PHPMailer")) {
    error_log("PQR ERROR: PHPMailer no está disponible.");
    redirect_to("error-config");
  }

  $config = require $configPath;

  function clean_input($value) {
    if ($value === null) {
      $value = "";
    }

    $value = trim($value);
    $value = stripslashes($value);
    $value = htmlspecialchars($value, ENT_QUOTES, "UTF-8");

    return $value;
  }

  function map_value($value, $map) {
    return isset($map[$value]) ? $map[$value] : $value;
  }

  $motivo = isset($_POST["motivo"]) ? clean_input($_POST["motivo"]) : "";
  $nombres = isset($_POST["nombres"]) ? clean_input($_POST["nombres"]) : "";
  $tipoDocumento = isset($_POST["tipoDocumento"]) ? clean_input($_POST["tipoDocumento"]) : "";
  $documento = isset($_POST["documento"]) ? clean_input($_POST["documento"]) : "";
  $telefono = isset($_POST["telefono"]) ? clean_input($_POST["telefono"]) : "";
  $email = isset($_POST["email"]) ? clean_input($_POST["email"]) : "";
  $ciudad = isset($_POST["ciudad"]) ? clean_input($_POST["ciudad"]) : "";
  $barrio = isset($_POST["barrio"]) ? clean_input($_POST["barrio"]) : "";
  $mensaje = isset($_POST["mensaje"]) ? clean_input($_POST["mensaje"]) : "";
  $website = isset($_POST["website"]) ? clean_input($_POST["website"]) : "";

  if (!empty($website)) {
    redirect_to();
  }

  if (
    empty($motivo) ||
    empty($nombres) ||
    empty($tipoDocumento) ||
    empty($documento) ||
    empty($telefono) ||
    empty($email) ||
    empty($ciudad) ||
    empty($mensaje)
  ) {
    redirect_to("error");
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    redirect_to("email-invalido");
  }

  $motivoLabels = [
    "peticion" => "Petición",
    "queja" => "Queja",
    "reclamo" => "Reclamo",
    "solicitud-informacion" => "Solicitud de información",
  ];

  $tipoDocumentoLabels = [
    "cc" => "Cédula de ciudadanía",
    "ce" => "Cédula de extranjería",
    "nit" => "NIT",
    "pasaporte" => "Pasaporte",
  ];

  $motivoLabel = map_value($motivo, $motivoLabels);
  $tipoDocumentoLabel = map_value($tipoDocumento, $tipoDocumentoLabels);

  date_default_timezone_set("America/Bogota");

  $fecha = date("d/m/Y h:i A");
  $folio = "PQR-" . date("Ymd-His") . "-" . strtoupper(substr(hash("crc32b", $email . $documento . microtime()), 0, 6));
  $ip = isset($_SERVER["REMOTE_ADDR"]) ? clean_input($_SERVER["REMOTE_ADDR"]) : "No disponible";

  $subject = "[{$motivoLabel}] Nueva solicitud PQR - {$folio}";

  $body = "
<!doctype html>
<html>
  <head>
    <meta charset='UTF-8'>
  </head>

  <body style='margin:0; padding:0; background:#F3FBFB; font-family: Arial, Helvetica, sans-serif; color:#0B383B;'>
    <table role='presentation' width='100%' cellspacing='0' cellpadding='0' style='background:#F3FBFB; padding:32px 16px;'>
      <tr>
        <td align='center'>
          <table role='presentation' width='100%' cellspacing='0' cellpadding='0' style='max-width:720px; background:#ffffff; border-radius:24px; overflow:hidden; box-shadow:0 14px 34px rgba(11,56,59,0.14);'>
            
            <tr>
              <td style='background:#25BDC1; padding:30px 34px; color:#ffffff;'>
                <div style='font-size:14px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; opacity:0.95;'>
                  MoMentum SÍ - PQR
                </div>

                <h1 style='margin:10px 0 0; font-size:30px; line-height:34px; color:#ffffff;'>
                  Nueva solicitud recibida
                </h1>

                <p style='margin:10px 0 0; font-size:17px; line-height:24px; color:#ffffff;'>
                  Se ha registrado una nueva solicitud desde el formulario de contacto.
                </p>
              </td>
            </tr>

            <tr>
              <td style='padding:28px 34px 10px;'>
                <table role='presentation' width='100%' cellspacing='0' cellpadding='0'>
                  <tr>
                    <td style='padding:14px 16px; background:#DFF7F8; border-radius:16px;'>
                      <strong style='font-size:14px; color:#0B383B;'>Folio</strong>
                      <div style='margin-top:4px; font-size:20px; font-weight:800; color:#0B383B;'>{$folio}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style='padding:16px 34px 4px;'>
                <h2 style='margin:0 0 14px; font-size:22px; color:#0B383B;'>
                  Resumen de la solicitud
                </h2>

                <table role='presentation' width='100%' cellspacing='0' cellpadding='0' style='border-collapse:collapse;'>
                  <tr>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF; width:230px; font-weight:700;'>Motivo</td>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF;'>{$motivoLabel}</td>
                  </tr>
                  <tr>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF; font-weight:700;'>Fecha de recepción</td>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF;'>{$fecha}</td>
                  </tr>
                  <tr>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF; font-weight:700;'>IP de origen</td>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF;'>{$ip}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style='padding:24px 34px 4px;'>
                <h2 style='margin:0 0 14px; font-size:22px; color:#0B383B;'>
                  Datos del solicitante
                </h2>

                <table role='presentation' width='100%' cellspacing='0' cellpadding='0' style='border-collapse:collapse;'>
                  <tr>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF; width:230px; font-weight:700;'>Nombres y apellidos</td>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF;'>{$nombres}</td>
                  </tr>
                  <tr>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF; font-weight:700;'>Tipo de documento</td>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF;'>{$tipoDocumentoLabel}</td>
                  </tr>
                  <tr>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF; font-weight:700;'>Número de documento</td>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF;'>{$documento}</td>
                  </tr>
                  <tr>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF; font-weight:700;'>Teléfono</td>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF;'>
                      <a href='tel:{$telefono}' style='color:#25BDC1; font-weight:700; text-decoration:none;'>{$telefono}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF; font-weight:700;'>Correo electrónico</td>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF;'>
                      <a href='mailto:{$email}' style='color:#25BDC1; font-weight:700; text-decoration:none;'>{$email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF; font-weight:700;'>Ciudad</td>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF;'>{$ciudad}</td>
                  </tr>
                  <tr>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF; font-weight:700;'>Barrio</td>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF;'>{$barrio}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style='padding:24px 34px 32px;'>
                <h2 style='margin:0 0 14px; font-size:22px; color:#0B383B;'>
                  Mensaje / descripción
                </h2>

                <div style='background:#F3FBFB; border-left:6px solid #B9FF4F; border-radius:16px; padding:20px; font-size:17px; line-height:25px; color:#0B383B; white-space:pre-line;'>
                  {$mensaje}
                </div>
              </td>
            </tr>

            <tr>
              <td style='background:#0B383B; padding:22px 34px; color:#ffffff;'>
                <p style='margin:0; font-size:14px; line-height:20px; color:#ffffff;'>
                  Este mensaje fue generado automáticamente desde el formulario PQR de MoMentum SÍ.
                </p>

                <p style='margin:8px 0 0; font-size:13px; line-height:18px; color:#DFF7F8;'>
                  Para responder al solicitante, utiliza el botón responder de tu correo.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
";

  $plainMessage = "
Nueva solicitud PQR - MoMentum SÍ

Folio: {$folio}
Fecha de recepción: {$fecha}
Motivo: {$motivoLabel}
IP de origen: {$ip}

Datos del solicitante:
Nombres y apellidos: {$nombres}
Tipo de documento: {$tipoDocumentoLabel}
Número de documento: {$documento}
Teléfono: {$telefono}
Email: {$email}
Ciudad: {$ciudad}
Barrio: {$barrio}

Mensaje / descripción:
{$mensaje}
";

  $mail = new PHPMailer\PHPMailer\PHPMailer(true);

  $mail->isSMTP();
  $mail->Host = $config["smtp_host"];
  $mail->SMTPAuth = true;
  $mail->Username = $config["smtp_username"];
  $mail->Password = $config["smtp_password"];
  $mail->Port = (int) $config["smtp_port"];

  if ($config["smtp_secure"] === "ssl") {
    $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
  } else {
    $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
  }

  $mail->CharSet = "UTF-8";
  $mail->Encoding = "base64";

  $mail->setFrom($config["from_email"], $config["from_name"]);
  $mail->addAddress($config["to_email"], $config["to_name"]);
  $mail->addReplyTo($email, $nombres);

  $mail->isHTML(true);
  $mail->Subject = $subject;
  $mail->Body = $body;
  $mail->AltBody = $plainMessage;

// 1. Enviar solicitud al correo interno PQR
$mail->send();

// 2. Enviar confirmación al correo registrado por el usuario
$confirmationSubject = "Hemos recibido tu solicitud PQR - {$folio}";

$confirmationBody = "
<!doctype html>
<html>
  <head>
    <meta charset='UTF-8'>
  </head>

  <body style='margin:0; padding:0; background:#F3FBFB; font-family: Arial, Helvetica, sans-serif; color:#0B383B;'>
    <table role='presentation' width='100%' cellspacing='0' cellpadding='0' style='background:#F3FBFB; padding:32px 16px;'>
      <tr>
        <td align='center'>
          <table role='presentation' width='100%' cellspacing='0' cellpadding='0' style='max-width:680px; background:#ffffff; border-radius:24px; overflow:hidden; box-shadow:0 14px 34px rgba(11,56,59,0.14);'>
            
            <tr>
              <td style='background:#25BDC1; padding:30px 34px; color:#ffffff;'>
                <div style='font-size:14px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; opacity:0.95;'>
                  MoMentum SÍ
                </div>

                <h1 style='margin:10px 0 0; font-size:30px; line-height:34px; color:#ffffff;'>
                  Solicitud recibida
                </h1>

                <p style='margin:10px 0 0; font-size:17px; line-height:24px; color:#ffffff;'>
                  Hola {$nombres}, hemos recibido correctamente tu solicitud.
                </p>
              </td>
            </tr>

            <tr>
              <td style='padding:28px 34px 10px;'>
                <div style='padding:16px; background:#DFF7F8; border-radius:16px;'>
                  <strong style='font-size:14px; color:#0B383B;'>Número de radicado / folio</strong>
                  <div style='margin-top:4px; font-size:20px; font-weight:800; color:#0B383B;'>{$folio}</div>
                </div>
              </td>
            </tr>

            <tr>
              <td style='padding:20px 34px 8px;'>
                <h2 style='margin:0 0 14px; font-size:22px; color:#0B383B;'>
                  Resumen de tu solicitud
                </h2>

                <table role='presentation' width='100%' cellspacing='0' cellpadding='0' style='border-collapse:collapse;'>
                  <tr>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF; width:220px; font-weight:700;'>Motivo</td>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF;'>{$motivoLabel}</td>
                  </tr>
                  <tr>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF; font-weight:700;'>Fecha de recepción</td>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF;'>{$fecha}</td>
                  </tr>
                  <tr>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF; font-weight:700;'>Nombre</td>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF;'>{$nombres}</td>
                  </tr>
                  <tr>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF; font-weight:700;'>Correo</td>
                    <td style='padding:12px 0; border-bottom:1px solid #E5EFEF;'>{$email}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style='padding:24px 34px 32px;'>
                <h2 style='margin:0 0 14px; font-size:22px; color:#0B383B;'>
                  Mensaje enviado
                </h2>

                <div style='background:#F3FBFB; border-left:6px solid #B9FF4F; border-radius:16px; padding:20px; font-size:17px; line-height:25px; color:#0B383B; white-space:pre-line;'>
                  {$mensaje}
                </div>
              </td>
            </tr>

            <tr>
              <td style='background:#0B383B; padding:22px 34px; color:#ffffff;'>
                <p style='margin:0; font-size:14px; line-height:20px; color:#ffffff;'>
                  Nuestro equipo revisará tu solicitud y te contactará lo antes posible.
                </p>

                <p style='margin:8px 0 0; font-size:13px; line-height:18px; color:#DFF7F8;'>
                  Este mensaje fue generado automáticamente. Por favor conserva este correo como soporte de tu solicitud.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
";

$confirmationPlainMessage = "
Hola {$nombres},

Hemos recibido correctamente tu solicitud PQR.

Folio: {$folio}
Fecha de recepción: {$fecha}
Motivo: {$motivoLabel}

Mensaje enviado:
{$mensaje}

Nuestro equipo revisará tu solicitud y te contactará lo antes posible.

MoMentum SÍ
";

// 2. Enviar confirmación al correo registrado por el usuario
try {
  $confirmMail = new PHPMailer\PHPMailer\PHPMailer(true);

  $confirmMail->isSMTP();
  $confirmMail->Host = $config["smtp_host"];
  $confirmMail->SMTPAuth = true;
  $confirmMail->Username = $config["smtp_username"];
  $confirmMail->Password = $config["smtp_password"];
  $confirmMail->Port = (int) $config["smtp_port"];

  if ($config["smtp_secure"] === "ssl") {
    $confirmMail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
  } else {
    $confirmMail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
  }

  $confirmMail->CharSet = "UTF-8";
  $confirmMail->Encoding = "base64";

  // El correo sale desde la cuenta autenticada
  $confirmMail->setFrom($config["from_email"], $config["from_name"]);

  // Correo que escribió el usuario en el formulario
  $confirmMail->addAddress($email, $nombres);

  // Cuando el usuario responda, responderá a PQR
  $confirmMail->addReplyTo($config["from_email"], $config["from_name"]);



  $confirmMail->isHTML(true);
  $confirmMail->Subject = $confirmationSubject;
  $confirmMail->Body = $confirmationBody;
  $confirmMail->AltBody = $confirmationPlainMessage;

  $confirmMail->send();
} catch (Exception $confirmationError) {
  error_log(
    "PQR AVISO: La PQR interna fue enviada, pero falló la confirmación al usuario {$email}: " .
    $confirmationError->getMessage()
  );
}

redirect_to("enviado");
} catch (Exception $e) {
  error_log("PQR ERROR EXCEPTION: " . $e->getMessage());
  redirect_to("error-envio");
}
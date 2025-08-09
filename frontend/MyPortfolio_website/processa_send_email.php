<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Certifique-se de que o caminho para o autoload está correto

$mail = new PHPMailer(true);

$email = $_REQUEST['email'];
$nome = $_RESQUES['nome'];
$tel = $_REQUEST['telefone'];
$assunto = $_REQUEST['assunto'];
$msg = $_REQUEST['msg'];

try {
    // Configurações do servidor
    $mail->isSMTP();                                            // Define que vamos usar SMTP
    $mail->Host       = 'smtp.gmail.com';                     // Define o servidor SMTP do Gmail
    $mail->SMTPAuth   = true;                                 // Ativa a autenticação SMTP
    $mail->Username   = 'joaoparreiras2020@gmail.com';                // Seu e-mail do Gmail
    $mail->Password   = 'sua_senha';                          // Sua senha do Gmail
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;      // Ativa a criptografia TLS
    $mail->Port       = 587;                                  // Porta TCP para conexão

    // Remetente e destinatários
    $mail->setFrom($email, $nome);
    $mail->addAddress('joaoparreiras2020@gamil.com', 'João Victor Parreiras Soares'); // Adiciona um destinatário

    // Conteúdo do e-mail
    $mail->isHTML(true);                                       // Define o formato do e-mail como HTML
    $mail->Subject = 'Aqui está o assunto: ' . $assunto;
    $mail->Body    = 'Este é o corpo do e-mail em <b>HTML</b>' . $msg;
    $mail->AltBody = 'Este é o corpo do e-mail em texto puro para clientes de e-mail que não suportam HTML' . $msg;

    $mail->send();
    file_put_contents('email_log.txt', date('Y-m-d H:i:s') . ' - E-mail enviado com sucesso para ' . $email . ' - Assunto: ' . $assunto . PHP_EOL, FILE_APPEND); // Com sistema de log emputido!
    echo 'E-mail enviado com sucesso';
} catch (Exception $e) {
    file_put_contents('email_log.txt', date('Y-m-d H:i:s') . ' - Erro ao enviar e-mail para ' . $email . ' - Assunto: ' . $assunto . ' - Erro: ' . $e->getMessage() . PHP_EOL, FILE_APPEND); // Com sistema de log emputido!
    echo "O e-mail não pôde ser enviado. Erro do Mailer: {$mail->ErrorInfo}";
}
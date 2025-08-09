<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Certifique-se de que o caminho para o autoload está correto

$mail = new PHPMailer(true);

$rating = $_REQUEST['rating'];
$msg = $_REQUEST['msg'];

$stars = 0;

if($rating == 1){
    $stars = 1;
}
else if($rating == 2){
    $stars = 2;
}
else if($rating == 3){
    $stars = 3;
}
else if($rating == 4){
    $stars = 4;
}
else {
    $stars = 5;
}

try {
    // Configurações do servidor
    $mail->isSMTP();                                            // Define que vamos usar SMTP
    $mail->Host       = 'smtp.gmail.com';                     // Define o servidor SMTP do Gmail
    $mail->SMTPAuth   = true;                                 // Ativa a autenticação SMTP
    $mail->Username   = 'joaoparreiras2020@gmail.com';                // Seu e-mail do Gmail
    $mail->Password   = 'sua_senha';                          // Sua senha do Gmail
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;      // Ativa a criptografia TLS
    $mail->Port       = 587;                                  // Porta TCP para conexão

    // destinatário
    $mail->addAddress('joaoparreiras2020@gamil.com', 'João Victor Parreiras Soares'); // Adiciona um destinatário

    // Conteúdo do e-mail
    $mail->isHTML(true);                                       // Define o formato do e-mail como HTML
    $mail->Subject = 'Aqui está o assunto: Qualidade do Serviços em até 5 estrelas.';
    $mail->Body    = 'Este é o corpo do e-mail em <b>HTML</b>' . 'Qualidade do meu serviço (em até 5 estrelas): ' . '\2605' * $rating . 'ou ' . $rating . 'estrela(s).' . '. Conteúdo da mensagem: ' . $msg;
    $mail->AltBody = 'Este é o corpo do e-mail em texto puro para clientes de e-mail que não suportam HTML' . $msg . 'Qualidade do serviço: ' . $rating . ' estrelas.';

    $mail->send();
    file_put_contents('email_log.txt', date('Y-m-d H:i:s') . ' - E-mail enviado com sucesso para joaoparreiars2020@gmail.com - Assunto: Qualidade do serviços em até 5 estrelas: ' . $rating . PHP_EOL, FILE_APPEND); // Com sistema de log emputido!
    echo 'E-mail enviado com sucesso';
} catch (Exception $e) {
    file_put_contents('email_log.txt', date('Y-m-d H:i:s') . ' - Erro ao enviar e-mail para joaoparreiars2020@gmail.com - Assunto: Qualidade do serviços em até 5 estrelas: ' . $rating . ' - Erro: ' . $e->getMessage() . PHP_EOL, FILE_APPEND); // Com sistema de log emputido!
    echo "O e-mail não pôde ser enviado. Erro do Mailer: {$mail->ErrorInfo}";
}
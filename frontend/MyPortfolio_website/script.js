/** @format */

// Imagem Loader
function loader() {
  document.querySelector(".loader-container").classList.add('fade-out');
  console.log("Estou em loader");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut()

//Adicionando as Máscaras nos Campos de Entreda HTML:

$(document).ready(function () {
  $("#cell").mask("00 00000-0000", {
    reverse: true,
    placeholder: "00 00000-0000",
  }); //Celular!
});

// Envio do Formulário

async function sendEmail() {
  nome = document.querySelector("#name");
  email = document.querySelector("#email");
  msg = document.querySelector("#msg");
  cell = document.querySelector("#cell");
  subject = document.querySelector("#subject");

  if (
    !nome.empty() &&
    !email.empty() &&
    !msg.empty() &&
    !cell.empty() &&
    !subject.empty()
  ) {
    var templateParams = {
      name: nome,
      message: msg,
      email: email,
      cellPhone: cell,
      subject: subject,
    };
    console.log(templateParams);
    await emailjs.send("service_5yem838", "template_x4d5pdj", templateParams).then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        ); 
  }
  alert("Preencha todos os campos do formulário, por gentileza!");
  return false;
}

// Usando JQuery.js para o envio do formulário:

$('#form_send_email').on('submit', function(event) {
  event.preventDefault(); // prevent reload

  var formData = new FormData(this);
  formData.append('service_id', 'service_5yem838');
  formData.append('template_id', 'template_x4d5pdj');
  formData.append('user_id', 'hlbwsqJV_7PVD2oLs');
  
  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
      type: 'POST',
      data: formData,
      contentType: false, // auto-detection
      processData: false // no need to parse formData to string
  }).done(function() {
      alert('Your mail is sent!');
  }).fail(function(error) {
      alert('Oops... ' + JSON.stringify(error));
  });
});
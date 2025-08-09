/** @format */

// Imagem Loader
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut();

// Envio do Formulário
async function sendEmail() {
  const form = document.querySelector("#contactForm");
  const nome = document.querySelector("#name");
  const email = document.querySelector("#email");
  const msg = document.querySelector("#message"); // Corrigido para `message`
  const cell = document.querySelector("#cell");
  const subject = document.querySelector("#subject");
  const btn_submit = document.querySelector("#submit");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      btn_submit.disabled = true;

      const formData = {
        name: nome.value,
        email: email.value,
        cell: cell.value,
        subject: subject.value,
        message: msg.value,
      };

      // Validação do formulário
      const validateForm = () => {
        let isValid = true;

        // Limpar classes de erro
        nome.classList.remove("invalid");
        email.classList.remove("invalid");
        cell.classList.remove("invalid");
        subject.classList.remove("invalid");
        msg.classList.remove("invalid");

        // Nome completo
        if (!formData.name.trim()) {
          nome.classList.add("invalid");
          alert("O campo não pode ser nulo.");
          isValid = false;
        }
        // Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
          email.classList.add("invalid");
          alert("E-mail inválido. Insira uma conta de e-mail válida.");
          isValid = false;
        }
        // Celular
        if (
          !formData.cell.trim() ||
          parseInt(formData.cell) >= 10 ||
          parseInt(formData.cell) <= 11
        ) {
          cell.classList.add("invalid");
          alert(
            "Celular inválido. Exemplo: (11) 99999-9999 ou (11) 9999-9999. Com 10 a 11 dígitos"
          );
          isValid = false;
        }
        // Assunto
        if (!formData.subject.trim()) {
          subject.classList.add("invalid");
          alert("O campo não pode ser nulo.");
          isValid = false;
        }
        // Mensagem
        if (!formData.message.trim()) {
          msg.classList.add("invalid");
          alert("O campo não pode ser nulo.");
          isValid = false;
        }

        return isValid;
      };

      if (validateForm()) {
        try {
          const response = await fetch("https://meu-portfolio-html-css-javascript-com-41r6.onrender.com/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            alert("Sua mensagem foi enviada com sucesso!");
            // Resetar campos
            nome.value = "";
            email.value = "";
            msg.value = "";
            cell.value = "";
            subject.value = "";
          } else {
            const errorData = await response.json();
            console.error("Erro ao enviar formulário:", errorData);
            alert(
              `Ocorreu um erro ao enviar sua mensagem: ${errorData.message}`
            );
          }
        } catch (error) {
          console.error("Erro de rede ou no servidor:", error);
          alert(
            "Não foi possível conectar ao servidor. Tente novamente mais tarde."
          );
        }
      } else {
        alert("Por favor, preencha todos os campos corretamente.");
      }

      btn_submit.disabled = false;
    });
  }
}

document.addEventListener("DOMContentLoaded", sendEmail);

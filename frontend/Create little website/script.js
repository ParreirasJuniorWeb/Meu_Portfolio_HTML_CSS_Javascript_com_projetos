const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
form_container = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
formCloseRegister = document.querySelector("#form_close_register");
signupBtn = document.querySelector("#signup"),

abrirRegister = document.querySelector("#form-signup"),
CloseResgisterFormBtn = document.querySelector(".form_close_register");

loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelector(".pw_hide");

// signup_form = document.querySelector(".signup_form"),

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));
formCloseRegister.addEventListener("click", () => home.classList.remove("show"));

// abrirRegister.addEventListener("click", () => form_container.classList.add("showRegister"));
// CloseResgisterFormBtn.addEventListener("click", () => form_container.classList.remove("showRegister"));

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form_container.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form_container.classList.remove("active");
});

//Hide or show password 

pwShowHide.forEach(icon => {
    
    icon.addEventListener("click", () => {

        let getPwInput = document.querySelector("input[type='password']").getAttribute("type"); 

        if(getPwInput.type === 'password'){
            getPwInput.setAttribute("text");
            icon.classList.replace("bx bx-low-vision","bx bx-show-alt");
        }else {
            getPwInput.type.setAttribute("password");
            icon.classList.replace("bx bx-show-alt", "bx bx-low-vision");
        }
    })
});

/* Validação de formulários */
var nameError = document.getElementById("nameError");
var lastNameError = document.getElementById("lastNameError");

var emailError = document.getElementById("emailError");
var phoneError = document.getElementById("phoneError");

var subjectError = document.getElementById("subjectError");
var msgError = document.getElementById("msgError");

var submitError = document.getElementById("submitError");

function validateName() {
    var name = document.querySelector(".contact-name").value;
    var nameInput = document.querySelector(".contact-name");

    if(name.length == 0){
        nameError.innerHTML = "Name is required  <i class='bx bxs-error-circle error'></i>";
        nameInput.style.border = "1px solid #e74c3c";
        nameInput.style.borderRadius = "10px";
        nameError.style.color = "#e74c3c";

        return false;
}
if(name.length <= 7){
    nameError.innerHTML = "Write full name <i class='bx bxs-error-circle error'></i>";
    nameInput.style.border = "1px solid #e74c3c";
    nameInput.style.borderRadius = "10px";
    nameError.style.color = "#e74c3c";
    
    return false;
}
if(name.match(/^[A-Za-z]$/)){
    nameError.innerHTML = "Write full name <i class='bx bxs-error-circle error'></i>";
    nameInput.style.border = "1px solid #e74c3c";
    nameInput.style.borderRadius = "10px";
    nameError.style.color = "#e74c3c";
    
    return false;
}
nameError.innerHTML = "valid name <i class='bx bxs-check-circle success'></i>";
nameInput.style.border = "1px solid #2ecc71";
nameInput.style.borderRadius = "10px";
nameError.style.color = "#2ecc71";

return true;
};

// Sobrenome validação
function validateLName() {
    var lname = document.querySelector(".contact-Lname").value;
    var lnameInput = document.querySelector(".contact-Lname");

    if(lname.length == 0){
        lastNameError.innerHTML = "Name is required  <i class='bx bxs-error-circle error'></i>";
        lnameInput.style.border = "1px solid #e74c3c";
        lnameInput.style.borderRadius = "10px";
        lastNameError.style.color = "#e74c3c";

        return false;
}
if(lname.length <= 7){
    lastNameError.innerHTML = "Write full name <i class='bx bxs-error-circle error'></i>";
    lnameInput.style.border = "1px solid #e74c3c";
    lnameInput.style.borderRadius = "10px";
    lastNameError.style.color = "#e74c3c";
    
    return false;
}
if(lname.match(/^[A-Za-z]$/)){
    lastNameError.innerHTML = "Write full name <i class='bx bxs-error-circle error'></i>";
    lnameInput.style.border = "1px solid #e74c3c";
    lnameInput.style.borderRadius = "10px";
    lastNameError.style.color = "#e74c3c";
    
    return false;
}
lastNameError.innerHTML = "valid name <i class='bx bxs-check-circle success'></i>";
lnameInput.style.border = "1px solid #2ecc71";
lnameInput.style.borderRadius = "10px";
lastNameError.style.color = "#2ecc71";

return true;
};

//Validação E-mail
function validationEmail() {
    var email = document.querySelector(".contact-email").value;

    var emailInput = document.querySelector(".contact-email"); //input

    if(email.length == 0){
        emailError.innerHTML = "email is required  <i class='bx bxs-error-circle error'></i>";
        emailInput.style.border = "1px solid #e74c3c";
        emailInput.style.borderRadius = "10px";
        emailError.style.color = "#e74c3c";

        return false;
}
    if(email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = "Email invalid <i class='bx bxs-error-circle error'></i>";
    emailInput.style.border = "1px solid #e74c3c";
    emailInput.style.borderRadius = "10px";
    emailError.style.color = "#e74c3c";
    
    return false;
}

emailError.innerHTML = "valid email <i class='bx bxs-check-circle success'></i>";
emailInput.style.border = "1px solid #2ecc71";
emailInput.style.borderRadius = "10px";
emailError.style.color = "#2ecc71";

return true;
};

//Validação do Telefone celular 
function validatePhone() {
    var phone = document.querySelector(".contact-phone").value;
    var phoneInput = document.querySelector(".contact-phone");

    if(phone.length == 0){
        phoneError.innerHTML = "Phone is required <i class='bx bxs-error-circle error'></i>";
        phoneInput.style.border = "1px solid #e74c3c";
        phoneInput.style.borderRadius = "10px";
        phoneError.style.color = "#e74c3c";

        return false;
}
    if(phone.length !== 10){
    phoneError.innerHTML = "phone invalid - Phone should be 10 digits <i class='bx bxs-error-circle error'></i>";
    phoneInput.style.border = "1px solid #e74c3c";
    phoneInput.style.borderRadius = "10px";
    phoneError.style.color = "#e74c3c";
    
    return false;
}
if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = "phone invalid - Only digits please <i class='bx bxs-error-circle error'></i>";
    phoneInput.style.border = "1px solid #e74c3c";
    phoneInput.style.borderRadius = "10px";
    phoneError.style.color = "#e74c3c";
    
    return false;
}
phoneError.innerHTML = "valid phone <i class='bx bxs-check-circle success'></i>";
phoneInput.style.border = "1px solid #2ecc71";
phoneInput.style.borderRadius = "10px";
phoneError.style.color = "#2ecc71";

return true;
};

//Validação Subject do E-mail
function validateSubject() {
    var subjectValue = document.querySelector(".contact-subject").value;
    var InputSubject = document.querySelector(".contact-subject");

    var required = 12;
    var left = required - subjectValue.length;

    if(subjectValue.length == 0){
        subjectError.innerHTML = "Password is required <i class='bx bxs-error-circle error'></i>";
        InputSubject.style.border = "1px solid #e74c3c";
        InputSubject.style.borderRadius = "10px";
        subjectError.style.color = "#e74c3c";

        return false;
    }
    if(left > 0) {
        subjectError.innerHTML = left + " more characteres required <i class='bx bxs-error-circle error'></i>";
        InputSubject.style.border = "1px solid #e74c3c";
        InputSubject.style.borderRadius = "10px";
        subjectError.style.color = "#e74c3c";

        return false;
    }
    // if(passwordValue.match()){
    //     emailError.innerHTML = "Email invalid <i class='bx bxs-error-circle error'></i>";
    //     emailInput.style.border = "1px solid #e74c3c";
    //     emailError.style.color = "#e74c3c";
        
    //     return false;
    // }
    subjectError.innerHTML = "valid password <i class='bx bxs-check-circle success'></i>";
    InputSubject.style.border = "1px solid #2ecc71";
    InputSubject.style.borderRadius = "10px";
    subjectError.style.color = "#2ecc71";

    return true;
};

//Validação da Messagem 
function validateConfirMsg() {
    var msgValue = document.querySelector(".contact-confirmMsg").value;
    var InputMsg = document.querySelector(".contact-confirmMsg");
    // var passwordValue = document.querySelector(".contact-password").value;
    var required = 12;
    var left = required - msgValue.length;

    if(msgValue.length == 0){
        msgError.innerHTML = "password confirmation is required <i class='bx bxs-error-circle error'></i>";
        InputMsg.style.border = "1px solid #e74c3c";
        InputMsg.style.borderRadius = "10px";
        msgError.style.color = "#e74c3c";

        return false;
    }
    if(left > 0) {
        msgError.innerHTML = left + "more characteres required <i class='bx bxs-error-circle error'></i>";
        InputMsg.style.border = "1px solid #e74c3c";
        InputMsg.style.borderRadius = "10px";
        msgError.style.color = "#e74c3c";

        return false;
    }
    msgError.innerHTML = "valid password confirmation <i class='bx bxs-check-circle success'></i>";
    InputMsg.style.border = "1px solid #2ecc71";
    InputMsg.style.borderRadius = "10px";
    msgError.style.color = "#2ecc71";

    return true;
};

//Validação do formulários (submit-botão)
function validadeForm() {

    if(!validateName() || !validationEmail() || !validatePhone() || !validateSubject() || !validateConfirMsg()) {
        
        submitError.style.display = "block";

        submitError.innerHTML = "Please fix error to submit <i class='bx bxs-error-circle error'></i>";
        submitError.style.color = "#e74c3c";

        setTimeout(function() {submitError.style.display = "none";}, 3000);
        
        return false;
    }
};
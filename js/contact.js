const form = document.querySelector("#contactForm");

const message = document.querySelector("#message");

const button = document.querySelector("button");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 0) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }
    if (checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if (checkLength(adress.value, 24) === true) {
        adressError.style.display = "none";
    } else {
        adressError.style.display = "block";
    }

    validateAll()

}

form.addEventListener("submit", validateForm);


function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches
}

function validateAll() {
    if (checkLength(fullName.value, 0) && checkLength(subject.value, 9) && validateEmail(email.value) && checkLength(adress.value, 24)) {
        message.innerHTML = `<div class="validated">All validation passed!</div>`;
        form.reset();
    } else {
        message.innerHTML = `<div class="notValidated">Not all input fields meets the requirements</div>`;
    }
}
function showAlert() { alert('¡Hola, esta es una alerta desde JavaScript!'); }

const form = document.getElementById('myForm');

function validateEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return regex.test(email)
}

function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;


    if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electónico válido.');
    } else {
        alert('Correo electrónico enviado correctamente.');
    }
}

if(form){
form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})
    
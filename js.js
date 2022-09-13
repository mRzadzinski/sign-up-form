let password = document.querySelector('#password');
let passwordConfirmation = document.querySelector('#password-confirmation');
let button = document.querySelector('.button');
let errorDiv = document.querySelector('#error-message');

password.addEventListener('blur', (e) => confirmPass());
passwordConfirmation.addEventListener('blur', (e) => confirmPass());

function confirmPass() {
    if (password.value != '' && passwordConfirmation.value != '' && password.value != passwordConfirmation.value) {
        button.disabled = true;
        password.classList.add('invalid');
        passwordConfirmation.classList.add('invalid');
        errorDiv.textContent = 'Passwords do not match';

    } else if (password.value == passwordConfirmation.value) {
        button.disabled = false;
        password.classList.remove('invalid');
        passwordConfirmation.classList.remove('invalid');
        errorDiv.textContent = '';
    }
}
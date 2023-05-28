const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const button = document.querySelector('#button');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const form = document.querySelector('#form');
const color = document.querySelector('.color');





form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (password.value !== confirmPassword.value) {
        password.style.border = ' red 2px solid'
        confirmPassword.style.border = ' red 2px solid'
        color.style.display = 'block'
    }

})
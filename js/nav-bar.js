
/* Toggle en el menú */
const button = document.querySelector('.button');
const nav = document.querySelector('.nav');

button.addEventListener('click', () => {
    nav.classList.toggle('activo')
});
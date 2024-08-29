const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.focus();
toggle.addEventListener('click', () => nav.classList.toggle('active'));

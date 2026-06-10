/ Formulário de contato simples
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if(nome && email && mensagem){
        formMsg.textContent = "Mensagem enviada com sucesso!";
        formMsg.style.color = "#76c043";
        form.reset();
    } else {
        formMsg.textContent = "Por favor, preencha todos os campos.";
        formMsg.style.color = "red";
    }
});

// Header muda cor ao scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Fade-in ao scroll
const faders = document.querySelectorAll('.fade-section');
const cards = document.querySelectorAll('.card');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0

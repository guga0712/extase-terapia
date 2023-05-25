const btnMobile = document.getElementById('btn-mobile');
const aboutUs = document.getElementById('aboutButton');
const product = document.getElementById('productsButton');
const costumer = document.getElementById('costumerButton');
const contact = document.getElementById('contactButton');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
aboutUs.addEventListener('click', toggleMenu);
product.addEventListener('click', toggleMenu);
costumer.addEventListener('click', toggleMenu);
contact.addEventListener('click', toggleMenu);
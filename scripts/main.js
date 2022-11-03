window.addEventListener('load', () => {

    const menuBtn = document.querySelector('.hamburger');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('is-active');
    });


})
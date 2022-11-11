window.addEventListener('load', () => {

    const menuBtn = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavCont = document.querySelector('.mobile-nav-container');
    const header = document.querySelector('header');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('is-active');
        mobileNavCont.classList.toggle('is-active');
    });

    window.addEventListener('scroll', () => {
        menuBtn.classList.remove('is-active');
        mobileNavCont.classList.remove('is-active');
    });

    mobileNav.style.paddingTop = header.offsetHeight + "px";
})
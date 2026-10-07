document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('header-menu-toggle');
    const menu = document.getElementById('header-menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            const open = menu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', open);
        });
    }
});

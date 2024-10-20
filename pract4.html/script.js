document.addEventListener('DOMContentLoaded', function () {

    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    themeToggle.addEventListener('click', function () {
        if (body.classList.contains('day-theme')) {
            body.classList.replace('day-theme', 'night-theme');
            themeToggle.textContent = 'Switch to Day Theme';
        } else {
            body.classList.replace('night-theme', 'day-theme');
            themeToggle.textContent = 'Switch to Night Theme';
        }
    });

    const readMoreButton = document.getElementById('readMore');
    const extraContent = document.getElementById('extraContent');

    readMoreButton.addEventListener('click', function () {
        if (extraContent.style.display === 'none') {
            extraContent.style.display = 'block';
            readMoreButton.textContent = 'Read Less';
        } else {
            extraContent.style.display = 'none';
            readMoreButton.textContent = 'Read More';
        }
    });


    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        successMessage.style.display = 'block';
        contactForm.reset();
    });
});

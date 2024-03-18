document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Button actions
    document.getElementById('hire-me').addEventListener('click', () => {
        // Implement action for the 'HIRE ME' button
        location.href = '#contact';
    });

    document.getElementById('see-projects').addEventListener('click', () => {
        // Implement action for the 'SEE MY PROJECTS' button
        location.href = '#projects';
    });
});

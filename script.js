document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.querySelector('.contact');
    const githubButton = document.querySelector('.github');
    const projectButton = document.querySelector('.projectbtn');
    const githubVisitButton = document.querySelector('.github-visit');

    if (contactButton) {
        contactButton.addEventListener('click', function() {
            window.location.href = 'contact.html';
        });
    }

    if (githubButton) {
        githubButton.addEventListener('click', function() {
            window.open('https://github.com/riazahmed01', '_blank');
        });
    }

    if (projectButton) {
        projectButton.addEventListener('click', function() {
            window.open('https://github.com/riazahmed01', '_blank');
        });
    }

    if (githubVisitButton) {
        githubVisitButton.addEventListener('click', function() {
            window.open('https://github.com/riazahmed01', '_blank');
        });
    }
});

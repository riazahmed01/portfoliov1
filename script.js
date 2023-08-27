
document.addEventListener('DOMContentLoaded', function() {
    // This code will run after the DOM has fully loaded

    const contactButton = document.querySelector('.contact');

    // Add a click event listener to the contact button
    contactButton.addEventListener('click', function() {
        window.location.href = 'contact.html'; 
    });
    
    // Get the GitHub button element
    const githubButton = document.querySelector('.github');
    
    // Add a click event listener to the GitHub button
    githubButton.addEventListener('click', function() {
        window.open('https://github.com/riazahmed01', '_blank'); 
    });
})
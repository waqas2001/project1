document.addEventListener('DOMContentLoaded', function () {   // waiting for any input from the html
    const contactForm = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    const userNameSpan = document.getElementById('user-name');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();       // The full form is always shown by deafult. I want to disappear it when 'submit' is clicked. 
                                      // That is why, I am preventing default, when 'submit' button is clicked. 

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const name = nameInput.value.trim();    // trimming unwanted white spaces before or after the text input
        const email = emailInput.value.trim();  // trimming unwanted white spaces before or after the text input

        if (!/^[A-Za-z\s]+$/.test(name)) {      // Name check:  /^ -> begining of string; $/ -> end of string; A-Z -> capital letter; a-z: small letters; \s -> white space 
            alert('Please enter a valid name with only alphabets and spaces.');
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {    // Email check: 
            alert('Please enter a valid email address.');
            return;
        }

        userNameSpan.textContent = `Thank you, ${name}! Your request has been received.`; // Printing the thank you message
        
        contactForm.style.display = 'none';       // disappearing the form
    });
});
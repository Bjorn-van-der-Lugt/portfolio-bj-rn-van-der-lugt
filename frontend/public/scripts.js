const PortfolioFunctions = (function () {
    // Cache DOM elements to optimize performance by minimizing repeated queries
    const headerElement = document.getElementById('header');
    const menuToggleButton = document.getElementById('header__menu-toggle');
    const themeToggleButton = document.getElementById('header__mode-toggle');
    const contactForm = document.getElementById('contact__form');
    const formFields = contactForm.querySelectorAll('input, textarea');
    const formSubmitButton = document.getElementById('contact__form-button');
    const currentYearElement = document.getElementById('footer__current-year');
    const projectCard = document.querySelectorAll('.projects__card');

    // Initialize theme and state variables
    let activeTheme = localStorage.getItem('theme') || 'dark'; // Default to 'dark' theme

    // Applies the selected theme and updates the local storage to persist user preference
    function applyTheme(theme) {
        document.documentElement.classList.remove('light-mode', 'dark-mode');
        document.documentElement.classList.add(`${theme}-mode`);
        activeTheme = theme;
        localStorage.setItem('theme', theme); 

        themeToggleButton.innerHTML = theme === 'light'
            ? '<i class="fa-duotone fa-solid fa-moon"></i>'
            : '<i class="fa-duotone fa-solid fa-sun"></i>';
    }

    // Toggles between 'light' and 'dark' themes
    function toggleTheme() {
        const newTheme = activeTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    }

    // Sanitizes and validates input fields to prevent XSS attacks and ensure correct data format
    function sanitizeAndValidateInput(field) {
        const temporaryDiv = document.createElement('div');
        temporaryDiv.textContent = field.value;
        let sanitizedValue = temporaryDiv.innerHTML;
        sanitizedValue = sanitizedValue.replace(/[\r\n]+/g, ''); 
        field.value = sanitizedValue;

        const trimmedValue = sanitizedValue.trim();
        let isValid = true;

        // Validation logic specific to input field types
        if (field.type === 'email') {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            isValid = emailRegex.test(trimmedValue);
        } else if (field.type === 'text' && field.name === 'name') {
            const nameRegex = /^[\p{L}\s'-]+$/u;
            isValid = nameRegex.test(trimmedValue) && trimmedValue.length >= 3 && trimmedValue.length <= 40;
        } else if (field.type === 'text' && field.name === 'subject') {
            const subjectRegex = /^[\p{L}\s'-]+$/u;
            isValid = subjectRegex.test(trimmedValue) && trimmedValue.length >= 3 && trimmedValue.length <= 40;
        } else if (field.type === 'textarea') {
            isValid = trimmedValue.length >= 10 && trimmedValue.length <= 2000;
        }
        
        return isValid;
    }

    // Validates all form fields and updates the state of the submit button
    function validateFormFields() {
        let allFieldsValid = true;

        formFields.forEach(field => {
            const fieldIsValid = sanitizeAndValidateInput(field);
            field.classList.toggle('invalid', !fieldIsValid); // Adds 'invalid' class for visual feedback

            if (!fieldIsValid) {
                displayValidationError(field, fieldIsValid); // Show error messages
            }

            allFieldsValid = allFieldsValid && fieldIsValid;
        });

        formSubmitButton.disabled = !allFieldsValid; // Disable submit button if any field is invalid
    }

    // Displays specific validation error messages based on field type
    function displayValidationError(field, isValid) {
        const errorMessageElement = document.getElementById(`${field.id}-error`);
        if (!isValid) {
            const errorMessages = {
                'email': 'Please enter a valid email address.',
                'name': 'Name must be between 3 and 40 characters long.',
                'subject': 'Subject must be between 3 and 40 characters long.',
                'message': 'Message must be between 10 and 2000 characters long.'
            };
            // Use field.id or field.name to find the specific error message
            errorMessageElement.textContent = errorMessages[field.name] || 'Invalid input.';
        } else {
            // Clear error message if valid
            errorMessageElement.textContent = '';
        }
    }
    
    // Handles form submission with front-end validation and fetch request
async function handleFormSubmit(event) {
    event.preventDefault();
    if (formSubmitButton.disabled) return; 

    const formData = new FormData(contactForm);

    try {
        const response = await fetch('/send-email', { // Correct endpoint
            method: 'POST',
            body: new URLSearchParams(formData), // Converts form data to a URL-encoded string
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded' // Set correct content type
            }
        });

        if (response.ok) {
            console.log('Form submitted successfully!');

            // Clears form fields and error messages upon successful submission
            formFields.forEach(field => {
                field.value = '';
                validateFormFields()
            });

        } else {
            console.error('Failed to submit form.');
        }
    } catch (error) {
        console.error('Error occurred while submitting form:', error);
    }
}

    // Sets the current year in the footer dynamically
    function setCurrentYear() {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }

    // Toggles visibility of elements to support mobile navigation
    function toggleMenuVisibility() {
        const elementsToToggle = [
            ...document.querySelectorAll('section'),
            document.querySelector('footer'),
            headerElement,
            menuToggleButton
        ];

        elementsToToggle.forEach(element => element.classList.toggle('u-mobile-nav-open'));
    }

    // Function to handle project card expand/collapse
    function handleProjectCardToggle() {
        projectCard.forEach(card => {
            const expandToggle = card.querySelector('.projects__expand-toggle');
            const projectText = card.querySelector('.projects__text.wrapper');
                expandToggle.addEventListener('click', function () {
                    projectText.classList.toggle('expanded');  
                });
           
        });
    }

    // Initializes all necessary functions on page load
    function initializePortfolio() {
        applyTheme(activeTheme);
        setCurrentYear();
        validateFormFields();

        themeToggleButton.addEventListener('click', toggleTheme);
        formFields.forEach(field => field.addEventListener('input', validateFormFields));
        menuToggleButton.addEventListener('click', toggleMenuVisibility);
        contactForm.addEventListener('submit', handleFormSubmit);
        handleProjectCardToggle();
    }

    return {
        init: initializePortfolio
    };
})();

// Initialize portfolio functionality once the document has fully loaded
document.addEventListener('DOMContentLoaded', PortfolioFunctions.init);


const PortfolioFunctions = (function () {
    // Cache DOM elements to optimize performance by minimizing repeated queries
    const headerElement = document.getElementById('header');
    const menuToggleButton = document.getElementById('header__menu-toggle');
    const themeToggleButton = document.getElementById('header__mode-toggle');
    const langToggleButton = document.getElementById('header__language-toggle');
    const langDropdown = document.getElementById('header__languages-dropdown');
    const contactForm = document.getElementById('contact__form');
    const formFields = contactForm ? contactForm.querySelectorAll('input, textarea') : [];
    const formSubmitButton = document.getElementById('contact__form-button');
    const currentYearElement = document.getElementById('footer__current-year');
    const projectCard = document.querySelectorAll('.projects__card');

    // Modules
    const ThemeManager = {
        activeTheme: localStorage.getItem('theme') || 'dark',

        // Applies the selected theme and updates the local storage to persist user preference
        applyTheme(theme) {
            document.documentElement.classList.remove('light-mode', 'dark-mode');
            document.documentElement.classList.add(`${theme}-mode`);
            this.activeTheme = theme;
            localStorage.setItem('theme', theme);

            themeToggleButton.innerHTML = theme === 'light'
                ? '<i class="fa-duotone fa-solid fa-moon"></i>'
                : '<i class="fa-duotone fa-solid fa-sun"></i>';
        },

        // Toggles between 'light' and 'dark' themes
        toggleTheme() {
            const newTheme = this.activeTheme === 'light' ? 'dark' : 'light';
            this.applyTheme(newTheme);
        }
    };

    const FormManager = {
        // Sanitizes input to prevent XSS attacks
        sanitizeInput(input) {
            const tempDiv = document.createElement('div');
            tempDiv.textContent = input;
            return tempDiv.innerHTML.replace(/[\r\n]+/g, ''); // Remove newline characters
        },

        // Validates and sanitizes a single form field
        sanitizeAndValidateInput(field) {
            field.value = this.sanitizeInput(field.value);
            const trimmedValue = field.value.trim();
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
        },

        // Validates all form fields and updates the state of the submit button
        validateFormFields() {
            let allFieldsValid = true;

            formFields.forEach(field => {
                const fieldIsValid = this.sanitizeAndValidateInput(field);
                field.classList.toggle('invalid', !fieldIsValid);
                this.displayValidationError(field, fieldIsValid);
                allFieldsValid = allFieldsValid && fieldIsValid;
            });

            if (formSubmitButton) {
                formSubmitButton.disabled = !allFieldsValid;
            }
        },

        // Displays specific validation error messages based on field type
        displayValidationError(field, isValid) {
            const errorMessageElement = document.getElementById(`${field.id}-error`);
            if (!isValid) {
                const errorMessages = {
                    'email': 'Please enter a valid email address.',
                    'name': 'Name must be between 3 and 40 characters long.',
                    'subject': 'Subject must be between 3 and 40 characters long.',
                    'message': 'Message must be between 10 and 2000 characters long.'
                };
                if (errorMessageElement) {
                    errorMessageElement.textContent = errorMessages[field.name] || 'Invalid input.';
                }
            } else {
                if (errorMessageElement) {
                    errorMessageElement.textContent = '';
                }
            }
        },

        // Handles form submission with front-end validation and fetch request
        async handleFormSubmit(event) {
            event.preventDefault();
            if (formSubmitButton && formSubmitButton.disabled) return;

            const formData = new FormData(contactForm);

            try {
                if (formSubmitButton) {
                    formSubmitButton.disabled = true;
                    formSubmitButton.textContent = "Submitting...";
                }

                const response = await fetch('/send-email', {
                    method: 'POST',
                    body: new URLSearchParams(formData),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });

                if (response.ok) {
                    console.log('Form submitted successfully!');
                    formFields.forEach(field => {
                        field.value = '';
                        this.validateFormFields();
                    });
                } else {
                    console.error('Failed to submit form.');
                }
            } catch (error) {
                console.error('Error occurred while submitting form:', error);
            } finally {
                if (formSubmitButton) {
                    formSubmitButton.disabled = false;
                    formSubmitButton.textContent = "Submit";
                }
            }
        }
    };

    const NavigationManager = {
        // Toggles visibility of elements to support mobile navigation
        // Cache static elements (footer and sections) outside of the function
        /*
        toggleMenuVisibility() {
            const elementsToToggle = [
                ...document.querySelectorAll('section'),
                document.querySelector('footer'),
                headerElement,
                menuToggleButton
            ];

            elementsToToggle.forEach(element => element.classList.toggle('u-mobile-nav-open'));
        },
        */

        // Handles project card expand/collapse functionality
        handleProjectCardToggle() {
            projectCard.forEach(card => {
                const expandToggle = card.querySelector('.projects__expand-toggle');
                const projectText = card.querySelector('.projects__text.wrapper');
                if (expandToggle && projectText) {
                    expandToggle.addEventListener('click', function () {
                        projectText.classList.toggle('expanded');
                        projectText.classList.contains('expanded') 
                ? expandToggle.innerHTML = '<i class="fa-solid fa-caret-up"></i>' 
                : expandToggle.innerHTML = '<i class="fa-solid fa-caret-down"></i>';
                    });
                }

                

            })
        },

        handleLangToggle() {
            if (langDropdown) {
                langDropdown.classList.toggle('visible');
            }
        }        
    };

    // Sets the current year in the footer dynamically
    function setCurrentYear() {
        if (currentYearElement) {
            const currentYear = new Date().getFullYear();
            currentYearElement.textContent = currentYear;
        }
    }

    // Initializes all necessary functions on page load
    function initializePortfolio() {
        ThemeManager.applyTheme(ThemeManager.activeTheme);
        setCurrentYear();
        FormManager.validateFormFields();

        if (themeToggleButton) {
            themeToggleButton.addEventListener('click', () => ThemeManager.toggleTheme());
        }
        if (langToggleButton) {
            langToggleButton.addEventListener('click', () => NavigationManager.handleLangToggle());
        }
        formFields.forEach(field => field.addEventListener('input', () => FormManager.validateFormFields()));
        if (menuToggleButton) {
            menuToggleButton.addEventListener('click', () => NavigationManager.toggleMenuVisibility());
        }
        if (contactForm) {
            contactForm.addEventListener('submit', (event) => FormManager.handleFormSubmit(event));
        }
        NavigationManager.handleProjectCardToggle();
    }

    return {
        init: initializePortfolio
    };
})();

// Initialize portfolio functionality once the document has fully loaded
document.addEventListener('DOMContentLoaded', PortfolioFunctions.init);

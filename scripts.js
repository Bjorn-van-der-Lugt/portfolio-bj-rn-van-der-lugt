const PortfolioFunctions = (function () {
    // Cache DOM elements to optimize performance by minimizing repeated queries
    const headerElement = document.getElementById('header');
    const menuToggleButton = document.getElementById('menu-toggle');
    const themeToggleButton = document.getElementById('mode-toggle');
    const langToggleButton = document.getElementById('language-toggle');
    const langMenu = document.getElementById('language-menu');
    const currentYearElement = document.getElementById('footer__current-year');
    const projectCard = document.querySelectorAll('.projects .card');
    const copyToClipBoardFunctionality = document.querySelectorAll('.u-copy');
   

    // Modules
    const ThemeManager = {
        activeTheme: localStorage.getItem('theme') || 'dark',

        // Applies the selected theme and updates the local storage to persist user preference
        applyTheme(theme) {
            document.documentElement.classList.remove('light-mode', 'dark-mode');
            document.documentElement.classList.add(`${theme}-mode`);
            this.activeTheme = theme;
            localStorage.setItem('theme', theme);

            const icon = themeToggleButton.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-moon', theme === 'light');
                icon.classList.toggle('fa-sun', theme === 'dark');
            }
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
                    errorMessageElement.removeAttribute('aria-hidden');
                }
            } else {
                errorMessageElement.setAttribute('aria-hidden', 'true');
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
        
        toggleMenuVisibility() {
            const elementsToToggle = [
                ...document.querySelectorAll('section'),
                document.querySelector('footer'),
                headerElement,
                menuToggleButton
            ];

            elementsToToggle.forEach(element => element.classList.toggle('u-mobile-nav-open'));
        },

        // Handles project card expand/collapse functionality
        
        handleProjectCardToggle() {
            projectCard.forEach(card => {
                const expandToggle = card.querySelector('.projects .expand-toggle');
                const projectText = card.querySelector('.projects .content-wrapper');
                const projectPreviewText = card.querySelector('.projects .intro-text');
                const caret = expandToggle.querySelector('.fa-caret-down');
                if (expandToggle && projectText && projectPreviewText) {
                    expandToggle.addEventListener('click', function () {
                        projectText.classList.toggle('expanded');
                        projectPreviewText.classList.toggle('expanded');
                        caret.classList.toggle('fa-caret-up', projectText.classList.contains('expanded'));
                        caret.classList.toggle('fa-caret-down', !projectText.classList.contains('expanded'));
                    });
                }
            })
        },

        handleLangToggle() {
            const caret = langToggleButton.querySelectorAll('i')[1];
            console.log(caret);
            if (langMenu) {
                langMenu.classList.toggle('expanded');
                caret.classList.toggle('fa-caret-up', langMenu.classList.contains('expanded'));
            caret.classList.toggle('fa-caret-down', !langMenu.classList.contains('expanded'));
            }
        }        
    };

    const ClipboardManager = {
        initCopyButtons() {
            const toast = document.getElementById('copy-toast');
    
            copyToClipBoardFunctionality.forEach(button => {
                button.addEventListener('click', () => {
                    const url = button.getAttribute('data-url') || 'https://portfolio-bjornvanderlugt.com/';
                    navigator.clipboard.writeText(url);
    
                    const rect = button.getBoundingClientRect();
                    toast.style.top = `${rect.top - 40 + window.scrollY}px`;
                    toast.style.left = `${rect.left + rect.width / 2}px`;
                    toast.style.position = 'absolute';
                    toast.style.transform = 'translateX(-50%)';
    
                    toast.classList.add('visible');
                    toast.setAttribute('aria-hidden', 'false');
    
                    setTimeout(() => {
                        toast.classList.remove('visible');
                        toast.setAttribute('aria-hidden', 'true');
                    }, 750);
                });
            });
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

        if (themeToggleButton) {
            themeToggleButton.addEventListener('click', () => ThemeManager.toggleTheme());
        }
        if (langToggleButton) {
            langToggleButton.addEventListener('click', () => NavigationManager.handleLangToggle());
        }
        NavigationManager.handleProjectCardToggle();
        ClipboardManager.initCopyButtons();
    }

    return {
        init: initializePortfolio
    };
})();

// Initialize portfolio functionality once the document has fully loaded
document.addEventListener('DOMContentLoaded', PortfolioFunctions.init);

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const submitButton = form.querySelector('button[type="submit"]');
    const toFormButton = document.querySelector('.to-form');
    const formContainer = document.querySelector('.form-container');
    const closeFormButton = document.querySelector('.close-form');
    
    let formOverlay = document.querySelector('.form-overlay');
    if (!formOverlay) {
        formOverlay = document.createElement('div');
        formOverlay.className = 'form-overlay';
        document.body.appendChild(formOverlay);
    }
    
    const fullNameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const dobInput = document.getElementById('dob');
    const maleRadio = document.getElementById('male');
    const femaleRadio = document.getElementById('female');
    const agreementCheckbox = document.getElementById('agreement');
    
    const genderGroup = document.querySelector('.input-group:has(input[type="radio"])');
    
    const genderLabel = genderGroup.querySelector('label:first-child');
    
    const maleLabel = document.querySelector('label[for="male"]');
    const femaleLabel = document.querySelector('label[for="female"]');
    
    genderGroup.innerHTML = '';
    genderGroup.appendChild(genderLabel);
    
    const radioButtonsContainer = document.createElement('div');
    radioButtonsContainer.className = 'radio-buttons';
    
    const maleOption = document.createElement('div');
    maleOption.className = 'radio-option';
    maleOption.appendChild(maleRadio);
    maleOption.appendChild(maleLabel);
    
    const femaleOption = document.createElement('div');
    femaleOption.className = 'radio-option';
    femaleOption.appendChild(femaleRadio);
    femaleOption.appendChild(femaleLabel);
    
    radioButtonsContainer.appendChild(maleOption);
    radioButtonsContainer.appendChild(femaleOption);
    genderGroup.appendChild(radioButtonsContainer);
    
    if (!formContainer.querySelector('.close-form')) {
        const closeButton = document.createElement('button');
        closeButton.className = 'close-form';
        closeButton.innerHTML = '&times;';
        formContainer.appendChild(closeButton);
    }
    
    function createWarning(element, message) {
        let warningElement = element.parentElement.querySelector('.warning-message');
        
        if (!warningElement) {
            warningElement = document.createElement('span');
            warningElement.className = 'warning-message';
            element.parentElement.appendChild(warningElement);
        }
        
        warningElement.textContent = message;
        warningElement.style.display = 'block';
    }
    
    function removeWarning(element) {
        const warningElement = element.parentElement.querySelector('.warning-message');
        if (warningElement) {
            warningElement.style.display = 'none';
        }
    }
    
    function validateForm() {
        let isValid = true;
        
        const nameValue = fullNameInput.value.replace(/\s/g, '');
        if (nameValue.length < 3) {
            isValid = false;
            fullNameInput.style.borderBottom = '1px solid rgba(0, 0, 0, 0.25)';
            createWarning(fullNameInput, 'Full name must be at least 3 characters');
        } else {
            fullNameInput.style.borderBottom = '1px solid rgba(0, 0, 0, 0.514)';
            removeWarning(fullNameInput);
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            isValid = false;
            emailInput.style.borderBottom = '1px solid rgba(0, 0, 0, 0.25)';
            createWarning(emailInput, 'Invalid email address');
        } else {
            emailInput.style.borderBottom = '1px solid rgba(0, 0, 0, 0.514)';
            removeWarning(emailInput);
        }
        
        if (dobInput.value) {
            const birthYear = new Date(dobInput.value).getFullYear();
            if (birthYear < 1997 || birthYear > 2006) {
                isValid = false;
                dobInput.style.borderBottom = '1px solid rgba(0, 0, 0, 0.25)';
                createWarning(dobInput, 'Age must be between 19-28 years old');
            } else {
                dobInput.style.borderBottom = '1px solid rgba(0, 0, 0, 0.511)';
                removeWarning(dobInput);
            }
        } else {
            isValid = false;
            dobInput.style.borderBottom = '1px solid rgba(0, 0, 0, 0.25)';
            createWarning(dobInput, 'Date of birth must be filled');
        }
        
        if (!maleRadio.checked && !femaleRadio.checked) {
            isValid = false;
            genderGroup.style.color = 'rgba(0, 0, 0, 0.25)';
            maleLabel.style.color = 'rgba(0, 0, 0, 0.25)';
            femaleLabel.style.color = 'rgba(0, 0, 0, 0.25)';
            
            let genderWarning = genderGroup.querySelector('.warning-message');
            if (!genderWarning) {
                genderWarning = document.createElement('span');
                genderWarning.className = 'warning-message';
                genderWarning.textContent = 'Choose your gender';
                genderGroup.appendChild(genderWarning);
            } else {
                genderWarning.style.display = 'block';
            }
        } else {
            genderGroup.style.color = '#000000';
            maleLabel.style.color = '#000000';
            femaleLabel.style.color = '#000000';
            
            const genderWarning = genderGroup.querySelector('.warning-message');
            if (genderWarning) {
                genderWarning.style.display = 'none';
            }
        }
        
        const checkboxGroup = agreementCheckbox.closest('.checkbox-group');
        if (!agreementCheckbox.checked) {
            isValid = false;
            agreementCheckbox.nextElementSibling.style.color = 'rgba(0, 0, 0, 0.25)';
            
            let checkboxWarning = checkboxGroup.parentElement.querySelector('.warning-message');
            if (!checkboxWarning) {
                checkboxWarning = document.createElement('span');
                checkboxWarning.className = 'warning-message';
                checkboxWarning.textContent = 'You should agree to theterms and conditions';
                checkboxGroup.parentElement.appendChild(checkboxWarning);
            } else {
                checkboxWarning.style.display = 'block';
            }
        } else {
            agreementCheckbox.nextElementSibling.style.color = '#000000';
            
            const checkboxWarning = checkboxGroup.parentElement.querySelector('.warning-message');
            if (checkboxWarning) {
                checkboxWarning.style.display = 'none';
            }
        }
        
        submitButton.disabled = !isValid;
        submitButton.style.opacity = isValid ? 1 : 0.5;
        submitButton.style.cursor = isValid ? 'pointer' : 'not-allowed';
        
        return isValid;
    }
    
    fullNameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    dobInput.addEventListener('change', validateForm);
    maleRadio.addEventListener('change', validateForm);
    femaleRadio.addEventListener('change', validateForm);
    agreementCheckbox.addEventListener('change', validateForm);
    
    function isMobile() {
        return window.innerWidth <= 768;
    }
    
    toFormButton.addEventListener('click', function() {
        formContainer.classList.add('active');
        formOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        if (isMobile()) {
            formContainer.style.transform = 'translateY(0)';
        } else {
            formContainer.style.transform = 'translate(-50%, -50%)';
        }
    });
    
    document.querySelector('.close-form').addEventListener('click', function() {
        formContainer.classList.remove('active');
        formOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        if (isMobile()) {
            formContainer.style.transform = 'translateY(100%)';
        }
    });
    
    formOverlay.addEventListener('click', function() {
        formContainer.classList.remove('active');
        formOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        if (isMobile()) {
            formContainer.style.transform = 'translateY(100%)';
        }
    });
    
    window.addEventListener('resize', function() {
        if (formContainer.classList.contains('active')) {
            if (isMobile()) {
                formContainer.style.transform = 'translateY(0)';
            } else {
                formContainer.style.transform = 'translate(-50%, -50%)';
            }
        } else {
            if (isMobile()) {
                formContainer.style.transform = 'translateY(100%)';
            } else {
                formContainer.style.transform = 'translate(-50%, -50%)';
            }
        }
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            alert('Form successfully submitted!');
            form.reset();
            formContainer.classList.remove('active');
            formOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    if (isMobile()) {
        formContainer.style.transform = 'translateY(100%)'; 
    }
    
    validateForm();
});
function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export function validateInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
  
    let isValid = true; // initialize isValid as true
  
    if (usernameValue === '') {
      setError(username, 'Username is required');
      isValid = false; // set isValid to false if input is invalid
    } else {
      setSuccess(username);
    }
  
    if (emailValue === '') {
      setError(email, 'Email is required');
      isValid = false;
    } else if (!isValidEmail(emailValue)) {
      setError(email, 'Provide a valid email address');
      isValid = false;
    } else {
      setSuccess(email);
    }
  
    if (passwordValue === '') {
      setError(password, 'Password is required');
      isValid = false;
    } else if (passwordValue.length < 8) {
      setError(password, 'Password must be at least 8 characters.');
      isValid = false;
    } else {
      setSuccess(password);
    }
  
    if (password2Value === '') {
      setError(password2, 'Please confirm your password');
      isValid = false;
    } else if (password2Value !== passwordValue) {
      setError(password2, "Passwords don't match");
      isValid = false;
    } else {
      setSuccess(password2);
    }
  
    return isValid; // return the value of isValid
  }
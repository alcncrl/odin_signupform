'use strict';
// Variables
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('mail');
const phone = document.getElementById('number');
const password = document.getElementById('pword');
const confirm_password = document.getElementById('cpword');
const email_error_logs = document.querySelector('.error_logs.email');
const phone_error_logs = document.querySelector('.error_logs.phone');
const pword_error_logs = document.querySelector('.error_logs.password');
const submit_btn = document.querySelector('.submit_btn');
const checkBox = document.getElementById('terms');
const inputs = document.querySelectorAll('input');

// Functions
const removeString = function (str) {
  let string = pword_error_logs.innerText;
  let rmvString = str;
  let result = string.replace(rmvString, '');
  pword_error_logs.innerText = result;
};

const emailErrorLogs = function () {
  const criteria = /[a-zA-Z0-9]+@[a-z]+\.co+/;
  let string = email.value;
  if (!criteria.test(string)) {
    email.classList.add('error');
    email_error_logs.innerText = 'Please enter a valid email address.';
  } else {
    email.classList.remove('error');
    email_error_logs.innerText = '';
  }
};

const phoneErrorLogs = function () {
  const criteria = /[0-9]{11}/;
  let string = phone.value;
  if (!criteria.test(string)) {
    phone.classList.add('error');
    phone_error_logs.innerText = 'Please enter a valid phone number.';
  } else {
    phone.classList.remove('error');
    phone_error_logs.innerText = '';
  }
};

const passwordErrorLogs = function () {
  const criteria1 = /[A-Z]/;
  const criteria2 = /[0-9]/;
  // Error Logs
  pword_error_logs.innerText =
    'Your password is too short. It needs to be 6+ characters. Password must contain atleast 1 capital letter and number.';
  // Checking the length of the password.
  if (password.value.length >= 8) {
    removeString('Your password is too short. It needs to be 6+ characters.');
  }
  // Checking password criteria if it contains a capital letter and number.
  if (criteria1.test(password.value) && criteria2.test(password.value)) {
    removeString('Password must contain atleast 1 capital letter and number.');
    password.classList.remove('error');
  } else {
    password.classList.add('error');
  }
};

const cpasswordErrorLogs = function () {
  if (password.value != confirm_password.value || password.value.length === 0) {
    pword_error_logs.innerText = "Passwords don't match!";
    confirm_password.classList.add('error');
  } else {
    confirm_password.classList.remove('error');
    removeString("Passwords don't match!");
  }
};

// Events
fname.addEventListener('input', () => {
  if (fname.value.length != 0) {
    fname.classList.remove('error');
  }
});

lname.addEventListener('input', () => {
  if (lname.value.length != 0) {
    lname.classList.remove('error');
  }
});

email.addEventListener('focus', () => {
  emailErrorLogs();
});

email.addEventListener('focusout', () => {
  emailErrorLogs();
  // if (email.value.length != 0) {
  //   emailErrorLogs();
  // } else {
  //   email.classList.remove('error');
  //   email_error_logs.innerText = '';
  // }
});

phone.addEventListener('focus', () => {
  phoneErrorLogs();
});

phone.addEventListener('focusout', () => {
  phoneErrorLogs();
  // if (phone.value.length != 0) {
  //   phoneErrorLogs();
  // } else {
  //   phone.classList.remove('error');
  //   phone_error_logs.innerText = '';
  // }
});

// Password
password.addEventListener('input', () => {
  passwordErrorLogs();
});

password.addEventListener('focus', () => {
  if (password.classList.contains('error')) {
    passwordErrorLogs();
  }
});

// password.addEventListener('focusout', () => {
//   password.value.length === 0 ? password.classList.remove('error') : '';
//   password.value.length === 0 ? (pword_error_logs.innerText = '') : '';
// });
// Confirm Password
confirm_password.addEventListener('input', () => {
  cpasswordErrorLogs();
});

confirm_password.addEventListener('focus', () => {
  cpasswordErrorLogs();
});

// confirm_password.addEventListener('focusout', () => {
//   confirm_password.value.length === 0 && password.value.length != 0
//     ? confirm_password.classList.add('error')
//     : '';
//   confirm_password.value.length === 0 && password.value.length != 0
//     ? (pword_error_logs.innerText = "Passwords don't match!")
//     : '';
// });

submit_btn.addEventListener('click', (e) => {
  let counter = 0;
  inputs.forEach((input) => {
    if (
      input.classList.contains('error') === true ||
      input.value.length === 0
    ) {
      input.classList.add('error');
      emailErrorLogs();
      phoneErrorLogs();
      passwordErrorLogs();
      counter++;
    }
  });

  if (counter != 0) {
    e.preventDefault();
    alert('You have encountered an error!');
  } else {
    alert('Account has been successfully created!');
  }
});

const form = document.getElementById('userForm');
const jsonDisplay = document.getElementById('jsonDisplay');
const themeToggle = document.getElementById('themeToggle');
let dataList = [];


form.addEventListener('submit', function (event) {
  event.preventDefault();

  const errorElements = document.querySelectorAll('.error');
  errorElements.forEach(function (el) {
    el.textContent = "";
  });

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = document.getElementById('age').value.trim();
  const dob = document.getElementById('dob').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const hobbyElements = document.querySelectorAll('input[name="hobbies"]:checked');
  const country = document.getElementById('country').value;

  const hobbies = [];
  hobbyElements.forEach(function (h) {
    hobbies.push(h.value);
  });

  let valid = true;

  if (name.length < 2 || name.length > 50) {
    document.getElementById('nameError').textContent = "Name must be between 2 and 50 characters.";
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = "Enter a valid email (ex: john@example.com).";
    valid = false;
  }

  if (isNaN(age) || age < 1 || age > 120) {
    document.getElementById('ageError').textContent = "Age must be between 1 and 120.";
    valid = false;
  }

  const today = new Date();
  const dobDate = new Date(dob);
  if (!dob || dobDate > today) {
    document.getElementById('dobError').textContent = "Enter a valid date of birth (not in future).";
    valid = false;
  }

  if (!gender) {
    document.getElementById('genderError').textContent = "Please select your gender.";
    valid = false;
  }

  if (hobbies.length === 0) {
    document.getElementById('hobbiesError').textContent = "Select at least one hobby.";
    valid = false;
  }

  if (!country) {
    document.getElementById('countryError').textContent = "Please select a country.";
    valid = false;
  }

  if (!valid) {
    return;
  }


  const userData = {
    name: name,
    email: email,
    age: Number(age),
    dob: dob,
    gender: gender.value,
    hobbies: hobbies,
    country: country
  };

  dataList.push(userData);

  jsonDisplay.textContent = JSON.stringify(dataList, null, 4);

  localStorage.setItem('userDataList', JSON.stringify(dataList));

  form.reset();
});

themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = "Switch to Light Theme";
  } else {
    themeToggle.textContent = "Switch to Dark Theme";
  }
});

window.addEventListener('load', function () {
  const savedData = localStorage.getItem('userDataList');
  if (savedData) {
    dataList = JSON.parse(savedData);
    jsonDisplay.textContent = JSON.stringify(dataList, null, 4);
  }
});

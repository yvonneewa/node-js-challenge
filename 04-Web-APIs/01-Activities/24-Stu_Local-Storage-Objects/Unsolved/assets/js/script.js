const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signUpButton = document.querySelector('#sign-up');

signUpButton.addEventListener('click', function (event) {
  event.preventDefault();

  // TODO: Create user object from submission

  
  const person = {
    firstNameInput.value,
    lastNameInput.value,
    emailInput.value,
    passwordInput.value,
  };

  // TODO: Set new submission to local storage

  localStorage.setItem('person', JSON.stringify(person));
  renderMessage();
});












// const myObject = { name: "John", age: 30, city: "New York" };
// const jsonString = JSON.stringify(myObject);
// console.log(jsonString);
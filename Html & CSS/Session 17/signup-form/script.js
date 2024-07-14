// let name = document.getElementById('name');
// querySelector()

// getElementsByClassName()
// getElementsByTagName()
// getElementsByName()
// getElementById()

let form = document.querySelector("form");
let nameBox = document.getElementById("name");
let emailBox = document.getElementById("email");
let passwordBox = document.getElementById("password");
let confirmPasswordBox = document.getElementById("confirm-password");
let submitButton = document.getElementById("submit-button");
let usersDiv = document.getElementsByClassName("users")[0];

// submitButton.addEventListener("click", validateForm);

form.addEventListener("submit", validateForm);

function validateForm(eventDetails) {
  eventDetails.preventDefault();
  let name = nameBox.value;
  let email = emailBox.value;
  let password = passwordBox.value;
  let confirmPassword = confirmPasswordBox.value;

  if (
    name === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill in all fields");
    return;
  }
  if (email !== "" && email.indexOf("@") === -1) {
    alert("Please enter a valid email address");
    return;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  alert("Form Submitted Successfully");

  usersDiv.innerHTML = usersDiv.innerHTML +`
  <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Password: ${password}</p>

  `
    nameBox.value = "";
    emailBox.value = "";
    passwordBox.value = "";
    confirmPasswordBox.value = "";
}


// change event, input event
nameBox.addEventListener("input", validateName);
let spanName = document.getElementById("nameSpan");


function validateName() {
    if(nameBox.value.length < 4) {
       nameBox.style.border = "2px solid red";
       nameBox.style.outline = "none";
      spanName.innerText = "Name is too short";
      spanName.style.color = "red";
    spanName.style.fontSize = "12px";
    spanName.style.fontWeight = "bold";
    spanName.style.backgroundColor = "pink";

    }
    else{
        nameBox.style.border = "2px solid green";
        nameBox.style.outline = "none";
        spanName.innerText = "";
    }
}

emailBox.addEventListener("input", validateEmail);
let spanEmail = document.getElementById("emailSpan");

function validateEmail() {
    if(emailBox.indexOf("@") === -1) {
        emailBox.style.border = "2px solid red";
        emailBox.style.outline = "none";
        spanEmail.innerText = "Email is invalid";
        spanEmail.style.color = "red";
        spanEmail.style.fontSize = "12px";
        spanEmail.style.fontWeight = "bold";
        spanEmail.style.backgroundColor = "pink";
    
    }
    else{
        emailBox.style.border = "2px solid green";
        emailBox.style.outline = "none";
        spanEmail.innerText = "";
    }

}

passwordBox.addEventListener("input", validatePassword);
let spanPassword = document.getElementById("passwordSpan");

function validatePassword() {
    if(passwordBox.value.length < 8) {
        passwordBox.style.border = "2px solid red";
        passwordBox.style.outline = "none";
        spanPassword.innerText = "Password is too short";
        spanPassword.style.color = "red";
        spanPassword.style.fontSize = "12px";
        spanPassword.style.fontWeight = "bold";
        spanPassword.style.backgroundColor = "pink";
    }
    else{
        passwordBox.style.border = "2px solid green";
        passwordBox.style.outline = "none";
        spanPassword.innerText = "";
    }
}

confirmPasswordBox.addEventListener("input", validateConfirmPassword);
let spanConfirmPassword = document.getElementById("confirmPasswordSpan");

function validateConfirmPassword() {
    if(confirmPasswordBox.value !== passwordBox.value) {
        confirmPasswordBox.style.border = "2px solid red";
        confirmPasswordBox.style.outline = "none";
        spanConfirmPassword.innerText = "Passwords do not match";
        spanConfirmPassword.style.color = "red";
        spanConfirmPassword.style.fontSize = "12px";
        spanConfirmPassword.style.fontWeight = "bold";
        spanConfirmPassword.style.backgroundColor = "pink";
    }
    else{
        confirmPasswordBox.style.border = "2px solid green";
        confirmPasswordBox.style.outline = "none";
        spanConfirmPassword.innerText = "";
    }
}


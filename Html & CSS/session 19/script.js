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
let users =[];

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

  // usersDiv.innerHTML = usersDiv.innerHTML +`
  // <p>Name: ${name}</p>
  //   <p>Email: ${email}</p>
  //   <p>Password: ${password}</p>

  // `

  // 
let info= {
    name: name,
    email: email,
    password: password
}

users.push(info);
let usersJson = JSON.stringify(users);
localStorage.setItem("users", usersJson);

    nameBox.value = "";
    emailBox.value = "";
    passwordBox.value = "";
    confirmPasswordBox.value = "";
}



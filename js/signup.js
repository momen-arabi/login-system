var nameSignInput = document.querySelector("#signup .user-name");
var emailSignInput = document.querySelector("#signup .user-email");
var passSignInput = document.querySelector("#signup .user-pass");

var nameStatus = document.getElementById("name-status");
var emailStatus = document.getElementById("email-status");
var passStatus = document.getElementById("pass-status");

var nameHelp = document.getElementById("nameHelpBlock");
var emailHelp = document.getElementById("emailHelpBlock");
var passHelp = document.getElementById("passwordHelpBlock");

var signUpBtn = document.getElementById("signup-btn");

function isNameValid() {
  var validName = /^.{3,}$/;
  if (validName.test(nameSignInput.value)) return true;
  else return false;
}

function isEmailValid() {
  var validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (validEmail.test(emailSignInput.value)) return true;
  else return false;
}

function isPassValid() {
  var validPass = /^\w{8,20}$/;
  if (validPass.test(passSignInput.value)) return true;
  else return false;
}

function enableSignup() {
  if (isEmailValid() && isNameValid() && isPassValid()) signUpBtn.removeAttribute("disabled");
  else signUpBtn.setAttribute("disabled", "disabled");
}

signUpBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(localStorage);
  if (emailSignInput.value != localStorage.getItem("email") || localStorage.getItem("email") == null) {
    location.href = "index.html";
    setTimeout(function () {
      localStorage.setItem("name", nameSignInput.value);
      localStorage.setItem("email", emailSignInput.value);
      localStorage.setItem("pass", passSignInput.value);
    }, 10);
  } else {
    emailSignInput.classList.add("wrong-focus");
    emailSignInput.classList.remove("correct-focus");
    emailStatus.innerHTML = `<i class="fa-solid fa-circle-exclamation text-wrong"></i>`;
    emailHelp.innerText = "This email was used before. Please add a new one.";
    emailHelp.classList.remove("d-none");
  }
});

nameSignInput.addEventListener("input", function (e) {
  if (!e.target.value) {
    e.target.classList.remove("correct-focus");
    e.target.classList.remove("wrong-focus");
    nameStatus.innerHTML = "";
    nameHelp.classList.add("d-none");
  } else if (e.target.value && isNameValid()) {
    e.target.classList.add("correct-focus");
    e.target.classList.remove("wrong-focus");
    nameStatus.innerHTML = `<i class="fa-solid fa-circle-check text-correct"></i>`;
    nameHelp.classList.add("d-none");
  } else {
    e.target.classList.add("wrong-focus");
    e.target.classList.remove("correct-focus");
    nameStatus.innerHTML = `<i class="fa-solid fa-circle-exclamation text-wrong"></i>`;
    nameHelp.classList.remove("d-none");
  }
  enableSignup();
});

emailSignInput.addEventListener("input", function (e) {
  if (!e.target.value) {
    e.target.classList.remove("correct-focus");
    e.target.classList.remove("wrong-focus");
    emailStatus.innerHTML = "";
    emailHelp.classList.add("d-none");
  } else if (e.target.value && isEmailValid()) {
    e.target.classList.add("correct-focus");
    e.target.classList.remove("wrong-focus");
    emailStatus.innerHTML = `<i class="fa-solid fa-circle-check text-correct"></i>`;
    emailHelp.classList.add("d-none");
  } else {
    e.target.classList.add("wrong-focus");
    e.target.classList.remove("correct-focus");
    emailStatus.innerHTML = `<i class="fa-solid fa-circle-exclamation text-wrong"></i>`;
    emailHelp.classList.remove("d-none");
  }
  enableSignup();
});

passSignInput.addEventListener("input", function (e) {
  if (!e.target.value) {
    e.target.classList.remove("correct-focus");
    e.target.classList.remove("wrong-focus");
    passStatus.innerHTML = "";
    passHelp.classList.add("d-none");
  } else if (e.target.value && isPassValid()) {
    e.target.classList.add("correct-focus");
    e.target.classList.remove("wrong-focus");
    passStatus.innerHTML = `<i class="fa-solid fa-circle-check text-correct"></i>`;
    passHelp.classList.add("d-none");
  } else {
    e.target.classList.add("wrong-focus");
    e.target.classList.remove("correct-focus");
    passStatus.innerHTML = `<i class="fa-solid fa-circle-exclamation text-wrong"></i>`;
    passHelp.classList.remove("d-none");
  }
  enableSignup();
});

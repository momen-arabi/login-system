var emailLoginInput = document.querySelector("#login .user-email");
var passLoginInput = document.querySelector("#login .user-pass");

var emailHelp = document.getElementById("emailHelpBlock");
var passHelp = document.getElementById("passwordHelpBlock");

var loginBtn = document.getElementById("login-btn");

function enableLogin() {
  if (emailLoginInput.value && passLoginInput.value) loginBtn.removeAttribute("disabled");
  else loginBtn.setAttribute("disabled", "disabled");
}

function showInvalid() {
  if (emailLoginInput.value != localStorage.getItem("email")) {
    emailLoginInput.classList.add("wrong-focus");
    emailLoginInput.classList.remove("correct-focus");
    emailHelp.classList.remove("d-none");
  } else {
    emailHelp.classList.add("d-none");
    emailLoginInput.classList.remove("wrong-focus");
    emailLoginInput.classList.add("correct-focus");
  }
  if (passLoginInput.value != localStorage.getItem("pass")) {
    passLoginInput.classList.add("wrong-focus");
    passLoginInput.classList.remove("correct-focus");
    passHelp.classList.remove("d-none");
  } else {
    passHelp.classList.add("d-none");
    passLoginInput.classList.remove("wrong-focus");
    passLoginInput.classList.add("correct-focus");
  }
}

emailLoginInput.addEventListener("input", function () {
  enableLogin();
});

passLoginInput.addEventListener("input", function () {
  enableLogin();
});

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (emailLoginInput.value == localStorage.getItem("email") && passLoginInput.value == localStorage.getItem("pass")) location.href = "home.html";
  else showInvalid();
});

const erro = document.querySelector(".erro");
const password = document.querySelector(".passw");
const confirmPassword = document.querySelector(".confirm-passw");

function validatePassword() {
  if (confirmPassword.value.length > 0) {
    if (confirmPassword.value !== password.value) {
      erro.style.display = "block";
      confirmPassword.style.border = "1px solid red";
      password.style.border = "none";
    } else {
      erro.style.display = "none";
      password.style.border = "1px solid green";
      confirmPassword.style.border = "1px solid green";
    }
  } else {
    erro.style.display = "none";
    confirmPassword.style.border = "none";
  }
}

password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);

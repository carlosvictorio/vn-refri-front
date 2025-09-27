const pathEyeOpen = "/assets/visible.png";
const pathEyeHide = "/assets/hide.png";

const btnEye = document.querySelector(".btn-img");
const eye = document.querySelector(".eye");
const pswInput = document.querySelector(".psw");

btnEye.addEventListener("click", (e) => {
  if (eye.getAttribute("src") === pathEyeOpen) {
    pswInput.setAttribute("type", "text");
    eye.setAttribute("src", pathEyeHide);
  } else {
    pswInput.setAttribute("type", "password");
    eye.setAttribute("src", pathEyeOpen);
  }
  e.preventDefault();
});

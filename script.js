const iconAdress = {
  hidden: "icons/hide-icon.png",
  show: "icons/show-icon.png",
};
let hidden = false;

const password = document.querySelector(".js-password-input");
let originalPass = "";

const hideIcon = document.querySelector(".js-hide-icon");
hideIcon.addEventListener("click", () => {
  if (!hidden) {
    hidePassword(password.value);
  } else {
    showPassword();
  }
});

function hidePassword(pass) {
  originalPass = pass;
  let astericksContainer = "";
  for (let i = 0; i < pass.length; i++) {
    astericksContainer += "✱";
  }
  password.value = astericksContainer;
  hidden = true;
}

function showPassword() {
  password.value = originalPass;
  hidden = false;
}

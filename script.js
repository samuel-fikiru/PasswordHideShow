const iconAdress = {
  hide: "icons/hide-icon.png",
  show: "icons/show-icon.png",
};

let hidden = false;
const password = document.querySelector(".js-password-input");
let originalPass = "";

eventListener();
function eventListener() {
  const Icon = document.querySelector(".js-icon");
  Icon.addEventListener("click", () => {
    if (!hidden) {
      hidePassword(password.value);
    } else {
      showPassword();
    }
  });
}

const iconContainer = document.querySelector(".js-icon-container");
const showHtml = `<img class="show-icon js-icon" src="${iconAdress.show}" alt="" />`;
const hideHtml = `<img class="hide-icon js-icon" src="${iconAdress.hide}" alt="" />`;

function hidePassword(pass) {
  originalPass = pass;
  let astericksContainer = "";
  for (let i = 0; i < pass.length; i++) {
    astericksContainer += "✱";
  }
  password.value = astericksContainer;
  hidden = true;

  iconContainer.innerHTML = showHtml;
  eventListener();
}

function showPassword() {
  password.value = originalPass;
  hidden = false;
  iconContainer.innerHTML = hideHtml;
  eventListener();
}

const passwordField = document.querySelector("input[name='password']");
const confirmPass = document.querySelector("input[name='confirm-pass']");

passwordField.addEventListener('input', e => checkMatching(e));
confirmPass.addEventListener('input', e => checkMatching(e));

function checkMatching(event) {
  if (passwordField.value != confirmPass.value) {
    passwordField.setCustomValidity("* Passwords must match");
    confirmPass.setCustomValidity("* Passwords must match");
    event.target.reportValidity();
    // console.log(event);
  }
  else {
    passwordField.setCustomValidity("");
  }
}
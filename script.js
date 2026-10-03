const waitlistForm = document.getElementById("waitlistForm");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

waitlistForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (!email) {
    formMessage.textContent = "Enter an email first. Even thought-organizing software needs data.";
    return;
  }

  formMessage.textContent = "You're on the list. Your thoughts can remain gloriously chaotic for now.";

  emailInput.value = "";
});
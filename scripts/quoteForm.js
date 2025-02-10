const subject = encodeURIComponent("[Árajánlat kérés]");
const form = document.getElementById("quote-form");
const inputName = form.querySelector('[name="name"]');
const inputEmail = form.querySelector('[name="email"]');
const inputText = form.querySelector('[name="message"]');
const resetBtn = document.getElementById("quote-form-reset-button");
const submitBtn = document.getElementById("quote-form-submit-button");

// Event listeners 
inputName.addEventListener("input", checkActionAvailability);
inputEmail.addEventListener("input", checkActionAvailability);
inputText.addEventListener("input", checkActionAvailability);

resetBtn.addEventListener("click",(event)=>{
  event.preventDefault();
  form.reset();
  resetBtn.classList.add("button-disabled");
});

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent actual submission

  const name = encodeURIComponent(inputName.value);
  const email = encodeURIComponent(inputEmail.value);
  const message = encodeURIComponent(inputText.value);

  const mailtoLink = `mailto:london50@ethereal.email?subject=${subject}&body=Név:%20${name}%0AEmail:%20${email}%0AÜzenet:%20${message}`;

  window.location.href = mailtoLink;

  form.reset();
  resetBtn.classList.add("button-disabled");
  submitBtn.classList.add("button-disabled");
});

// Functions
function checkActionAvailability() {
  // Checking reset button
  if (
    inputName.value.length > 0 ||
    inputEmail.value.length > 0 ||
    inputText.value.length > 0
  ) {
    resetBtn.classList.remove("button-disabled");
  } else {
    resetBtn.classList.add("button-disabled");
  }

  // Checking submit button
  if(inputName.checkValidity() &&
  inputEmail.checkValidity() &&
  inputText.checkValidity()){
    submitBtn.classList.remove("button-disabled");
  } else {
    submitBtn.classList.add("button-disabled");
  }
}
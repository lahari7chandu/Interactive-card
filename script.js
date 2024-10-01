const confirmBtn = document.getElementById("confirmBtn");
const continueBtn = document.getElementById("continueBtn");
const completeCheck = document.getElementById("complete-check");
const confirm = document.getElementById("confirm");

const name = document.getElementById("card-holder-name");
const nameError = document.getElementById("nameError");

const cardNumber = document.getElementById("card-number");
const invalidNumber = document.getElementById("invalidNumber");

const month = document.getElementById("exp-month");
const year = document.getElementById("exp-year");
const dateError = document.getElementById("dateError");

const cvc = document.getElementById("cvc");
const cvcError = document.getElementById("cvcError");

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let isValid = true;

  if (name.value === "") {
    nameError.textContent = "Please Enter Your Name";
    nameError.style.display = "block";
    name.classList.add("error-border"); 
    isValid = false;
  } else {
    nameError.style.display = "none";
  }
  const cardNumberRegex = /^\d+$/;
  if (cardNumber.value === "") {
    invalidNumber.textContent = "Please Enter Your Number";
    invalidNumber.style.display = "block";
    cardNumber.classList.add("error-border"); 
    isValid = false;

  } else if (!cardNumberRegex.test(cardNumber.value)) {
    invalidNumber.textContent = "Wrong format,numbers only";
    invalidNumber.style.display = "block";
    isValid = false;
  } else {
    invalidNumber.style.display = "none";
  }

  if (month.value === "" || year.value === "") {
    dateError.textContent = "Can't be blank";
    dateError.style.display = "block";
    month.classList.add("error-border"); 
    year.classList.add("error-border"); 
    isValid = false;
  } else {
    dateError.style.display = "none";
  }

  if (cvc.value === "") {
    cvcError.textContent = "Can't be blank";
    cvcError.style.display = "block";
    cvc.classList.add("error-border"); 
    isValid = false;
  } else {
    cvcError.style.display = "none";
  }
  if (isValid) {
    completeCheck.classList.remove("hidden");
    confirm.classList.add("hidden");
  }
});

continueBtn.addEventListener("click", (e) => {
  e.preventDefault();
  name.value = "";
  cardNumber.value = "";
  month.value = "";
  year.value = "";
  cvc.value = "";
  completeCheck.classList.add("hidden");
  confirm.classList.remove("hidden");
});

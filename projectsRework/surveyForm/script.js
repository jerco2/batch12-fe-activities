const takeSurveyBTN = document.querySelector("#takeSurveyButton");
const titleContainer = document.querySelector(".TitleContainer");
const surveyContainer = document.querySelector(".SurveyContainer");

const nameForm = document.querySelector("#nameForm");
const emailForm = document.querySelector("#emailForm");
const numberForm = document.querySelector("#numberForm");

const nameFormNextButton = document.querySelector("#nameFormNextButton");
const emailFormNextButton = document.querySelector("#emailFormNextButton");
const emailFormBackButton = document.querySelector("#emailFormBackButton");
const numberFormNextButton = document.querySelector("#numberFormNextButton");
const numberFormBackButton = document.querySelector("#numberFormBackButton");
const submitFormBackButton = document.querySelector("#submitFormBackButton");

const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const numberInput = document.querySelector("#numberInput");
const nameInputError = document.querySelector("#nameInputError");
const emailInputError = document.querySelector("#emailInputError");

takeSurveyBTN.addEventListener("click", function () {
  nameForm.style.left = "0";
  titleContainer.style.display = "none";
  surveyContainer.style.left = "0";
});

const nextFunction = (formA, formB) => {
  formA.style.left = "-100%";
  formB.style.left = "0";
};
const backFunction = (formA, formB) => {
  formA.style.left = "0";
  formB.style.left = "100%";
};

const errorStyleOn = (elementInput, elementErrorMessage) => {
  elementInput.style.border = "1px solid red";
  elementErrorMessage.style.display = "block";
};
const errorStyleOff = (elementInput, elementErrorMessage) => {
  elementInput.style.border = "1px solid black";
  elementErrorMessage.style.display = "none";
};

nameFormNextButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (nameInput.value === "") {
    errorStyleOn(nameInput, nameInputError);
  } else {
    errorStyleOff(nameInput, nameInputError);
    nextFunction(nameForm, emailForm);
  }
});

emailFormNextButton.addEventListener("click", function (e) {
  e.preventDefault();
  let valid = false;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailInput.value.match(mailformat)) {
    valid = true;
  }
  if (emailInput.value === "") {
    errorStyleOn(emailInput, emailInputError);
  } else if (valid === true) {
    errorStyleOff(emailInput, emailInputError);
    nextFunction(emailForm, numberForm);
  } else {
    emailInputError.innerHTML = "Invalid email format";
    errorStyleOn(emailInput, emailInputError);
  }
});

emailFormBackButton.addEventListener("click", function (e) {
  e.preventDefault();
  backFunction(nameForm, emailForm);
});

numberFormNextButton.addEventListener("click", function (e) {
  e.preventDefault();
  nextFunction(numberForm, submitForm);
});
numberFormBackButton.addEventListener("click", function (e) {
  e.preventDefault();
  backFunction(emailForm, numberForm);
});

submitFormBackButton.addEventListener("click", function (e) {
  e.preventDefault();
  backFunction(numberForm, submitForm);
});

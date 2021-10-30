const takeSurveyBTN = document.querySelector("#takeSurveyButton");
const titleContainer = document.querySelector(".TitleContainer");
const surveyContainer = document.querySelector(".SurveyContainer");

const nameForm = document.querySelector("#nameForm");
const emailForm = document.querySelector("#emailForm");
const numberForm = document.querySelector("#numberForm");
const surveyIntroForm = document.querySelector("#surveyIntroForm");
const questionForm = document.querySelector("#questionForm");

const nameFormNextButton = document.querySelector("#nameFormNextButton");
const emailFormNextButton = document.querySelector("#emailFormNextButton");
const emailFormBackButton = document.querySelector("#emailFormBackButton");
const numberFormNextButton = document.querySelector("#numberFormNextButton");
const numberFormBackButton = document.querySelector("#numberFormBackButton");

const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const numberInput = document.querySelector("#numberInput");

const nameInputError = document.querySelector("#nameInputError");
const emailInputError = document.querySelector("#emailInputError");
const numberInputError = document.querySelector("#numberInputError");

takeSurveyBTN.addEventListener("click", function () {
  nameForm.style.left = "0";
  titleContainer.style.display = "none";
  surveyContainer.style.left = "0";
});

const nextFunction = (formA, formB, input) => {
  formA.style.left = "-100%";
  formB.style.left = "0";
  input.select();
};
const backFunction = (formA, formB, input) => {
  formA.style.left = "0";
  formB.style.left = "100%";
  input.focus();
};

// ERROR MESSAGE
const errorStyleOn = (elementInput, elementErrorMessage) => {
  elementInput.style.border = "1px solid red";
  elementErrorMessage.style.display = "block";
};
const errorStyleOff = (elementInput, elementErrorMessage) => {
  elementInput.style.border = "1px solid black";
  elementErrorMessage.style.display = "none";
};

// NEXT BUTTONS FUNCTIONS
nameFormNextButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (nameInput.value === "") {
    errorStyleOn(nameInput, nameInputError);
  } else {
    errorStyleOff(nameInput, nameInputError);
    nextFunction(nameForm, emailForm, emailInput);
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
    nextFunction(emailForm, numberForm, numberInput);
  } else {
    emailInputError.innerHTML = "Invalid email format";
    errorStyleOn(emailInput, emailInputError);
  }
});
numberFormNextButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (numberInput.value === "") {
    errorStyleOn(numberInput, numberInputError);
  } else {
    errorStyleOff(numberInput, numberInputError);
    numberForm.style.display = "none";
    surveyIntroForm.style.display = "flex";
    surveyIntroForm.style.opacity = "1";
  }
});
surveyIntroForm.addEventListener("click", function (e) {
  e.preventDefault();
  nextFunction(surveyIntroForm, questionForm);
});

// NUMBER INPUT ONLY ACCEPTS NUMBERS
numberInput.addEventListener("keypress", function (e) {
  var ch = String.fromCharCode(e.which);
  if (!/[0-9]/.test(ch)) {
    e.preventDefault();
  }
});

// BACK BUTTONS FUNCTIONS
emailFormBackButton.addEventListener("click", function (e) {
  e.preventDefault();
  backFunction(nameForm, emailForm, nameInput);
});
numberFormBackButton.addEventListener("click", function (e) {
  e.preventDefault();
  backFunction(emailForm, numberForm, emailInput);
});

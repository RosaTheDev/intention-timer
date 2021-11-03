var studyButton = document.querySelector('.study');
var studyIcon = document.querySelector('.iconStudy');
var meditateButton = document.querySelector('.meditate');
var meditateIcon = document.querySelector('.iconMeditate');
var exerciseButton = document.querySelector('.exercise');
var exerciseIcon = document.querySelector('.iconExercise');
var startActivityButton = document.querySelector('.startActivityButton');
var userInputGoalDescription = document.querySelector('input[name="userInputGoalDescription"]');
var userInputMinutes = document.querySelector('input[name="userInputMinutes"]');
var userInputSeconds = document.querySelector('input[name="userInputSeconds"]');
var descriptionErrorMessage = document.querySelector('.descriptionErrorMessage');
var descriptionErrorMessageIcon = document.querySelector('.descriptionErrorMessageIcon');
var minutesErrorMessage = document.querySelector('.minutesErrorMessage');
var minutesErrorMessageIcon = document.querySelector('.minutesErrorMessageIcon');
var secondsErrorMessage = document.querySelector('.secondsErrorMessage');
var secondsErrorMessageIcon = document.querySelector('.secondsErrorMessageIcon');

function changeStudyButtonColor() {
  defaultColor();
  studyButton.style.border = 'solid 1px #B3FD78';
  studyButton.style.color = '#B3FD78';
  studyIcon.setAttribute('src', './assets/study-active.svg');
};

function changeMeditateButtonColor() {
  defaultColor();
  meditateButton.style.border = 'solid 1px #C278FD';
  meditateButton.style.color = '#C278FD';
  meditateIcon.setAttribute('src', './assets/meditate-active.svg');
};

function changeExerciseButtonColor() {
  defaultColor();
  exerciseButton.style.border = 'solid 1px #FD8078';
  exerciseButton.style.color = '#FD8078';
  exerciseIcon.setAttribute('src', './assets/exercise-active.svg');
};

function defaultColor() {
  studyButton.style.border = 'solid 1px #ffffff';
  studyButton.style.color = '#ffffff';
  meditateButton.style.border = 'solid 1px #ffffff';
  meditateButton.style.color = '#ffffff';
  exerciseButton.style.border = 'solid 1px #ffffff';
  exerciseButton.style.color = '#ffffff';
  studyIcon.setAttribute('src', './assets/study.svg');
  meditateIcon.setAttribute('src', './assets/meditate.svg');
  exerciseIcon.setAttribute('src', './assets/exercise.svg');
};

function formValidation() {
  validationError = true;
  resetErrorMessage()
  if (!userInputGoalDescription.value) {
     descriptionErrorMessageIcon.classList.remove("hidden");
     descriptionErrorMessage.classList.remove("hidden");
  } else if (!userInputMinutes.value) {
     minutesErrorMessageIcon.classList.remove("hidden");
     minutesErrorMessage.classList.remove("hidden");
  } else if (!userInputSeconds.value) {
     secondsErrorMessageIcon.classList.remove("hidden");
     secondsErrorMessage.classList.remove("hidden");
   }
}


function resetErrorMessage(){
  descriptionErrorMessageIcon.classList.add("hidden");
  descriptionErrorMessage.classList.add("hidden");
  minutesErrorMessageIcon.classList.add("hidden");
  minutesErrorMessage.classList.add("hidden");
  secondsErrorMessageIcon.classList.add("hidden");
  secondsErrorMessage.classList.add("hidden");
}

function switchTimerView(){
  console.log("button works")
  formValidation();
  console.log("why does this still show/run when errors pop up from the function above?")
  //Detailed explanation of where I left off + pseudo code:
  //if formValidation failed, don't run the rest of switchTimerView - still need programmed
  //somehow grab the selected activity box value and assign it to the variable userInputCategory
  //pass form data into the class to make an object. started building it below:
  ///////new Activity(userInputCategory, userInputGoalDescription, userInputMinutes, userInputSeconds)

  //After all of that is done, then complete the function with:
  //mainBox.innerHTML to hide form and show new circle timer
  ////needs to be designed
  ////needs to show time from form input
  ////circle timer color should match the color of the activity selected
}



studyButton.addEventListener('click', changeStudyButtonColor)
meditateButton.addEventListener('click', changeMeditateButtonColor)
exerciseButton.addEventListener('click', changeExerciseButtonColor)
startActivityButton.addEventListener('click', switchTimerView)

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
var mainBox = document.querySelector('.mainBox');
var timerView = document.querySelector('.timerView');
var defaultLeftPanelTitle = document.querySelector('.defaultLeftPanelTitle');
var secondaryLeftPanelTitle = document.querySelector('.secondaryLeftPanelTitle');
var goalDescriptionTimerView = document.querySelector('.goalDescriptionTimerView')
var timerInput = document.querySelector('.timerInput');
var timerColor = document.querySelector('.timerButton');

var userInputCategory;
var loggedUserInput = [];


function changeStudyButtonColor() {
  defaultColor();
  userInputCategory = "study";
  studyButton.style.border = 'solid 1px #B3FD78';
  studyButton.style.color = '#B3FD78';
  timerColor.style.border = "1px solid #B3FD78";
  studyIcon.setAttribute('src', './assets/study-active.svg');
};

function changeMeditateButtonColor() {
  defaultColor();
  userInputCategory = "meditate";
  meditateButton.style.border = 'solid 1px #C278FD';
  meditateButton.style.color = '#C278FD';
  timerColor.style.border = "1px solid #C278FD";
  meditateIcon.setAttribute('src', './assets/meditate-active.svg');
};

function changeExerciseButtonColor() {
  defaultColor();
  userInputCategory = "exercise";
  exerciseButton.style.border = 'solid 1px #FD8078';
  exerciseButton.style.color = '#FD8078';
  timerColor.style.border = "1px solid #FD8078";
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
  resetErrorMessage()
  if (!userInputGoalDescription.value) {
     descriptionErrorMessageIcon.classList.remove("hidden");
     descriptionErrorMessage.classList.remove("hidden");
    return false
  } else if (!userInputMinutes.value) {
     minutesErrorMessageIcon.classList.remove("hidden");
     minutesErrorMessage.classList.remove("hidden");
    return false
  } else if (!userInputSeconds.value) {
     secondsErrorMessageIcon.classList.remove("hidden");
     secondsErrorMessage.classList.remove("hidden");
    return false
   } else {
     return true
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
  formValidation();
  currentActivity = new Activity(userInputCategory, userInputGoalDescription, userInputMinutes, userInputSeconds);
  if(formValidation() === true) {
    loggedUserInput.push(currentActivity);
    hideMainView();
    showTimer();
  }


  //After all of that is done, then complete the function with:
  //mainBox.innerHTML to hide form and show new circle timer
  ////needs to be designed
  ////needs to show time from form input
  ////circle timer color should match the color of the activity selected
}

function hideMainView() {
  mainBox.classList.add("hidden");
  timerView.classList.remove("hidden");
  defaultLeftPanelTitle.classList.add('hidden');
  secondaryLeftPanelTitle.classList.remove('hidden');
}

function showTimer() {
goalDescriptionTimerView.innerHTML = `${userInputGoalDescription.value}`
console.log(userInputGoalDescription.value)
timerInput.innerHTML = `${userInputMinutes.value} : ${userInputSeconds.value}`

}

//helper function that will be called in switchTimerView function that will show the timer


studyButton.addEventListener('click', changeStudyButtonColor)

meditateButton.addEventListener('click', changeMeditateButtonColor)

exerciseButton.addEventListener('click', changeExerciseButtonColor)

startActivityButton.addEventListener('click', switchTimerView)

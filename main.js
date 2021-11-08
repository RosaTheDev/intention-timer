var studyButton = document.querySelector('.study');
var studyIcon = document.querySelector('.iconStudy');
var meditateButton = document.querySelector('.meditate');
var meditateIcon = document.querySelector('.iconMeditate');
var exerciseButton = document.querySelector('.exercise');
var exerciseIcon = document.querySelector('.iconExercise');
var startActivityButton = document.querySelector('.startActivityButton');
var userInputGoalDescription = document.querySelector('.goalsTextLine');
var userInputMinutes = document.querySelector('.minutesTextLine');
var userInputSeconds = document.querySelector('.secondsTextLine');
var categoryErrorMessage = document.querySelector('.categoryErrorMessage');
var categoryErrorMessageIcon = document.querySelector('.categoryErrorMessageIcon');
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
var logActivityButton = document.querySelector('.logActivityButton');
var userInputCategory;
var loggedUserInput = [];
var currentActivity;
var savedActivies = [];
var totalTime = (userInputMinutes * 60) + userInputSeconds;


studyButton.addEventListener('click', changeStudyButtonColor)
meditateButton.addEventListener('click', changeMeditateButtonColor)
exerciseButton.addEventListener('click', changeExerciseButtonColor)
startActivityButton.addEventListener('click', switchTimerView)
timerColor.addEventListener('click', countDown)
logActivityButton.addEventListener('click', logActivity)

function logActivity() {
  ////it adds the object from the currentActivity variable to savedAcivities array
  console.log("button works")
  savedActivies.unshift(currentActivity)
  console.log(savedActivies)
  ////past activites updates with a card showing object info
}

function countDown() {
  currentActivity.startTimer(currentActivity.minutes, currentActivity.seconds);
  disableButton();
};

function disableButton() {
  timerColor.disabled = true;
};

function show(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('hidden');
  }
}

function hide(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('hidden');
  }
}

function changeStudyButtonColor() {
  defaultColor();
  userInputCategory = "study";
  studyButton.style.border = "1px solid #B3FD78";
  studyButton.style.color = '#B3FD78';
  timerColor.style.border = "3px solid #B3FD78";
  studyIcon.setAttribute('src', './assets/study-active.svg');
};

function changeMeditateButtonColor() {
  defaultColor();
  userInputCategory = "meditate";
  meditateButton.style.border = 'solid 1px #C278FD';
  meditateButton.style.color = '#C278FD';
  timerColor.style.border = "3px solid #C278FD";
  meditateIcon.setAttribute('src', './assets/meditate-active.svg');
};

function changeExerciseButtonColor() {
  defaultColor();
  userInputCategory = "exercise";
  exerciseButton.style.border = 'solid 1px #FD8078';
  exerciseButton.style.color = '#FD8078';
  timerColor.style.border = "3px solid #FD8078";
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
  if (!userInputCategory) {
    show([categoryErrorMessageIcon, categoryErrorMessage]);
    return false
  } else if (!userInputGoalDescription.value) {
    show([descriptionErrorMessageIcon, descriptionErrorMessage]);
    return false
  } else if (!userInputMinutes.value) {
    show([minutesErrorMessageIcon, minutesErrorMessage]);
    return false
  } else if (!userInputSeconds.value) {
    show([secondsErrorMessageIcon, secondsErrorMessage]);
    return false
   } else {
     return true
   }
};

function resetErrorMessage(){
  hide([categoryErrorMessageIcon, categoryErrorMessage, descriptionErrorMessageIcon, descriptionErrorMessage, minutesErrorMessageIcon, minutesErrorMessage, secondsErrorMessageIcon, secondsErrorMessage]);
};

function switchTimerView(){
  formValidation();
  currentActivity = new Activity(userInputCategory, userInputGoalDescription.value, userInputMinutes.value, userInputSeconds.value);
  if(formValidation() === true) {
    loggedUserInput.push(currentActivity);
    hideMainView();
    showTimer();
  }
};

function hideMainView() {
  hide([mainBox, defaultLeftPanelTitle]);
  show([timerView, secondaryLeftPanelTitle]);
};

function showTimer() {
goalDescriptionTimerView.innerHTML = `${userInputGoalDescription.value}`
userInputMinutes.value = userInputMinutes.value.toString().padStart(2, '0');
userInputSeconds.value = userInputSeconds.value.toString().padStart(2, '0');
timerInput.innerHTML = `${userInputMinutes.value} : ${userInputSeconds.value}`
};

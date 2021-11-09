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
var savedActivities = [];
var totalTime = (userInputMinutes * 60) + userInputSeconds;
var noLoggedActivities = document.querySelector('.noLoggedActivities');
var loggedActivities = document.querySelector('.loggedActivities');
var cardHolder = document.querySelector('.cardHolder');
var createNewActivityButton = document.querySelector('.createNewActivityButton');
var newActivityView = document.querySelector('.newActivityView');

studyButton.addEventListener('click', changeStudyButtonColor)
meditateButton.addEventListener('click', changeMeditateButtonColor)
exerciseButton.addEventListener('click', changeExerciseButtonColor)
startActivityButton.addEventListener('click', switchTimerView)
timerColor.addEventListener('click', countDown)
logActivityButton.addEventListener('click', logActivity)
createNewActivityButton.addEventListener('click', createNewActivity)

function createNewActivity() {
  hide([secondaryLeftPanelTitle, createNewActivityButton, timerView, newActivityView])
  show([mainBox, defaultLeftPanelTitle])
  userInputSeconds.value = '';
  userInputMinutes.value = '';
  userInputGoalDescription.value = '';
  currentActivity = null;
  defaultColor();
  timerColor.disabled = false;
}

function logActivity() {
  savedActivities.unshift(currentActivity)
  cardHolder.innerHTML = "";
  for (var i = 0; i < savedActivities.length; i++){
    cardHolder.innerHTML += `
    <div class="cardInfo ${[i]}">
      <div class="card">
        <div class="topCardInfo">
          <p><strong>${savedActivities[i].category}</strong>
          <p>${savedActivities[i].minutes} MIN
        </div>
        <div class="bottomCardInfo">
          <p>${savedActivities[i].description}
        </div>
      </div>
      <div class="cardColor">
      </div>
    </div>`;
  }
  hide([timerView, noLoggedActivities])
  show([newActivityView, createNewActivityButton, loggedActivities])
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
  userInputCategory = "STUDY";
  studyButton.style.border = "1px solid #B3FD78";
  studyButton.style.color = '#B3FD78';
  timerColor.style.border = "3px solid #B3FD78";
  studyIcon.setAttribute('src', './assets/study-active.svg');
};

function changeMeditateButtonColor() {
  defaultColor();
  userInputCategory = "MEDITATE";
  meditateButton.style.border = 'solid 1px #C278FD';
  meditateButton.style.color = '#C278FD';
  timerColor.style.border = "3px solid #C278FD";
  meditateIcon.setAttribute('src', './assets/meditate-active.svg');
};

function changeExerciseButtonColor() {
  defaultColor();
  userInputCategory = "EXERCISE";
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

var studyButton = document.querySelector('.study');
var studyIcon = document.querySelector('.iconStudy');
var meditateButton = document.querySelector('.meditate');
var meditateIcon = document.querySelector('.iconMeditate');
var exerciseButton = document.querySelector('.exercise');
var exerciseIcon = document.querySelector('.iconExercise');




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


studyButton.addEventListener('click', changeStudyButtonColor)
meditateButton.addEventListener('click', changeMeditateButtonColor)
exerciseButton.addEventListener('click', changeExerciseButtonColor)

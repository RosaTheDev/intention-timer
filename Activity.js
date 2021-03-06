class Activity {
    constructor(category, description, minutes, seconds, completed, id) {
        this.category = category;
        this.description = description;
        this.minutes = minutes;
        this.seconds = seconds;
        this.completed = "Yes";
        this.id = Date.now();
    }

startTimer(minutes, seconds) {
  setInterval(function(){
    if(seconds > 0){
      seconds = seconds -1;
    } else if (minutes > 0) {
      minutes = minutes -1;
      seconds = 59;
    } else {
      timerInput.innerHTML = `Congrats!`
      show([logActivityButton])
      return timerColor.innerText = `COMPLETE`
    }
      minutes = minutes.toString().padStart(2, '0');
      seconds = seconds.toString().padStart(2, '0');
      timerInput.innerText = `${minutes} : ${seconds}`
    }, 1000)
  }
}

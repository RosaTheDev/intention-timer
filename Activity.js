class Activity {
    constructor(category, description, minutes, seconds, completed, id) {
        this.category = category;
        this.description = description;
        this.minutes = minutes;
        this.seconds = seconds;
        this.completed = completed;
        this.id = id;
    }

    startTimer(minutes, seconds) {
      setInterval(function(){
        if(seconds > 0){
          seconds = seconds -1;
        } else if (minutes > 0) {
          minutes = minutes -1;
          seconds = 59;
        } else {
          return timerColor.innerText = `COMPLETE`
        }


      }, 1000)

    }

    markComplete() {

    }

    saveToStorage() {

    }
}

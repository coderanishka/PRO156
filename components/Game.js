AFRAME.registerComponent("game-play", {
    schema: {
      elementId: { type: "string", default: "#coin1" },      
    },
    init: function () {
        var duration = 120;
        var timer = document.querySelector("#timer");
        this.startTimer(duration, timer);
      },
    update: function() {
      this.isCollided(this.data.elementId);
    },
  
    startTimer: function (duration, timer) {
        var mins;
        var secs;
    
        setInterval(()=> {
            if(duration >= 0){
                mins = parseInt(duration/60)
                secs = parseInt(duration%60)
                if(mins < 10){
                    mins = '0' + mins
                }
                if(secs < 10){
                    secs = '0' + secs
                }
                timer.setAttribute('text', {value: mins + ':' + secs})
                duration -=1
            }
        },1000)
      },
      isCollided: function (elementId) {
        var element = document.querySelector(elementId);
        element.addEventListener("collide", (e) => {
          if (elementId.includes("#coin")) {
            element.setAttribute("visible", false);
            this.updateScore();
            this.updateTargets();
          } 
          else {
            this.gameOver();
          }
        });
      },
      updateTargets: function () {
        var element = document.querySelector("#targets");
        var count = element.getAttribute("text").value;
        var currentTargets = parseInt(count);
        currentTargets -= 1;
        element.setAttribute("text", {
          value: currentTargets,
        });
      },
      updateScore: function () {
        var element = document.querySelector("#score");
        var count = element.getAttribute("text").value;
        var currentScore = parseInt(count);
        currentScore += 50;
        element.setAttribute("text", {
          value: currentScore,
        });
      },
      gameOver: function () {
        var diver = document.querySelector("#diver");
        var element = document.querySelector("#game_over_text");
        element.setAttribute("visible", true);
        diver.setAttribute("dynamic-body", {
          mass: 0.5
        });
      } 
  });

var time;
function setup() {
  createCanvas(400,400);

}

function draw() 
{
  background("grey");
 time = counter.innerHTML;
 console.log(time)

}


  var timeoutHandle;
  var counter;

  function countdown(minutes, seconds) {
    var seconds = 60;
    var mins = minutes

    function tick() {
      counter = document.getElementById("timer");
      counter.style.position="absolute"
      var current_minutes = mins - 1
      seconds--;
      counter.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        timeoutHandle = setTimeout(tick, 1000);
      } else {

        if (mins > 1) {

          // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
          setTimeout(function() {
            countdown(mins - 1);
          }, 1000);

        }
      }
    }
   tick();
  }
  countdown(10);







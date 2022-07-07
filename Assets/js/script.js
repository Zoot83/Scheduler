var timeDisplayEl = $('#time-display');
var eventInput = $("#event-input");


// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

function handleClickEvent(event){
  event.preventDefault();

  var saveBtn = event.target;

  


}

$("#button-addon2").on("submit", handleClickEvent);


setInterval(displayTime, 1000);


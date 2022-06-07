var DateTime = luxon.DateTime;
//Gets the actual date and hour
var actualDate = DateTime.now();

function currentDay(){
    //Sets the format
    var currentDate = actualDate.toLocaleString(DateTime.DATE_HUGE);
    $("#currentDay").text(currentDate);
}


function bgColor(){
    //Get the current hour
    var currentHour = actualDate.hour;
    
    for(var i = 9; i<= 17; i++){
        //Makes the actual hour background green
        if (currentHour == i){
            $("#hour-"+i).addClass("bg-success");
        }
        //Makes the past hours upcoming red
        else if(currentHour < i){
            $("#hour-"+i).addClass("bg-danger");
        }
        //Makes the past hours background 
        else if(currentHour > i){
            $("#hour-"+i).addClass("bg-secondary");
        }        
    }
    
}


//Look for the task from what the button was clicked
$(".wrap").on("click", "i", function() {

    //Get the last two elements of the current id string
    var taskNumber = this.id.slice(-2);
    if(taskNumber == "-9"){
        actualTask = $("#hour-9");
    }

    else{
        actualTask = $("#hour-"+taskNumber);
    }

    console.log(actualTask)    
    
  });




currentDay();
bgColor();


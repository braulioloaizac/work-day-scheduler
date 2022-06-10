var DateTime = luxon.DateTime;
//Gets the actual date and hour
var actualDate = DateTime.local();

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
        //Makes the past hours background  red
        else if(currentHour < i){
            $("#hour-"+i).addClass("bg-danger");
        }
        //Makes the upcoming hours background 
        else if(currentHour > i){
            $("#hour-"+i).addClass("bg-secondary");
        }        
    }
    
}

var task_9 = "";
var task_10 = "";
var task_11 = "";
var task_12 = "";
var task_13 = "";
var task_14 = "";
var task_15 = "";
var task_16 = "";
var task_17 = "";

//Loads the tasks from localstorage
function loadTasks(){
    for(i = 9; i <= 17; i++){
        var task = localStorage.getItem('task_'+i);
        $("#hour-"+i).text(task)
    }
    
}


//Look for the task from what the button was clicked
$(".wrap").on("click", "i", function() {

    //Get the last two elements of the current id string
    var taskNumber = this.id.slice(-2);
    //Condition for 9 because i has only one number
    if(taskNumber == "-9"){
        actualTask = $("#hour-9");
        task_9 = actualTask.val();
        //Saves the text on local storage
        localStorage.setItem('task_9',task_9);
    }
    else{
        actualTask = $("#hour-"+taskNumber);
        var taskNumberObj = "task_"+ taskNumber;
        //Gets the text from the textarea
        taskNumberObj = actualTask.val()
        //Saves the text on local storage
        localStorage.setItem('task_'+taskNumber,taskNumberObj);
    }   
  });




currentDay();
bgColor();
loadTasks();


var DateTime = luxon.DateTime;
//Gets the actual date and hour
var actualDate = DateTime.now();


tasks ={
    task_9:"",
    task_10:"",
    task_11:"",
    task_12:"",
    task_13:"",
    task_14:"",
    task_15:"",
    task_16:"",
    task_17:""
};

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
        tasks.task_9 = actualTask.val();
    }
    else{
        actualTask = $("#hour-"+taskNumber);
        var taskNumberObj = "task_"+ taskNumber;
        tasks[taskNumberObj] = actualTask.val();
    }   
    
    // console.log(tasks)    
    
  });




currentDay();
bgColor();


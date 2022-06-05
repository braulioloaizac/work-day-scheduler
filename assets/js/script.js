var DateTime = luxon.DateTime;
//Gets the actual date and hour
var actualDate = DateTime.now();


function currentDay(){
    //Sets the format
    var currentDate = actualDate.toLocaleString(DateTime.DATE_HUGE);
    $("#currentDay").text(currentDate);
}

function bgColor(){
    
    var currentHour = actualDate.hour;
    
    for(var i = 9; i<= 17; i++){
        
        if (currentHour == i){
            $("#task-"+i).addClass("bg-success");
        }
        else if(currentHour < i){
            $("#task-"+i).addClass("bg-danger");
        }
        else if(currentHour > i){
            $("#task-"+i).addClass("bg-secondary");
        }
        
    }
    
}







currentDay();
bgColor();
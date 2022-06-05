var DateTime = luxon.DateTime;
//Gets the actual date and hour
var actualDate = DateTime.now();


function currentDay(){
    //Sets the format
    var currentDate = actualDate.toLocaleString(DateTime.DATE_HUGE);
    $("#currentDay").text(currentDate);
}

function renderSchedule(){
    for(var i = 9; i<= 17; i++){
        $(".row").add("div").addClass("col-sm-2 shadow-sm p-3 mb-3 bg-body rounded text-center align-middle").text(i);
        $(".row").add("div").addClass("col-sm-9 shadow-sm p-3 mb-3 bg-body rounded text-center  align-middle").attr('id', 'hour-'+i);
        $(".row").add("div").addClass("col-sm-1 bg-info bg-gradient shadow-sm p-3 mb-3 bg-body rounded m text-center")
        // <div class=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16"><path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/></svg></div> 

    }
}
renderSchedule();


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

function taskManager(){
    for(var i = 9; i<= 17; i++){
        $( "#hour-"+i).on("click", "p", function() {
            console.log("<p> was clicked");
          });
    }
    
}




currentDay();
bgColor();
taskManager();
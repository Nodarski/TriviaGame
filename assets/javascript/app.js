console.log("hello");


// LOOPING COUNTDOWN
// LOOPING COUNTDOWN
// LOOPING COUNTDOWN

//How much time is given
//How much time is given
var counter = 3;

//inser the time remaining into the div thingy
var divTimeInsert = function() {
    $("#countDwn").text(counter);
};

// clearInterval(interval);

var interval = setInterval(function() {
    counter--;
    divTimeInsert();
    
    //counter at -1, to make sure player sees a 0
    if (counter == -1) {

        // what to do when time runs out!
        console.log('yo');
        counter = 3;
        divTimeInsert();       
    }
}, 1000);

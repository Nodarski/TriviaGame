var guessedCorrect = 0;
var guessedInCorrect = 0;
var currentQuestion = -1;
var questionsLeft = 20;
var correctAns;
var counter = 30;
var whyThis= [".ansOne",".ansTwo",".ansThree",".ansFour"];
//theQuestions[i++].correct
var theQuestions =[ {
            questions : "The question 1goes here?" ,
            options : ["no","no","nope","yesss"],
            correct : 3
        }, {
            questions : "The question 2goes here?",
            options : ["nahh","no","yisss","i dont 2 so.."],
            correct : 2
        }, {
            questions : "The question 3goes here?",
            options : ["wrong! SAD","yup","nope","i dont think so.."],
            correct : 1
        }, {
            questions : "The question 4goes here?",
            options : ["wrong! SAD","yup","nope","i dont think so.."],
            correct : 1
        }, {
            questions : "The question 5goes here?",
            options : ["wrong! SAD","yup","nope","i dont think so.."],
            correct : 1
        }, {
            questions : "The question 6goes here?",
            options : ["wrong! SAD","yup","nope","i dont think so.."],
            correct : 1
        }, {
            questions : "The question 7goes here?",
            options : ["wrong! SAD","yup","nope","i dont think so.."],
            correct : 1
        }, {
            questions : "The question 8goes here?",
            options : ["wrong! SAD","yup","nope","i dont think so.."],
            correct : 1
        }, {
            questions : "The question 9goes here?",
            options : ["wrong! SAD","yup","nope","i dont think so.."],
            correct : 1
        }, {
            questions : "The question 10goes here?",
            options : ["wrong! SAD","yup","nope","i dont think so.."],
            correct : 1
        }, {
            questions : "The question 11 goes here?",
            options : ["wrong! SAD","yup","nope","i dont think so.."],
            correct : 1
        }, {
            questions : "The question 12 goes here?",
            options : ["wrong! SAD","yup","nope","i dont think so.."],
            correct : 1
        }, {
            questions : "The question 13goes here?",
            options : ["wrong! SAD","yup","nope","i dont think so.."],
            correct : 1
        }, {
            questions : "The question 14goes here?",
            options : ["wrong! SAD","yup","nope","i dont think so.."],
            correct : 1
        }, {
            questions : "The question 15goes here?",
            options : ["wrong! SAD","yup","nope","i dont think so.."],
            correct : 1
        }, {
            questions : "The question 16goes here?",
            options : ["wrong! SAD","yup","nope","i dont think so.."],
            correct : 1
        }, {
            questions : "The question 17goes here?",
            options : ["wrong! SAD","yup","nope","i dont think so.."],
            correct : 1
        }, {
            questions : "The question 18goes here?",
            options : ["wrong! SAD","yup","nope","i dont think so.."],
            correct : 1
        }, {
            questions : "The question 19goes here?",
            options : ["wrong! SAD","yup","nope","i dont think so.."],
            correct : 1
        }, {
            questions : "The question 20goes here?",
            options : ["wrong! SAD","yup","nope","i dont think so.."],
            correct : 1
        }

];

                    // i would like to make the div class=boxes filled with the objects in the array.
                    //the boxes will have .text(theQuestions[0++].options[0++])

                    //    the question div will contain .text(theQuestions[0++].questions)
                    
                    // LOOPING COUNTDOWN
                    // LOOPING COUNTDOWN
                    // LOOPING COUNTDOWN

function countDown(){
        //insert the time remaining into the div thingy
    var divTimeInsert = function() {
        $("#countDwn").text(counter);
    };
            // clearInterval(interval);
    var interval = setInterval(function() {
        counter--;
        divTimeInsert();
                //counter at -1, to make sure player sees a 0
        if (counter == -1) {
            // what to do when time runs out!console.log('yo');
            questionsLeft--;
            guessedInCorrect++;
            questSelect();
            $('#timeOut').css("display","flex");

            setTimeout(function(){
                $('#timeOut').css("display","none");
                counter = 30;
                divTimeInsert();       
        }, 3000);
        }
    }, 1000);
// Function countDown();  ~line 107
};
// Function countDown();  ~line 107

function startGame(){
    $('#startPage').slideUp();
    console.log("hello");
    questSelect();
    countDown();
};

function questSelect(){
    if (questionsLeft==0) {
                                    //game is over!!
                                    //Winner screen!!
        alert("game over");
        $("#winnerScreen").text("Good Job! you have beaten the game with: " + guessedCorrect + " questions guessed correctly. And : " + guessedInCorrect + " guessed incorrectly!");
        $("#winnerScreen").css("display","flex")

        setTimeout(function(){
            $('#winnerScreen').css("display","none");
            counter = 30;
            questionsLeft = 20;
            currentQuestion = -1;
            questSelect();
        }, 10000);
    }   
    else{
        currentQuestion++;
        correctAns = theQuestions[currentQuestion].correct;
        $(".theQuestion").text(theQuestions[currentQuestion].questions);

        for (i = 0; i < theQuestions[currentQuestion].options.length; i++) { 

            $(whyThis[i]).text(theQuestions[currentQuestion].options[i]);

        }
    }
};

$("#introText").on("click",".boxes",function(){
    var ansNum = $(this).attr("answer");
    var ansOne = whyThis.indexOf("."+ ansNum);
    if (correctAns==ansOne){

        $('#rightPage').css("display","flex");
        guessedCorrect++;
        questionsLeft--;
        questSelect();
        setTimeout(function(){
            $('#rightPage').css("display","none");
            counter = 30;
        }, 3000);
    }
    else{
        $('#wrongPage').css("display","flex");
        guessedInCorrect++;
        questionsLeft--;
        questSelect();
        setTimeout(function(){
            $('#wrongPage').css("display","none");
            counter = 30;
        }, 3000);
    }
});








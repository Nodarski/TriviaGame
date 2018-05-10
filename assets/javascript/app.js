var guessedCorrect = 0;
var guessedInCorrect = 0;
var currentQuestion = -1;
var questionsLeft = 20;
var correctAns;
var counter = 30;
var whyThis= [".ansOne",".ansTwo",".ansThree",".ansFour"];
//theQuestions[i++].correct
var theQuestions =[ {
            questions : "If Logx (1 / 8) = - 3 / 2, then x is equal to.." ,
            options : ["-4","4","1/4","10"],
            correct : 1
        }, {
            questions : "20 % of 2 is equal to?",
            options : ["20","4","0.4","0.04"],
            correct : 2
        }, {
            questions : "If Log 4 (x) = 12, then log 2 (x / 4) is equal to ?",
            options : ["11","48","-12","22"],
            correct : 3
        }, {
            questions : "The population of a country increased by an average of 2% per year from 2000 to 2003. If the population of this country was 2 000 000 on December 31, 2003, then the population of this country on January 1, 2000, to the nearest thousand would have been?",
            options : ["1,846,000","1,852,000","1,000,000","1,500,000"],
            correct : 0
        }, {
            questions : "f is a quadratic function whose graph is a parabola opening upward and has a vertex on the x-axis. The graph of the new function g defined by g(x) = 2 - f(x - 5) has a range defined by the interval",
            options : ["[ -5 , + infinity)","[ 2 , + infinity) ","( - infinity , 2]","( - infinity , 0]"],
            correct : 2
        }, {
            questions : "f is a function such that f(x) < 0. The graph of the new function g defined by g(x) = | f(x) | is a reflection of the graph of f",
            options : ["on the y axis","on the x axis","on the line y = x ","on the line y = - x"],
            correct : 1
        }, {
            questions : "If the graph of y = f(x) is transformed into the graph of 2y - 6 = - 4 f(x - 3), point (a , b) on the graph of y = f(x) becomes point (A , B) on the graph of 2y - 6 = - 4 f(x - 3) where A and B are given by",
            options : ["A = a - 3, B = b","A = a - 3, B = b","A = a + 3, B = -2 b","A = a + 3, B = -2 b +3"],
            correct : 3
        }, {
            questions : "When a parabola represented by the equation y - 2x 2 = 8 x + 5 is translated 3 units to the left and 2 units up, the new parabola has its vertex at",
            options : ["(-5 , -1)","(-5 , -5) ","(-1 , -3)","(-2 , -3)"],
            correct : 0
        }, {
            questions : "The graphs of the two linear equations ax + by = c and bx - ay = c, where a, b and c are all not equal to zero, ",
            options : ["are parallel ","intersect at one point ","intersect at two points","perpendicular"],
            correct : 3
        }, {
            questions : "The graphs of the two equations y = a x 2 + b x + c and y = A x 2 + B x + C, such that a and A have different signs and that the quantities b 2 - 4 a c and B 2 - 4 A C are both negative,",
            options : ["intersect at two points ","intersect at one point","do not intersect ","none of the above"],
            correct : 2
        }, {
            questions : "For x greater than or equal to zero and less than or equal to 2 pi, sin x and cos x are both decreasing on the intervals",
            options : ["(0 , pi/2)","(pi/2 , pi) ","(pi , 3 pi / 2)","(3 pi / 2 , 2 pi)"],
            correct : 1
        }, {
            questions : "The three solutions of the equation f(x) = 0 are -2, 0, and 3. Therefore, the three solutions of the equation f(x - 2) = 0 are",
            options : ["- 4, -2, and 1 ","-2, 0 and 3 ","4, 2, and 5 ","0, 2 and 5"],
            correct : 3
        }, {
            questions : "The three solutions of the equation f(x) = 0 are - 4, 8, and 11. Therefore, the three solutions of the equation f(2 x) = 0 are",
            options : ["- 2, 4, and 11/2 ","- 8, 16 and 22 ","- 4, 8, and 11 ","2, 19 / 2 and 7 / 2"],
            correct : 0
        }, {
            questions : "A school committee consists of 2 teachers and 4 students. The number of different committees that can be formed from 5 teachers and 10 students is",
            options : ["10","15 ","2100 ","8"],
            correct : 2
        }, {
            questions : "Five different books (A, B, C, D and E) are to be arranged on a shelf. Books C and D are to be arranged first and second starting from the right of the shelf. The number of different orders in which books A, B and E may be arranged is?",
            options : ["5!","3!","2!","3!*2!"],
            correct : 1
        }, {
            questions : "The mean of a data set is equal to 10 and its standard deviation is equal to 1. If we add 5 to each data value, then the mean and standard deviation become?",
            options : ["mean = 15 , standard deviation = 6 ","mean = 10 , standard deviation = 6 ","mean = 15 , standard deviation = 1","mean = 10 , standard deviation = 1"],
            correct : 2
        }, {
            questions : "The exam scores of all 500 students were recorded and it was determined that these scores were normally distributed. If Jane's score is 0.8 standard deviation above the mean, then how many, to the nearest unit, students scored above Jane?",
            options : ["394","250","400 ","106"],
            correct : 3
        }, {
            questions : "If f(x) is an odd function, then | f(x) | is?",
            options : ["an odd function ","an even function","neither odd nor even","even and odd"],
            correct : 1
        }, {
            questions : "The period of | sin (3x) | is?",
            options : ["2 pi ","2 pi / 3 ","pi / 3 ","3 pi"],
            correct : 2
        }, {
            questions : "When a metallic ball bearing is placed inside a cylindrical container, of radius 2 cm, the height of the water, inside the container, increases by 0.6 cm. The radius, to the nearest tenth of a centimeter, of the ball bearing is?",
            options : ["1 cm","1.2 cm","2 cm","0.6 cm"],
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








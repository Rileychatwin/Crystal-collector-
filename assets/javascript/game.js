$(document).ready(function() {

    // Variables

    var userScore = 0;

    var targetScore = goalScore(19,120);
    console.log(targetScore);

    var wins = 0;
    var losses = 0;

    
    var redBoi = crysalGenerator(1,12);
    console.log(redBoi);
    // Attach value to the red gem btn
    $("#red-gem").val(redBoi);

    var blueBoi = crysalGenerator(1,12);
    console.log(blueBoi);
    $("#blue-gem").val(blueBoi);

    var greenBoi = crysalGenerator(1,12);
    console.log(greenBoi);
    $("#green-gem").val(greenBoi);

    var yellowBoi = crysalGenerator(1,12);
    console.log(yellowBoi);
    $("#yellow-gem").val(yellowBoi);

    // Function to generate random crystal numbers 

    function crysalGenerator (min, max) {
       return Math.floor(Math.random()* (max-min)) + min;
    };

    // Function to generate the target score 

    function goalScore (min, max) {
        return Math.floor(Math.random()* (max-min)) + min;
    };

    goalScore(19,120);

    // Crystal click functions 

    $("#red-gem").click(function(){
        userScore += redBoi
        $("#user-score").append(userScore);
        console.log("The user score is", userScore);

    });

    $("#blue-gem").click(function(){
        userScore += blueBoi
        $("#user-score").append(userScore);
        console.log("The user score is", userScore);

    });

    $("#green-gem").click(function(){
        userScore += greenBoi
        $("#user-score").append(userScore);
        console.log("The user score is", userScore);

    });

    $("#yellow-gem").click(function(){
        userScore += yellowBoi
        $("#user-score").append(userScore);
        console.log("The user score is", userScore);

    });

    // BUG!!! The new total score appends onto the previous score not replace (create a seperate area for the scor to go)

    // Creat function to start the game 

    function startGame() {
        // Show Target Score number in div
        $("#goal-score").append(targetScore);


    }


    

    startGame();

   

    
    

    

    

    
});
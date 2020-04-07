$(document).ready(function() {

    // Variables

    var userScore = 0;

    var targetScore = goalScore(19,120);
    console.log(targetScore);

    var wins = 0;
    var losses = 0;

    
    var redBoi = crysalGenerator(1,12);
    console.log(redBoi);

    var blueBoi = crysalGenerator(1,12);
    console.log(blueBoi);

    var greenBoi = crysalGenerator(1,12);
    console.log(greenBoi);

    var yellowBoi = crysalGenerator(1,12);
    console.log(yellowBoi);

    // Function to generate random crystal numbers 

    function crysalGenerator (min, max) {
       return Math.floor(Math.random()* (max-min)) + min;
    };

    // Function to generate the target score 

    function goalScore (min, max) {
        return Math.floor(Math.random()* (max-min)) + min;
    };

    goalScore(19,120);

    // Creat function to start the game 

    function startGame() {
        // Show Target Score number in div
        $("#goal-score").append(targetScore);


    }

    startGame();

    
    

    

    

    
});
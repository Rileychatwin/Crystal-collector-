$(document).ready(function() {

    // Variables

    var userScore = 0;

    var targetScore = 0;

    var wins = 0;
    var losses = 0;

    
    var redBoi = 0;
    var blueBoi = 0;
    var greenBoi = 0;
    var yellowBoi = 0;

    // Function to generate random crystal numbers 

    function crysalGenerator (min, max) {
        return Math.floor(Math.random()* (max-min)) + min;
    };

    crysalGenerator(1,12);

    // Function to generate the target score 

    function goalScore (min, max) {
        return Math.floor(Math.random()* (max-min)) + min;
    };

    goalScore(19,120);

    // Creat function to start the game 

    function startGame() {

        // Generate a random number for the target score variable

    }

    
    

    

    

    
});
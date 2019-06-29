window.onload = function() {
    var new1Button = document.getElementById("newGameButton2Call");
    var place1Holder = document.getElementById('place-holder-section2Call');
    var wining1 = document.getElementById('win2Call');
    var losing1 = document.getElementById('losses2Call');
    var guessed1Left = document.getElementById('guessed-left2Call');
    var Guessed1letter = document.getElementById('guessedletters2Call');
    // ---------------------------//
    var gameRuning = false;
    var wins = 0;
    var losses = 0;
    var guessedLeft = 9;
    var pickedWord = '';
    var pickeWordLetterArr = [];
    var guessedLetterBank = [];
    var incorrectWordBank = [];
    
    var wordList = ['Black', 'yellow', 'Red','white','blue','orange','green'];
    //---------------------------//
    function newGame(){    
        gameRuning = true;
        guessedLeft = 9;
        guessedLetterBank = [];
        incorrectWordBank = [];
        pickeWordLetterArr = []; 
    
    
       pickedWord = wordList [Math.floor(Math.random()*wordList.length)];  
        
        for(var i=0; i < pickedWord.length; i++){
            if(pickedWord[i] === ''){
                pickeWordLetterArr.push(' ');
            }
            else{
                pickeWordLetterArr.push('_');
            }
        }
    
        place1Holder.textContent = pickeWordLetterArr.join('');
        guessed1Left.textContent = guessedLeft;
        Guessed1letter.textContent = guessedLetterBank;
        
    } 
    function letterGuess(letter){
        
        if(gameRuning === true && guessedLetterBank.indexOf(letter) === -1 && guessedLeft>0){
            guessedLetterBank.push(letter);
            for (var i=0; i<pickedWord.length; i++){
                if(pickedWord[i].toLocaleLowerCase() === letter.toLocaleLowerCase()){
                    pickeWordLetterArr[i] = pickedWord[i];
                }
            }
        }
        else if(!gameRuning) {
            
            alert("Click New Game Button To Start!!!");
        }
            
    else if(guessedLeft = 0){
        gameRuning=false;
        alert("Start A new Game");
    }
    else{
        alert("You already pressed this Letter");
    }
    place1Holder.textContent = pickeWordLetterArr.join('');
    inCorrectLetter(letter);
    
    }
    //------------end of letters------------//
    function inCorrectLetter(letter){
        if(pickeWordLetterArr.indexOf(letter.toLocaleLowerCase())=== -1 && pickeWordLetterArr.indexOf(letter) ===-1 ){
            
            incorrectWordBank.push(letter);     
            
            guessedLeft --;
            Guessed1letter.textContent = incorrectWordBank.join('');        
            guessed1Left.textContent = guessedLeft;
        }
    
    }
    // ----------------- end of incorrect------//
    checkLoosing();
    
    function checkLoosing(){
        if(guessedLeft === 0){
            losses ++;
            gameRuning=false;
            losing1.textContent = losses;
            checkWin();        
        }
    }
    function checkWin(){
        if(pickedWord === pickeWordLetterArr.join('')){
            wins++;
            gameRuning=false;
            wining1.textContent = wins;
        }
    }
    
    
    new1Button.addEventListener("click",newGame)
    this.document.onkeyup = function(event){
        if(event.keyCode >= 65 && event.keyCode <= 90 ){
            letterGuess(event.key);
        }
    }
    
    
    }
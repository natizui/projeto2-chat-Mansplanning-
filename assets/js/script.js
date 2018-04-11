// #region INDEX.HTML 
let questionsAndAnswers = [
    { question: "./assets/img/01.png", answer: "yes"  },
    { question: "./assets/img/02.png", answer: "yes"  },
    { question: "./assets/img/03.png", answer: "yes"  },
    { question: "./assets/img/04.png", answer: "yes"  },
    { question: "./assets/img/05.png", answer: "no"  },
    { question: "./assets/img/06.png", answer: "no"  },
    { question: "./assets/img/07.png", answer: "yes"  },
    { question: "./assets/img/08.png", answer: "yes"  },
    { question: "./assets/img/09.png", answer: "no"  },
    { question: "./assets/img/010.png", answer: "yes"  },
];

let userAnswers = [];
let score = 0;
let c = 0;

let answerClick = function(userAnswer){
        
        if( userAnswer === questionsAndAnswers[c].answer ){
            score += 1;
            userAnswers.push("ACERTOU");
        }
        
        else{
            userAnswers.push("ERROU");
        }
        
        c += 1;
        
        if (c === questionsAndAnswers.length){
            sessionStorage.setItem("userAnswers", userAnswers);
            sessionStorage.setItem("score", score);
            window.location = "resultado.html";
        }
        else{
            document.getElementById("imagem").src = questionsAndAnswers[c].question;
            let question = c + 1;
            document.getElementById("questionCounter").innerHTML = question + " de " + questionsAndAnswers.length;
        }
}
// #endregion


// #region RESULTADO.HTML




let changeUserResultsOnResultPage = function() {
    let serializedUserAnswers = sessionStorage.getItem("userAnswers");
    let userAnswersResult = serializedUserAnswers.split(",");
    
    let scoreResult = sessionStorage.getItem("score");
    
    let resultsPlace = document.getElementById("acertos").children;
    let questionNumber = document.querySelector("#questao").children;
    
    userAnswersResult.forEach( (element, i) => {
        resultsPlace[i].innerHTML = element;
        
        function changeBackground(color) {
            questionNumber[i].style.background = color;
        };
        
        switch (element) {
            case "ACERTOU":
            newColor = "green";
            break;
            case "ERROU":
            newColor = "red";    
            default:
            break;
        }
        changeBackground(newColor);
    });
    
    document.getElementById("resultado").innerHTML = scoreResult + " ACERTOS";
    
    let emoticons = ["./assets/img/emoticons/face-feliz.png", "./assets/img/emoticons/face-ok.png", "./assets/img/emoticons/Face-chatiado.png", "./assets/img/emoticons/face-triste.png"];
    
    let changeEmoticon = function (i) {
        document.getElementById("emoticom").src = emoticons[i];
    }
    if(scoreResult >= 3*userAnswersResult.length/emoticons.length && scoreResult <= userAnswersResult.length/emoticons.length){
        i = 0;
    }
    else if(scoreResult >= 2*userAnswersResult.length/emoticons.length && scoreResult < 3*userAnswersResult.length/emoticons.length){
        i = 1;
    }
    else if(scoreResult >= userAnswersResult.length/emoticons.length && scoreResult < 2*userAnswersResult.length/emoticons.length){
        i = 2;
    }
    else if(scoreResult >= 0 && scoreResult < userAnswersResult.length/emoticons.length){
        i = 3;
    }
    else{
        console.log("alguma coisa está errada :(")
    }
    changeEmoticon(i);
}

if( document.getElementById("result") ) {
    window.onload = changeUserResultsOnResultPage;
}



// #endregion

// #region COUNTDOWN TIMER 1:00
/*
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

if( document.getElementById("quiz") ) {
    window.onload = function () {
        var oneMinute = 60 * 1,
        display = document.querySelector('#countdown');
        startTimer(oneMinute, display);
    };
}
*/
// #endregion


function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(
        function () {
            seconds = parseInt(timer % 60, 10);

            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = "00:" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 
        1000);
}

if( document.getElementById("quiz") ) {
    window.onload = function () {
        var tenSeconds = 10,
        display = document.querySelector('#countdown');
        startTimer(tenSeconds, display);
    };
}
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
}

if( document.getElementById("result") ) {
    window.onload = changeUserResultsOnResultPage;
}



// #endregion
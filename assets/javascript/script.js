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

let redirect = function(userAnswer){
    if( c < questionsAndAnswers.length ){

        if( userAnswer == questionsAndAnswers[c].answer ){
            score += 1;
            userAnswers.push("ACERTOU");
        }

        else{
            userAnswers.push("ERROU");
        }

        let newImage = questionsAndAnswers[c].question;
        document.getElementById("imagem").src = newImage;
    }

    else{
        sessionStorage.setItem("userAnswers", userAnswers);
        sessionStorage.setItem("score", score);
        window.location = "resultado.html";
    }

    c += 1;
}

// #endregion


// #region RESULTADO.HTML
let funcao = function() {
    let serializedUserAnswers = sessionStorage.getItem("userAnswers");
    let userAnswersResult = serializedUserAnswers.split(",");
    
    let scoreResult = sessionStorage.getItem("score");

    let changeResults = document.getElementById("acertos").children;
    
    userAnswersResult.forEach( (element, i) => {
        changeResults[i].innerHTML = element;
    });

    document.getElementById("resultado").innerHTML = scoreResult + " ACERTOS";
}

if( document.getElementById("result") ) {
    window.onload = funcao;
}








// changeResults[1].style.backgroundColor = "yellow";

// #endregion
let teste = ["teste"];

// function myFunction(){
//     let click = document.getElementsByClassName("botao");
//     console.log(click);
//     teste.push(click);
//     console.log(teste);
//     return;
// }


// function adicionarRespostaSim() {
//     var sim = document.getElementById("botao-sim").value;
//     console.log(sim);
//     teste.push(sim);
//     console.log(teste);
//     location.href = "../outras-perguntas/pergunta-02.html";
// }
let gabarito = [true, true, true, true, false, false, true, true, false, true];
console.log(gabarito);
console.log(gabarito.length);



let click = 2;
function redirect(){
    console.log(click);
    if( click <= gabarito.length){
        for (let i = 2; i <= click ; i++) {
            console.log("entrou no for");
            let novaImagem = "assets/img/0" + i + ".png";
            console.log(novaImagem);
            document.getElementById("imagem").src = novaImagem;
        }
    }
    else{
        window.location = "resultado.html";
    }
    click += 1;

}

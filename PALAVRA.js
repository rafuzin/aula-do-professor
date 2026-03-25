let letErrada = [];
let letCorreta = [];
let exibicao = [];

function habilitarBTIncio(){
    const palav = document.getElementById("segredo").value;

    if (palav.length >=6 ){
        document.getElementById("btInicia").disabled = false;
    }
}
function iniciarOJogo(){
     document.getElementById("btVerifica").disabled = false;
     document.getElementById("tentativa").disabled = false;

     const palavra = document.getElementById("segredo").value.toUpperCase();

     for (let i=0; i< palavra.length; i++ ){
        exibicao.push('_');
     }
    document.getElementById("painel").innerText = exibicao.join(' ');
}

function VerificaCaracter(){
    
    let palavraSec = document.getElementById("segredo").value.toUpperCase()
    let Letra = document.getElementById("tentativa").value.toUpperCase();

    if(palavraSec.includes(Letra)){
        for(let i=0; i<palavraSec.length; i++){
            if(palavraSec[i] === Letra){
                exibicao[i] = Letra;
            }   
        }
        document.getElementById("painel").innerText = exibicao.join(' ');
    }
    }
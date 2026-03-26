let letErrada = [];
let letCorreta = [];
let exibicao = [];
let imgvidas = [
        "0 barras.png",
        "1 barras.png",
        "2 barras.png",
        "3 barras.png",
        "4 barras.png",
        "5 barras.png",
        "6 barras.png"
    ];

let vida = 6;


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
    
    if(letErrada.includes(Letra) || letCorreta.includes(Letra)){
        alert("Letra ja digitada");
        document.getElementById("tentativa").value = "";
        return;
    }
    
    if(palavraSec.includes(Letra)){
        letCorreta.push(Letra);
        for(let i=0; i<palavraSec.length; i++){
            if(palavraSec[i] === Letra){
                exibicao[i] = Letra;
            }   
        }
        document.getElementById("painel").innerText = exibicao.join(' ');
        
        if(!exibicao.includes('_')){
            alert("Voce ganhou o jogo");
            document.getElementById("tentativa").value = "";
        }
    }
    
    else{
        document.getElementById("tentativa").value = "";
        letErrada.push(Letra);
        document.getElementById("Erradas").innerText = letErrada.join(', ');
        
        vida = vida - 1;

        document.getElementById("imgVida").src = imgvidas[vida];

        if(vida === 0){
            alert("Voce perdeu o jogo");

            
        }
    }

    document.getElementById("tentativa").value = "";
    }
    

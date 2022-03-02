var letras_alf = "abcdefghijklmnopqrstuvwxyz";
const espaco = ' ';

document.getElementById("btn_cifrar").addEventListener("click",
    (evento)=>{
        evento.preventDefault();
        cifrarMsg();             
    }
);

function cifrarMsg(){
    var msg = document.getElementById("msg").value.toLowerCase();
    var chave = parseInt(document.getElementById("chave").value);
    var msg_cifrada = '';  
    for (var i = 0; i < msg.length; i++ ){
        if (msg[i] == espaco){
            msg_cifrada = msg_cifrada + espaco;               
        }else{
            var letra_msg = msg[i];
            var letra_alf = letras_alf.lastIndexOf(letra_msg);
            if ( (letra_alf + chave) > 25)  {
                var resto = (parseInt(letra_alf) + chave) - 25;
                msg_cifrada = msg_cifrada + letras_alf[resto - 1];     
            } else{            
                msg_cifrada = msg_cifrada + letras_alf[parseInt(letra_alf) + chave];    
            }                   
        }    
    } 
    resposta(msg_cifrada);
}

document.getElementById("btn_descifrar").addEventListener("click",
(evento)=>{
    evento.preventDefault();

    descifrarMsg();

});

function descifrarMsg(){
    var msg = document.getElementById("msg").value.toLowerCase();
    var chave = parseInt(document.getElementById("chave").value);
    var msg_cifrada = '';
    for (var i = 0; i < msg.length; i++ ){ 
        if (msg[i] == espaco){
            msg_cifrada = msg_cifrada + espaco; 
        }else{
            var letra = msg[i];
            var letra_alf = letras_alf.lastIndexOf(letra); 
            if ( (letra_alf - chave) < 0)  {
                var resto = letra_alf - chave;
                msg_cifrada = msg_cifrada +  letras_alf[2 + resto];    
            }else{
                msg_cifrada = msg_cifrada +  letras_alf[parseInt(letra_alf) - chave];    
            }
        }   
    } 
    resposta(msg_cifrada);
}

function resposta(msg_cifrada){
    let div = document.createElement("div");
	let noTxt = document.createTextNode(msg_cifrada.toUpperCase());
	div.appendChild(noTxt);
    let botao=document.createElement("input");
    botao.setAttribute("type","button");
    botao.setAttribute("value","Remover");
    botao.onclick=remover;
    div.appendChild(botao);
    document.getElementById("resposta").appendChild(div);
}

let remover=function()
{
    let pai=this.parentNode;
    pai.parentNode.removeChild(pai);
}
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
    if (chave < 0 || chave > 50){
        alert("Chave precisa ser entre 0 e 50");
    } else{
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
            var letra_msg = msg[i];
            var letra_alf = letras_alf.lastIndexOf(letra_msg); 
            if ( (letra_alf - chave) < 0)  {
                var resto = (parseInt(letra_alf) - chave) + 24;
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
    div.setAttribute("class", "div_msg");
    let p = document.createElement("p");
	let noTxt = document.createTextNode(msg_cifrada.toUpperCase());
    p.setAttribute("class", "text_msg");
	p.appendChild(noTxt);
    div.appendChild(p);
    let botao=document.createElement("input");
    botao.setAttribute("type","button");
    botao.setAttribute("class","btn btn-danger");
    botao.setAttribute("value","Apagar");
    botao.onclick=remover;
    div.appendChild(botao);
    document.getElementById("resposta").appendChild(div);
}

let remover=function(){
    let pai=this.parentNode;
    pai.parentNode.removeChild(pai);
}

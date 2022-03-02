var letras_alf = "abcdefghijklmnopqrstuvwxyz";
const espaco = ' ';

document.getElementById("btn_cifrar").addEventListener("click",
    (evento)=>{
        evento.preventDefault();
        cifrarMsg();      
    }
);

function cifrarMsg(){
    var msg = document.getElementById("msg").value;
    var chave = parseInt(document.getElementById("chave").value);
    msg = msg.toLowerCase();
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
        document.getElementById("resposta").innerHTML = msg_cifrada.toUpperCase();
    } 
}
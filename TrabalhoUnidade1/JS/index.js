
var vetor_mensagem = [];

function Mostrar() {
    document.getElementById("resultado").innerHTML = "";

    for( var i = 0; i < vetor_mensagem.length; i++){ 
        var msg = vetor_mensagem[i]
        var msg2 = Object.values(msg)
        console.log(Object.values(msg));
        var form = document.createElement("form");
        
        var text_element = document.createTextNode(msg2[0]+ ': '+ msg2[1]);
        form.appendChild(text_element)

        var button_element = document.createElement("button");
        button_element.setAttribute("onclick", "button");
        button_element.setAttribute("onclick", "Remover("+i+")");
        var ex = document.createTextNode("Excluir");
        button_element.appendChild(ex);


        form.appendChild(button_element)

        document.getElementById("resultado").appendChild(form)
    };
}

function Enviar() {
    var msg = new Mensagem();
    msg.nome = document.getElementById("nome").value
    msg.mensagem = document.getElementById("mensagem").value

    document.getElementById("nome").value = "";
    document.getElementById("mensagem").value = "";

    if(msg.mensagem && msg.nome == "" || msg.mensagem == "" || msg.nome == ""){
        alert("Escreva todos os campos!");
    }else{
        vetor_mensagem.push(msg)
        Mostrar();    
    }
   

}

function Remover(id_) {
    console.log(id_)
    var filtered = vetor_mensagem.filter(function(value, index, arr){ 
        return index != id_;
    });

    vetor_mensagem = filtered
    console.log(vetor_mensagem)
    Mostrar()

}

function DeixarBranco() {
    document.querySelector('.info').style.backgroundColor = 'white';
}

function DeixarVermelho() {
    document.querySelector('.info').style.backgroundColor = 'orangered';
}

function DeixarVerde() {
    document.querySelector('.info').style.backgroundColor = 'greenyellow';
}

function MostraCreditos() {
    alert("Feito por Joaquim Costa e Michael Jonathan");
}


function Mensagem() {
    this.nome = "";
    this.mensagem = "";
}

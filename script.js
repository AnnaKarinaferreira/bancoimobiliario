function botaoSoma (valor){
    var somar = parseInt(prompt("Digite o valor para somar"));
    if (isNaN(somar)){
        alert("Só dá de somar números");
        return;
    }
    var valor = document.getElementById(valor);
    var valorAtualS = parseInt(valor.textContent.replace(/\./g,'').trim());
    if (isNaN(valorAtualS)) {
        alert("O valor atual não é um número válido");
        return;
    }
    var resultadoSoma = valorAtualS + somar;
    valor.textContent = resultadoSoma.toLocaleString();
}

function botaoSub (valor){
    var subtrair = parseInt(prompt("Digite o valor para subtrair"));
    if (isNaN(subtrair)){
        alert("Só dá de subtrair números");
        return;
    }
    var valor = document.getElementById(valor);
    var valorAtualS = parseInt(valor.textContent.replace(/\./g,'').trim());
    if (isNaN(valorAtualS)) {
        alert("O valor atual não é um número válido");
        return;
    }
    var resultadoSub = valorAtualS - subtrair;
    valor.textContent = resultadoSub.toLocaleString();
}

function nomes(){
    console.log('executando')
    let nome1 = document.getElementById("User1").value;
    let nome2 = document.getElementById("User2").value;
    let nome3 = document.getElementById("User3").value;
    let nome4 = document.getElementById("User4").value;
    
    sessionStorage.setItem("nome1",JSON.stringify(nome1))
    sessionStorage.setItem("nome2",JSON.stringify(nome2))
    sessionStorage.setItem("nome3",JSON.stringify(nome3))
    sessionStorage.setItem("nome4",JSON.stringify(nome4))
}

function getNomes(){
    //console.log('executando')
    if(sessionStorage.getItem("nome1")==null || sessionStorage.getItem("nome2")==null || sessionStorage.getItem("nome3")==null || sessionStorage.getItem("nome4")==null){
        sessionStorage.setItem("nome1","")
        sessionStorage.setItem("nome2","")
        sessionStorage.setItem("nome3","")
        sessionStorage.setItem("nome4","")
    }

    document.getElementById("nome1").innerHTML = JSON.parse(sessionStorage.getItem("nome1"))
    document.getElementById("nome2").innerHTML = JSON.parse(sessionStorage.getItem("nome2"))
    document.getElementById("nome3").innerHTML = JSON.parse(sessionStorage.getItem("nome3"))
    document.getElementById("nome4").innerHTML = JSON.parse(sessionStorage.getItem("nome4"))
    
}

//getNomes();

function dados(){
    Math.floor(Math.random() * 10) + 1;
    
}
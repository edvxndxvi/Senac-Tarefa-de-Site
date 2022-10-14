function reserva() {
    let nome = document.getElementById('nome')
    let telefone = document.getElementById('telefone')
    let data = document.getElementById('data')
    let hora = document.getElementById('hora')

    if (nome.value == "") {
        alert("Preencha o nome")
    } else if (telefone.value == "") {
        alert("Preencha o telefone de contato")
    } else if (data.value == "") {
        alert("Selecione uma data")
    } else if (hora.value == "") {
        alert("Selecione um horário")
    }else if(nome.value != "" &&
             telefone.value != "" &&
             data.value != "" &&
             hora.value != ""){
        alert("Sua reserva foi feita! Te esperamos em nosso restaurante.")
    }else {
        alert("Preencha todos os campos")
    }
}
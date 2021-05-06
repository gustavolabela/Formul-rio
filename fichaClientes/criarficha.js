
function criarFicha() {
    var nome = campoNome.value
    var email = campoEmail.value
    var cpf = campoCPF.value
    var tel = campoTel.value
    var cep = campoCep.value
    var logra = campoLogra.value
    var num = campoNum.value
    var bairro = campoBairro.value
    var cidade = campoCidade.value
    var estado = campoestado.value

    mostra(`
<hr>
Nome: ${nome}
<br>
E-mail: ${(email)} 
<br>
CPF ou CNPJ: ${(cpf)} 
<br>
Telefone: ${(tel)}
<br>
CEP: ${(cep)}
<br>
Logradouro: ${(logra)}
<br>   
Número: ${(num)}
<br>   
Bairro: ${(bairro)}
<br>   
Cidade: ${(cidade)}
<br>   
Estado: ${(estado)}
<br>   
`)
}

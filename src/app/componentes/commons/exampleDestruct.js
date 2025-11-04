const identificacao = {
    nome : 'Yanzo',
    cpf : '123-123-123-12'

}

const endereco = {
    cidade : "Sao Joao",
    bairro : "Centro",
    numero : 234
}

const resultado = {
    ...identificacao, ...endereco

}

console.log(resultado);

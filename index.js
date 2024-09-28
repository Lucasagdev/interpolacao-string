// const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
//     return "Primeiro Nome " + primeiroNome+ "Ultimo Nome: " + ultimoNome+ ", idade: " + idade;
// }

// console.log(imprimirInformacoesPessoa("Lucas ", "Gomes", 21));

const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
    return `Primeiro Nome: ${primeiroNome}, Último Nome: ${ultimoNome}, Idade: ${idade}` ;
}

console.log(`${imprimirInformacoesPessoa("Lucas ", "Gomes", 21)}`);

console.log(`Soma ${10 + 20}`)
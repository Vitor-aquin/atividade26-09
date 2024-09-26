function solicitarDados(){
    //Solicita o nome do usuario
    let nome = prompt("qual seu nome?")
    //Solicita a idade do usuario
    let idade = prompt("quale sua idade?")

    //Exibe a saudação
    alert("Olá, "+nome+ " Você tem " +idade+ " anos.")


    //Mostrar os dados no console
    console.log("nome do usuario: ", nome);
    console.log("idade do usuario: ", idade);
}
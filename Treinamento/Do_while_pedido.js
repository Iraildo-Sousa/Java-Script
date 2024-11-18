let pedido, ingrediente;

while (ingrediente !== "sair")
    {

        ingrediente = prompt("Digite um ingrediente para seu hamburguer (ou `sair` para finalizar): ");

        
    if (ingrediente !== "sair"){

        pedido += ingrediente + ", ";
        
    }

        
    }

console.log(`Seu hamburguer personalizado: ${pedido}.`);

__________________________________________________________________

let tamanho;

do {

	tamanho = prompt("Escolha o tamanho do seu combo pequeno, médio ou grande:");

} while (tamanho !== "pequeno" && tamanho !== "medio" && tamanho !== "grande");

console.log('Você escolheu o combo ${tamanho}.');

___________________________________________________________________

let login, email, senha;

email = prompt("Qual é o email?")

senha = prompt("Qual é a senha?")

login = "senac@gmail.com12345678";

if (login === (email + senha))
    {
    
        console.log("Acesso autorizado!")
    
    }

else
    {

    console.log("Acesso negado!")
    
    }

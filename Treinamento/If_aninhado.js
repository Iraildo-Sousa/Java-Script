let hora = prompt("Digite a hora em inteiros. Ex: 11");

if (hora > 5 && hora < 12)
{

    console.log("Bom dia!");
    
}

if (hora >= 12 && hora < 18)
{

    console.log("Boa tarde!");
    
}

if (hora >= 18 && hora <= 23)
{

    console.log("Boa noite!")
    
}

if (hora >= 0 && hora <= 5)
{

    console.log("Boa madrugada!");
    
}

else 
{

    console.log("Você digitou um número inválido!")
    
}

VM1721:34 Você digitou um número inválido!

___________________________________________________________

Anhinhado

let hora = prompt("Digite a hora em inteiros. Ex: 11");

if (hora < 0 || hora > 23)
{

    console.log("Você digitou um número inválido!");
    
}

else
{

    if (hora > 5 && hora < 12)
    {
    
        console.log("Bom dia!");
        
    }
    
    if (hora >= 12 && hora < 18)
    {
    
        console.log("Boa tarde!");
        
    }
    
    if (hora >= 18 && hora <= 23)
    {
    
        console.log("Boa noite!")
        
    }
    
    if (hora >= 0 && hora <= 5)
     {
    
        console.log("Boa madrugada!");
        
     }

}
VM1941:23 Boa tarde!

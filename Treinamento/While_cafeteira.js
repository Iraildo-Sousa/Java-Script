let nivelAgua = 10, pergunta, abastecer, nivel = 2;

while (nivelAgua <= 10 && nivelAgua >= 0)
{
    
    pergunta = prompt("Você gostaria de tomar um café? Escreva `sim` ou `nao`");
    
    while (pergunta !== "sim" && pergunta !== "nao")
        {
                pergunta = prompt("Você não deu uma resposta válida! Responda 'sim' ou 'nao'");
        }    
    
    if (pergunta === "sim")
    {
        
        
        if (nivel >= 1 && nivel <= 3)
        {
            alert("Café servido! Você consegue tomar mais " + nivel + " xícara(s).")
        }

        nivel = nivel - 1
        nivelAgua = nivelAgua - 3;
    }

    if (pergunta === "nao")
    {
        alert("Quando precisar estarei a disposição!")
        nivelAgua = nivelAgua - 100;
    }

    if (nivelAgua <= 1 && nivelAgua > 0 && nivel < 1)
        {

        alert("Café servido! Você não consegue mais tomar nenhuma xícara de café!")
        
        while (pergunta !== "sim" && pergunta !== "nao")
        {
                pergunta = prompt("Você digitou errado! Escreva novamente:");
        }    
        
        alert("O nível da água está baixo, e não será possível tomar o café!");
        abastecer = prompt("Gostaria de abastecer?")

        while (abastecer !== "sim" && abastecer !== "nao")
        {
            abastecer = prompt("Você não deu uma resposta válida! Responda 'sim' ou 'nao'");
        }

        if (abastecer === "sim")
        {
            nivelAgua = 10;
            alert("Cafeteira abastecida com sucesso!");
        }

        if (abastecer === "nao"){

            nivelAgua = -1;
            alert("Tudo bem, quando quiser abastecer estarei aqui!");        
        }
    }
}

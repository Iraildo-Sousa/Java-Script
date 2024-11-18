let resposta_cat;
let resposta_m_f;
let resposta_item;
let sair;

alert("O principal objetivo desse sistema é ser uma ponte entre as pessoas que querem doar e pessoas que estão procurando doações.")//alerta para do sistema.

while (sair !== "sair")//esta ação é um ponto de escape para que em qualquer momento eu possa sair do loop, mesmo que eu coloque a opção que está sendo pedida.
{

    resposta_cat = prompt("Olá, seja bem  vindo ao nosso sistema de doações! Em baixo apresentamos as categorias disponíveis. Escolha uma categoria escrevendo o nome dela, sem acentos. ex (calcados):\n\nRoupas\nCalçados\nEletrônicos\nMóveis\nLivros e Revistas\n\n");
    sair = resposta_cat;
    
    while (sair !== "sair" && resposta_cat !== "roupas" && resposta_cat !== "calcados" && resposta_cat !== "eletronicos" && resposta_cat !== "moveis" && resposta_cat !== "livros e revistas" && resposta_cat !== "livros" && resposta_cat !== "revistas" && resposta_cat !== "livroserevistas" && resposta_cat !== "livrosrevistas")//este loop serve para que a pessoa digite apenas o que está sendo pedido no prompt.
    {
    
        resposta_cat = prompt("Reposta inválida! Por gentileza informe uma opção do catálogo:\n\nRoupas\nCalçados\nEletrônicos\nMóveis\nLivros e Revistas\n\n");
        sair = resposta_cat;
    
    }//while (sair !== "sair" && resposta_cat !== "roupas" && resposta_cat !== "calcados" && resposta_cat !== "eletronicos" && resposta_cat !== "moveis" && resposta_cat !== "livros e revistas" && resposta_cat !== "livros" && resposta_cat !== "revistas" && resposta_cat !== "livroserevistas" && resposta_cat !== "livrosrevistas"

//_____________________________________________________________________________________________________________________________________________________________________________
    
    if (resposta_cat === "roupas")//se a resposta for roupas
    {
    
        resposta_m_f = prompt("Quais roupas gostaria de ver? Masculino ou Feminino? Responda com `masculino` ou `feminino`")
        resposta_m_f_2 = resposta_m_f
        sair = resposta_m_f;
        
        while (sair !== "sair" && resposta_m_f !== "masculino" && resposta_m_f !== "feminino" && resposta_m_f !== "masculina" && resposta_m_f !== "feminina")//para que a resposta seja apenas o que está sendo pedido.
        {
    
            resposta_m_f = prompt("Reposta inválida! Por gentileza digite `masculino` ou `feminino`.")
    
        }//while (resposta_m_f !== "masculino" && resposta_m_f !== "feminino" && resposta_m_f !== "masculina" && resposta_m_f !== "feminina")

//______________________________________________________________________________________________________________________________________________________________________________
        
        if (resposta_m_f == "masculino" || resposta_m_f == "masculina")
        {

            resposta_item = prompt("Qual dos itens abaixo você tem interresse em olhar? \n\nCamisa\nCamiseta\nJaqueta\n");
            sair = resposta_item;
            
             while (sair !== "sair" && resposta_item !== "camisa" && resposta_item !== "camiseta" && resposta_item !== "jaqueta")//para que a resposta seja apenas o que está sendo pedido.
             {
    
                  resposta_item = prompt("Reposta inválida! Por gentileza digite `camisa`, `camiseta` ou `jaqueta`.");
                  sair = resposta_item;
                 
             }//while (sair !== "sair" && resposta_item !== "camisa" && resposta_item !== "camiseta" && resposta_item !== "jaqueta")

             if (resposta_item == "camisa")
             {

                 alert("Uma camisa polo de algodão, em excelente estado, na cor azul. Ideal para ocasiões casuais e confortáveis.");
                 resposta_item = "camisa"
                 
             }

             if (resposta_item == "camiseta")
             {

                 alert("Camiseta de malha, tamanho M, em cores neutras. Confortável e versátil para o dia a dia.");
                 resposta_item = "camiseta"
                 
             }

             if (resposta_item == "jaqueta")
             {

                 alert("Jaqueta térmica, tamanho M, com zíper e bolsos. Mantém o calor em climas frios, praticamente nova.");
                 resposta_item = "jaqueta"
                 
             }
            
        }//if (resposta_m_f == "masculino" || resposta_m_f == "masculina")

//_________________________________________________________________________________________________________________________________________________________________________________

        if (resposta_m_f == "feminino" || resposta_m_f == "feminina")
        {

            resposta_item = prompt("Qual dos itens abaixo você tem interresse em olhar? \n\nVestido\nBlusa\nSaia\n");
            sair = resposta_item;
            
             while (sair !== "sair" && resposta_item !== "vestido" && resposta_item !== "blusa" && resposta_item !== "saia")//para que a resposta seja apenas o que está sendo pedido.
             {
    
                  resposta_item = prompt("Reposta inválida! Por gentileza digite `vestido`, `blusa` ou `saia`.");
                  sair = resposta_item;
                 
             }//while (sair !== "sair" && resposta_item !== "vestido" && resposta_item !== "blusa" && resposta_item !== "saia")

            if (resposta_item == "vestido")
             {

                 alert("Um vestido leve e alegre, com estampas florais, perfeito para o verão. Usado apenas uma vez, em ótimas condições.");
            
             }

            else if (resposta_item == "blusa")
             {

                 alert("Blusa aconchegante de tricô, tamanho M, em tons pastel. Ideal para dias frios, em ótimo estado.");
            
             }

            else if (resposta_item == "saia")
             {

                 alert("Saia de couro sintético, tamanho M, estilo moderno e versátil. Usada em poucas ocasiões, está como nova.");
            
             }
            
        }//if (resposta_m_f == "feminino" || resposta_m_f == "feminina")

//______________________________________________________________________________________________________________________________________________________________________________________
        
    }//if (resposta_cat === "roupas")

//______________________________________________________________________________________________________________________________________________________________________________________
    
    if (resposta_cat === "calcados")//se a resposta for calcados
    {
    
        resposta_m_f = prompt("Quais calçados gostaria de ver? Masculino ou Feminino? Responda com `masculino` ou `feminino`")
        sair = resposta_m_f;
        
        while (sair !== "sair" && resposta_m_f !== "masculino" && resposta_m_f !== "feminino" && resposta_m_f !== "masculina" && resposta_m_f !== "feminina")//para que a resposta seja apenas o que está sendo pedido.
        {
    
            resposta_m_f = prompt("Reposta inválida! Por gentileza digite `masculino` ou `feminino`.")
            sair = resposta_m_f;
            
        }//while (resposta_m_f !== "masculino" && resposta_m_f !== "feminino" && resposta_m_f !== "masculina" && resposta_m_f !== "feminina")

        //===>

        if (resposta_m_f == "masculino" || resposta_m_f == "masculina")
        {

            resposta_item = prompt("Qual dos itens abaixo você tem interresse em olhar? \n\nTênis\nBota\nChinelo\n");
            sair = resposta_item;
            
             while (sair !== "sair" && resposta_item !== "tenis" && resposta_item !== "bota" && resposta_item !== "chinelo")//para que a resposta seja apenas o que está sendo pedido.
             {
    
                  resposta_item = prompt("Reposta inválida! Por gentileza digite `tenis`, `bota` ou `chinelo`.");
                  sair = resposta_item;
                 
             }//while (sair !== "sair" && resposta_item !== "camisa" && resposta_item !== "camiseta" && resposta_item !== "jaqueta")

             if (resposta_item == "tenis")
             {

                 alert("Tênis de corrida, tamanho 42, em ótima condição. Com amortecimento e suporte, perfeito para atividades físicas.");

                 
             }

             else if (resposta_item == "bota")
             {

                 alert("Bota de couro, tamanho 40, em bom estado. Ideal para climas frios e caminhadas.");
                 
                 
             }

             else if (resposta_item == "chinelo")
             {

                 alert("Chinelo confortável, tamanho 41, ideal para uso em casa ou na praia. Usado pouco, ainda em boas condições.");
                 
                 
             }
            
        }//if (resposta_m_f == "masculino" || resposta_m_f == "masculina")

        //<====

        
    }//if (resposta_cat === "calcados")

//______________________________________________________________________________________________________________________________________________________________________________________

    if (resposta_cat === "eletronicos")//se a resposta for calcados
    {
    
        resposta_item = prompt("Quais calçados gostaria de ver? \n\nFone\nTablet\nSom")
        sair = resposta_item;
        
        while (sair !== "sair" && resposta_item !== "fone" && resposta_item !== "tablet" && resposta_item !== "som")//para que a resposta seja apenas o que está sendo pedido.
        {
    
            resposta_item = prompt("Reposta inválida! Por gentileza digite `fone`, `tablet` ou `som`.")
            sair = resposta_item;
            
        }//while (sair !== "sair" && resposta_item !== "fone" && resposta_item !== "tablet" && resposta_item !== "som")

        if (resposta_item == "fone")
        {

        alert("Fones de ouvido Bluetooth, com ótima qualidade de som. Usados, mas em perfeito estado de funcionamento.");

                 
        }

        else if (resposta_item == "tablet")
        {

        alert("Tablet em boas condições, ideal para leitura e entretenimento. Acompanha carregador e capa protetora.");
                 
                 
        }

        else if (resposta_item == "som")
        {

            alert("Caixa de som portátil, com boa qualidade de áudio e bateria duradoura. Usada em eventos, mas em excelente estado.");
                 
                 
        }

    }//if (resposta_cat === "eletronicos")
//______________________________________________________________________________________________________________________________________________________________________________________

    if (resposta_cat === "moveis")//se a resposta for calcados
    {
    
        resposta_item = prompt("Quais móveis gostaria de ver? \n\nMesa\nCadeira\nEstante")
        sair = resposta_item;
        
        while (sair !== "sair" && resposta_item !== "mesa" && resposta_item !== "cadeira" && resposta_item !== "estante")//para que a resposta seja apenas o que está sendo pedido.
        {
    
            resposta_item = prompt("Reposta inválida! Por gentileza digite `mesa`, `cadeira` ou `estante`.")
            sair = resposta_item;
            
        }//while (sair !== "sair" && resposta_item !== "mesa" && resposta_item !== "cadeira" && resposta_item !== "estante")

        if (resposta_item == "mesa")
        {

        alert("Fones de ouvido Bluetooth, com ótima qualidade de som. Usados, mas em perfeito estado de funcionamento.");

                 
        }

        else if (resposta_item == "cadeira")
        {

        alert("Tablet em boas condições, ideal para leitura e entretenimento. Acompanha carregador e capa protetora.");
                 
                 
        }

        else if (resposta_item == "estante")
        {

            alert("Caixa de som portátil, com boa qualidade de áudio e bateria duradoura. Usada em eventos, mas em excelente estado.");
                 
                 
        }

    }//if (resposta_cat === "moveis")
//______________________________________________________________________________________________________________________________________________________________________________________

     if (resposta_cat === "livros e revistas" || resposta_cat === "livros" || resposta_cat === "revistas" || resposta_cat === "livroserevistas" || resposta_cat === "livrosrevistas")//se a resposta for calcados
     {
    
        resposta_item = prompt("Quais móveis gostaria de ver? \n\nRomance\nCulinaria\nAutoajuda")
        sair = resposta_item;
        
        while (sair !== "sair" && resposta_item !== "romance" && resposta_item !== "culinaria" && resposta_item !== "autoajuda")//para que a resposta seja apenas o que está sendo pedido.
        {
    
            resposta_item = prompt("Reposta inválida! Por gentileza digite `mesa`, `cadeira` ou `estante`.")
            sair = resposta_item;
            
        }//while (sair !== "sair" && resposta_item !== "mesa" && resposta_item !== "cadeira" && resposta_item !== "estante")

        if (resposta_item == "romance")
        {

            alert("Edição de capa dura de um romance famoso, em ótimo estado. Ideal para amantes de literatura.");

                 
        }

        else if (resposta_item == "culinaria")
        {

            alert("Coleção de revistas de receitas, todas em bom estado, com dicas e receitas deliciosas.");
                 
                 
        }

        else if (resposta_item == "autoajuda")
        {

            alert("Livro inspirador, em excelente estado, que aborda temas de desenvolvimento pessoal.");
                 
                 
        }

    }//if (resposta_cat !== "livros e revistas" && resposta_cat !== "livros" && resposta_cat !== "revistas" && resposta_cat !== "livroserevistas" && resposta_cat !== "livrosrevistas")//se a resposta for calcados
//______________________________________________________________________________________________________________________________________________________________________________________



}//while (sair !== "sair")

  
    const cards = [
      // Rio de janeiro
      { titulo: '', nome: 'William Garcia ⚙ NR:007.2023', telefone: '(21)975279648 ', email: 'horus.inspetoria@gmail.com', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'Teresópolis.', estado: 'RJ', imagem: 'https://lh3.googleusercontent.com/a/ACg8ocK1_7DgQrOzDmXyiqNCdXKsO3Xpl8Wf47BIIVq5jxpTR3Q=s260-c-no', verificado: true },
     { titulo: '', nome: 'Fabricio Abreu ⚙ NR:026.2023', telefone: '(22)997837643', email: 'famape1800@gmail.com', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'Região dos Lagos, Macaé e Campos dos Goytacazes.', estado: 'RJ', imagem: 'https://i.postimg.cc/7h6qjKrX/IMG-20231217-153245116.jpg', verificado: false },
     
      { titulo: '', nome: 'Augusto Costa ⚙ NR:015.2023', telefone: '(24)992167810', email: 'gutocosta2011@gmail.com', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'São José do Vale do Rio Preto, Três Rios, Sumidouro, Paraiba do sul, Além Paraíba, Petrópolis, Juiz de Fora e adjacências.', estado: 'RJ', imagem: 'https://i.postimg.cc/VvNfrjxt/SAM-2026.jpg', verificado: false },
       { titulo: '', nome: 'Claudio Gomes ⚙ NR:017.2023', telefone: '(24)981890714', email: 'claudio.gomes@atenderreguladora.com.br', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'Toda região sudeste.', estado: 'RJ', imagem: 'https://i.postimg.cc/0jWGphbG/OIP.jpg', verificado: false },
      
      // São Paulo
         { titulo: '', nome: 'Reinaldo Araujo ⚙ NR:001.2025', telefone: '(11)964100064', email: 'elrei2@gmail.com', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'Mogi das Cruzes, Aruja, Suzano, Guararema,  Sabauna, Biritiba mirim', estado: 'SP', imagem: 'https://postimg.cc/BjtQBRg9', verificado: false },
       
        { titulo: '', nome: 'Adelio Reis ⚙ NR:029.2023', telefone: '(11)981897316', email: 'adeliotorquato@hotmail.com', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'Capital e adjacências', estado: 'SP', imagem: 'https://i.postimg.cc/0jWGphbG/OIP.jpg', verificado: false },
         { titulo: '', nome: 'Paulo Santos ⚙ NR:031.2023', telefone: '(19)996271200', email: 'paulosergio_s@yahoo.com', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'Araras, Leme, Limeira, Conchal e Rio Claro', estado: 'SP', imagem: 'https://i.postimg.cc/0jWGphbG/OIP.jpg', verificado: false },
       
       
      
      // Mato Grosso do Sul
        { titulo: '', nome: 'Ednor do Nascimento Santos ⚙ NR:023.2023', telefone: '(67)992561795', email: 'ednorns1979@gmail.com', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'Campo Grande', estado: 'MS', imagem: 'https://i.postimg.cc/0jWGphbG/OIP.jpg', verificado: false },
    
      
      // Minas Gerais 
       { titulo: '', nome: 'Luiz Silva ⚙ NR:022.0023', telefone: '(34)991118014', email: 'luizhcastros@outlook.com', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'Patos de Minas e adjacências', estado: 'MG', imagem: 'https://i.postimg.cc/0jWGphbG/OIP.jpg', verificado: false },
   
     
      
      // Paraiba
      
      
      
      // Bahia
      
      
      
    //Distrito federal
        { titulo: '', nome: 'Ricardo Placido Martins ⚙ NR:016.2023', telefone: '(61)999238681', email: 'rpmartins10@gmail.com', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'Distrito Federal, Partes de Goiás, Partes de Minas Gerais.', estado: 'DF' , imagem: 'https://i.postimg.cc/0jWGphbG/OIP.jpg', verificado: false },
    
         //Rio Grande do Sul
         { titulo: '', nome: 'Lucas Gil ⚙ NR:024.2023', telefone: '(54)981234116', email: 'lrgil2004@hotmail.com', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'Serra, São Leopoldo, Novo hamburgo, Canoas e demais cidades da Região Metropolitana.', estado: 'RS' , imagem: 'https://i.postimg.cc/fRF3Fdnt/IMG-20230324-WA0065.jpg', verificado: false },
    { titulo: '', nome: 'João Carlos Mazzardo  ⚙ NR:030.2023', telefone: '(54) 999131872', email: 'jmazardo@hotmail.com', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'Ipê, Caxias do Sul e adjacências', estado: 'RS' , imagem: 'https://i.postimg.cc/0jWGphbG/OIP.jpg', verificado: false },
   
        { titulo: '', nome: 'Ricardo Basilho ⚙ NR:018.2023', telefone: '(51)993347399', email: 'ricardobasilio376@gmail.com', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'Porto Alegre, Fronteira, Serra e Litoral.', estado: 'RS' , imagem: 'https://i.postimg.cc/0jWGphbG/OIP.jpg', verificado: false },
      { titulo: '', nome: 'Marcio Bichueti ⚙ NR:019.2023', telefone: '(55)999958181', email: 'marcio.bichueti@gmail.com', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'Santa Maria e Adjacências.', estado: 'RS' , imagem: 'https://i.postimg.cc/0jWGphbG/OIP.jpg', verificado: false },
   
      //Goiás
         { titulo: '', nome: 'Renato Sales ⚙ NR:020.2023', telefone: '(62)996782704', email: 'renato.sb69@gmail.com', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'Todo o estado de Goiás.', estado: 'GO' , imagem: 'https://i.postimg.cc/0jWGphbG/OIP.jpg', verificado: false },
    { titulo: '', nome: 'Cesar Teixeira de Barros ⚙ NR:021.2023', telefone: '(64)984380592', email: 'cesarteixeira823@gmail.com', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'Quirinópolis.', estado: 'GO' , imagem: 'https://i.postimg.cc/0jWGphbG/OIP.jpg', verificado: false },
    { titulo: '', nome: 'Flavio Dias ⚙ NR:028.2023', telefone: '(62)994364343', email: 'flaviooliveira85846@gmail.com', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'Goiânia.', estado: 'GO' , imagem: 'https://i.postimg.cc/0jWGphbG/OIP.jpg', verificado: false },
  
      //Santa Catarina
        { titulo: '', nome: 'Marcos Ribeiro ⚙ NR:025.2023', telefone: '(49)991752182', email: 'ribeirocarsmo@gmail.com', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'Região Oeste.', estado: 'SC' , imagem: 'https://i.postimg.cc/0jWGphbG/OIP.jpg', verificado: false },
     { titulo: '', nome: 'José Santos ⚙ NR:027.2023',  telefone: '(47)996216053', email: 'josepereira.sb@gmail.com', especialidades: 'Regulação de sinistros, vistorias de desmobilização, prévia, ramos elementares, constatação, imóveis e mais.', area: 'Santa Catarina.', estado: 'SC' , imagem: 'https://i.postimg.cc/0jWGphbG/OIP.jpg', verificado: false },
    

      
     
     
      
      
       // Término
      
    ];

    function buscarEstado() {
      // Mostra a sobreposição
      document.getElementById('overlay').style.display = 'flex';

      // Aguarda 3 segundos antes de exibir os cards
      setTimeout(() => {
        const estadoSelecionado = document.getElementById('estadoSelect').value;
        const cardsFiltrados = cards.filter(card => card.estado === estadoSelecionado);
        exibirCards(cardsFiltrados);
        // Esconde a sobreposição após exibir os cards
        document.getElementById('overlay').style.display = 'none';
      }, 3000);
    }

    function exibirCards(cardsParaExibir) {
      const cardsContainer = document.getElementById('cards-container');
      cardsContainer.innerHTML = '';

      cardsParaExibir.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const imagemElement = document.createElement('img');
        imagemElement.src = card.imagem;
        cardElement.appendChild(imagemElement);
        
        
 
        
        
        

        if (card.verificado) {
          const verificationBadge = document.createElement('div');
          verificationBadge.classList.add('verification-badge');
          cardElement.appendChild(verificationBadge);
        }

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const nomeElement = document.createElement('h4');
        nomeElement.textContent = `Vistoriador${card.titulo}`;
        cardContent.appendChild(nomeElement);

        const idElement = document.createElement('p');
        idElement.textContent = `Nome: ${card.nome}`;
        cardContent.appendChild(idElement);

            const telefoneElement = document.createElement('p');
        telefoneElement.innerHTML = `Telefone: <a href="tel:${card.telefone}">${card.telefone}</a>`;
        cardContent.appendChild(telefoneElement);
        
          const emailElement = document.createElement('p');
        emailElement.innerHTML = `E-mail: <a href="mailto:${card.email}">${card.email}</a>`;
        cardContent.appendChild(emailElement);


        const especialidadesElement = document.createElement('p');
        especialidadesElement.textContent = `Especialidades: ${card.especialidades}`;
        cardContent.appendChild(especialidadesElement);

        const areaElement = document.createElement('p');
        areaElement.textContent = `Área de Atuação: ${card.area}`;
        cardContent.appendChild(areaElement);

        const estadoElement = document.createElement('p');
        estadoElement.textContent = `Estado: ${card.estado}`;
        cardContent.appendChild(estadoElement);

        

                   const logoCDIRV = document.createElement('div');
    logoCDIRV.classList.add('logo-cdirv');
    cardElement.appendChild(logoCDIRV);


        
        
        
        cardElement.appendChild(cardContent);

        cardsContainer.appendChild(cardElement);
      });
    }
    
        
       function ligar(telefone) {
      // Adicione aqui a lógica para realizar a chamada telefônica
      alert(`Ligando para ${telefone}`);
    }

    function enviarEmail(email) {
      // Adicione aqui a lógica para abrir o cliente de e-mail com o endereço fornecido
      alert(`Enviando e-mail para ${email}`);
    }
  

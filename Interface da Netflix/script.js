const boxGames = document.getElementById("manga-recomend");

const mainGame = [
    {name:"", description:"", img:""}
];
const mangasRecomended = [
    {id:0, name:"Spy-Family", description:"A história segue a vida de Twilight, um espião que precisa formar uma família de forma repentina para executar uma missão", imgCover:"./images/51l9Pj+BN6L._AC_UL300_SR300,200_.jpg"},
    {id:1, name:"Boa noite Punpun", description:"É um mangá que conta a história de Punpun Onodera, um menino que vive no Japão e enfrenta os dilemas da vida adulta", imgCover:"./images/51qq-2ETGQL._AC_UL600_SR600,400_.jpg"},
    {id:2, name:"Solo Levening", description:"É uma história sobre um guerreiro que se torna um dos caçadores mais fortes da humanidade", imgCover:"./images/61EYZ1S4tCL._AC_UL600_SR600,400_.jpg"},
    {id:3, name:"Hunter x Hunter", description:"conta a história de Gon Freecss, um jovem que sonha em se tornar um caçador de tesouros. ", imgCover:"./images/61NPpt5HC6L._AC_UL600_SR600,400_.jpg"},
    {id:4, name:"A Estratégia do Imperador", description:"Chu Yuan, jovem imperador do Estado de Chu, enfrenta desafios em seu primeiro ano de reinado quando uma rebelião ameaça desestabilizar a fronteira sudoeste.", imgCover:"./images/81AdJOAFllL._AC_UL300_SR300,200_.jpg"},
    {id:5, name:"Old Boy", description:"Conta a história de Shinichi Gotō, um homem que é sequestrado e mantido em cárcere privado por 10 anos, antes de ser libertado.", imgCover:"./images/81l9WQyigxL._AC_UL600_SR600,400_.jpg"},
    {id:6, name:"Jujutsu Kaisen", description:"Conta a história de Yuji Itadori, um adolescente que se torna hospedeiro de uma maldição. ", imgCover:"./images/91MAequ2koL._AC_UL600_SR600,400_.jpg"},
    {id:7, name:"One Piece", description:"Conta a história de Monkey D. Luffy e sua tripulação de piratas em busca do tesouro lendário One Piece. ", imgCover:"./images/91RabAWnM1L._AC_UL600_SR600,400_.jpg"},
    {id:8, name:"Gash Bell", description:"Kiyomaro é um estudante brilhante e antissocial que recebe Gash, um garoto misterioso que veio do Mundo dos Demônios.", imgCover:"./images/91SM88G+kLL._AC_UL300_SR300,200_.jpg"},
];

mangasRecomended.forEach(el => {
    boxGames.innerHTML += `
    <div id="manga-${el.id}" class="item">
      <img src="${el.imgCover}" alt="">
      <h3 class="title">${el.name}</h3>
      <p class="description">${el.description}</p>
    </div>`;

   
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoWidth:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
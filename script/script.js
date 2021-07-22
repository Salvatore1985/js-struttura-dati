const card = {
    nome: 'bloodfire colossus',
    launchCost: ['6', 'R', 'R'],
    conbinedManaCost: 8,
    cardType: 'creatura',
    subType: 'giant',
    expasion: {
        reprintId: 9,
        nome: 'Espansione ',
        rarity: 'goldenrod',
        collectionNr: 12,
    },
    flavorText: {
        quote: 'we connot...',
        author: 'orso bubu',
    },
    abilities: [
        {
            launchCost: ['R', 't'],
            description: 'lorem...',
        },
        {
            launchCost: ['W', 'B', 'T'],
            description: 'lorem...',
        },
    ],
    illustrator: {
        author: {
            id: 1,
            name: 'greg smith',
        },
        source: 'img/',
    },
    costitution: 13,
    strength: 13,
    borderColor: '#000',



};

console.log(card);

/*STAMPO I PAGINA*/
//recupero l'elemento dal DOM
const cardSection = document.getElementById('cards');

const subType = card.subType ? `- ${card.subType}` : '';
// let subType;
// if (card.subType) {
//     subType = card.subType
// } else {
//     subType = '';
// }


let cardTemplate = `
<ul class=" card text-capitalize">
<li ><strong>nome:</strong><em> ${card.nome}</em></li>
<li><strong>costo di lancio:</strong> ${card.launchCost.join(', ')}</li>
<li><strong>costo mana convertito:</strong> ${card.conbinedManaCost}</li>
<li><strong>tipo di carta:</strong> ${card.cardType} ${subType}</li>


</ul>
`;

cardSection.innerHTML = cardTemplate;

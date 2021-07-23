const card = {
    nome: 'bloodfire colossus',
    launchCost: ['6', 'R', 'R'],
    conbinedManaCost: 8,
    cardType: 'creatura',
    subType: 'giant',
    expansion: {
        reprintId: 9,
        nome: 'Espansione ',
        rarity: 'goldenrod',
        collectionNr: 12,
        totalCard: 42,
    },
    flavorText: {
        author: 'orso bubu',
        // quote: 'we connot...',
    },
    abilities: [
        {
            launchCost: ['R', 't'],
            description: 'lorem...',
        },
        {
            launchCost: ['W', 'B', 'T'],
            description: 'fhhhjbjbjh...',
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
    background: {
        color: 'red',
        source: '..img',
    }


};

console.log(card);

/*STAMPO I PAGINA*/
//recupero l'elemento dal DOM
const cardSection = document.getElementById('cards');

const subType = card.subType ? `- ${card.subType}` : '';


/*metodo con if else*/
// let subType;
// if (card.subType) {
//     subType = card.subType
// } else {
//     subType = '';
// }

const quote = card.flavorText.quote ? `/ ${card.flavorText.quote}` : '';


let abilitiesContent = '<em>nessuna abilità</em>';
if (card.abilities.length) {
    abilitiesContent = '<ul>';
    for (let i = 0; i < card.abilities.length; i++) {
        const currentAbility = card.abilities[i];
        abilitiesContent += `<li>descrizione: ${currentAbility.description}</li>`;
        abilitiesContent += `<li>costo di lancio: ${currentAbility.launchCost.join(' ,')}</li>`;
    }
    abilitiesContent += '</ul>';
}


let cardTemplate = `
<ul class=" card text-capitalize">
<li ><strong>nome:</strong><em> ${card.nome}</em></li>
<li><strong>costo di lancio:</strong> ${card.launchCost.join(', ')}</li>
<li><strong>costo mana convertito:</strong> ${card.conbinedManaCost}</li>
<li><strong>tipo di carta:</strong> ${card.cardType} ${subType}</li>
<li><strong>estenzione:</strong>
    <ul>
    <li><strong>ristampa:</strong> ${card.expansion.reprintId}</li>
    <li><strong>nome:</strong> ${card.expansion.nome}</li>
    <li><strong>rarità:</strong> ${card.expansion.rarity}</li>
    <li><strong>numero collezione:</strong> ${card.expansion.collectionNr}/${card.expansion.totalCard}</li>
    </ul>
</li>
<li><strong>testo di colore:</strong> ${card.flavorText.author}${card.flavorText.quote}</li> 
<li><strong>abilità:</strong> ${abilitiesContent}</li>

</ul>
`;

cardSection.innerHTML = cardTemplate;

//Milestone0--Creiamo l'array con gli oggetti
const teamMembersArray = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg",

    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg",

    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg",

    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg",

    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg",

    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg",

    }
];
console.log(teamMembersArray);
//Milestone1--Con il ciclo for stampiamo gli oggetti dell'array
for(let i = 0; i < teamMembersArray.length; i++){
    const element = teamMembersArray[i];
    console.log(element.name, element.role, element.photo);
}
//Milestone2--Prendiamo l'elemento del DOM che ci serve e col ciclo for ci stampiamo le info dei membri
const listMembers = document.querySelector(".list-team");
// for(let i = 0; i < teamMembersArray.length; i++){
//     const element = teamMembersArray[i];
//     listMembers.innerHTML += `<tr>
//                                 <td>${element.name}</td>
//                                 <td>${element.role}</td>
//                                 <td>${element.photo}</td>
//                             </tr>`;
// }


// Prendiamo il container dal DOM
const container = document.querySelector(".container");
//creiamo l'elemento row
const cardsRow = document.createElement("div");
cardsRow.classList.add("my_row");
// richiamo la funzione per creare le card
const appendElement = createCard(teamMembersArray, cardsRow, container);

//funzione per creare una card
function createCard(array, row, contenitor){
    for(let i = 0;i < array.length; i++){
        const element = array[i];
        const card = document.createElement("div");
    card.classList.add("my_col");
    card.innerHTML += `<img src="img/${element.photo}" alt="">
                        <h3>${element.name}</h3>
                        <p>${element.role}</p>`;
    row.append(card);
    contenitor.append(cardsRow);
    
}
    
}
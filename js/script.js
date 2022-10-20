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
for(let i = 0; i < teamMembersArray.length; i++){
    const element = teamMembersArray[i];
    listMembers.innerHTML += `<tr>
                                <td>${element.name}</td>
                                <td>${element.role}</td>
                                <td>${element.photo}</td>
                            </tr>`;
}

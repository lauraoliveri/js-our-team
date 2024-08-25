
// creo un'array di oggetti 

const Team = [

    Memberone = {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },

    Membertwo = {
        name: 'Angela Caroll',
        role: 'Chief Editor	',
        photo: 'angela-caroll-chief-editor.jpg'
    },

    Memberthree = {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },

    Memberfour = {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },

    Memberfive = {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    Membersix = {
        name: 'Barbara Durso',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }

]

// stampo in console le info di ogni membro

for (let i = 0; i < Team.length; i++) {
    console.log(Team[i]);
    
}
const people =[
    {
        name: "azar",
        photo: "azar.jpg",
        details: "right hand batsman"
    },
    {
        name: "gopi",
        photo: "gopi.jpeg",
        details: "right hand batsman"
    },
    {
        name: "harun",
        photo: "harun.jpg",
        details: `right hand batsman
                  right arm off break`
    },
    {
        name: "prakesh",
        photo: "prakesh.jpg",
        details: `(vice captain)right hand batsman right arm pacer`
    },
    {
        name: "diva",
        photo: "divakar.jpg",
        details: "right hand batsman right arm off break"
    },
    {
        name: "mari",
        photo: "mari.jpg",
        details: "(captain)right hand batsman right arm pacer"
    },
    {
        name: "vijay",
        photo: "vijay.jpg",
        details: "right hand batsman right arm pacer"
    },
    {
        name: "naren",
        photo: "naren.jpg",
        details: "right hand batsman right arm pacer"
    },
    {
        name: "dharni",
        photo: "dharni selvan.jpg",
        details: "right hand batsman right arm leg spin"
    },
    {
        name: "saravanan",
        photo: "saravanan.jpg",
        details: "right hand batsman right arm pacer"
    },
    {
        name: "balaji",
        photo: "balaji.jpg",
        details: "right hand batsman right arm pacer"
    },
    {
        name: "nithish",
        photo: "nithish.jpg",
        details: "right hand batsman right arm leg break"
    },
    {
        name: "hari",
        photo: "hari.jpg",
        details: "right hand batsman"
    },
];


function displayDetails(index) {
    const person = people[index];
    const nameElement = document.getElementById("personName");
    const photoElement = document.getElementById("personPhoto");
    const detailsElement = document.getElementById("personDescription");


    nameElement.textContent = person.name;
    photoElement.src = person.photo;
    detailsElement.textContent = person.details;
}
function Change(){
    document.getElementById("contact");
}
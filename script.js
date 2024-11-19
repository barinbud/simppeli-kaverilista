
const kaverit = [];

for (let i = 1; i <= 10; i++) {
    let nimi = prompt(`Syötä kaverin ${i} nimi:`).trim();
    
    
    while (!nimi) {
        nimi = prompt(`älä jätä tyhjäksi! Syötä kaverin ${i} nimi:`).trim();
    }
    
    kaverit.push(nimi); 
}


kaverit.sort();


const kaverilista = document.getElementById("kaverilista");
kaverit.forEach(nimi => {
    const listItem = document.createElement("li");
    listItem.textContent = nimi;
    kaverilista.appendChild(listItem);
});

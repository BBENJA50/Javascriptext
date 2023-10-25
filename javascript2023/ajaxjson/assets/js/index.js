function jsonLink(){
    const xhr = new XMLHttpRequest();
    xhr.onload = onLoad;
    xhr.open("GET", "https://swapi.dev/api/people", true);
    xhr.send(null);
    //hier is de status van de server nog niet gekend.
}

function onLoad(){
    const overzicht= document.getElementById("overzicht");
    let ul = document.createElement("ul");
    let naam = JSON.parse(this.responseText);
    for(let i=0; i<naam["results"].length;i++){
        let li = document.createElement("li");
        if(naam.name !== ""){
            console.log(naam["results"][i]['name']);
            li.innerHTML = naam["results"][i]['name'];
        }
        ul.appendChild(li);
    }
    overzicht.appendChild(ul);
}

window.addEventListener("load", jsonLink);
function verwijderSpaties() {
    var input = document.getElementById("input").value;
    var output = input.split(" ").join("");
    var div = document.getElementById("resultaat");
    div.innerHTML=output;
}
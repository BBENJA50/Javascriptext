function checkPalindroom() {
    var input = document.getElementById("input").value;
    var array1 = input.split("");
    console.log(array1);
    var resultaat = "";
    var div = document.getElementById("resultaat");
    div.innerHTML = "";
    var j = array1.length-1;


    for (var i = 0; i< array1.length; i++){
        if (array1[i] === array1[j]){
            j--;
        }else{
            resultaat = "Dit is geen palindroom!";
            div.innerHTML = resultaat;
            break;
        }
        resultaat = "Dit is een palindroom!"
        div.innerHTML = resultaat;
    }
}

//TYPE OPLOSSING TOM met omkeren string

// function checkPalindroom() {
//     const input = document.getElementById("palindroom").value;
//     const resultaat = document.getElementById("resultaat");
//
//     // Omkeren van de string
//     const reversed = input.split('').reverse().join('');
//
//     if (input === reversed) {
//         resultaat.textContent = "Dit is een palindroom!";
//         resultaat.style.backgroundColor="green";
//     } else {
//         resultaat.textContent = "Dit is geen palindroom.";
//         resultaat.style.backgroundColor="red";
//     }
// }
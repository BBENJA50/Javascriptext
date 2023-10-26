var array1 = [];
var result = document.getElementById("result");
function voegToe() {
    var input = document.getElementById("input").value;

    array1.push(" " + input);
    result.textContent = array1;

    //form leegmaken
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
}

function reverse(){
    var p = document.createElement("p");

    p.textContent = array1.reverse();
    result.appendChild(p);
}
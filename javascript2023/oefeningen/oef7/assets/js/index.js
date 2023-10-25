var array1 = [];
var div = document.getElementById("resultaat");

function voegToe() {
    var input = document.getElementById("input").value;

    array1.push(input);
    console.log(array1);
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
}

function berekenMax(x){
    var x = array1;
    var indexMax = 0;

    for (var i = 1; i<=x.length;i++){
        if (x[indexMax] < x[i]){
            indexMax = i;
        }
    }
    div.innerHTML = "De max waarde van de reeks is: " + x[indexMax];
}

function berekenMin(x){
    var x = array1;
    var indexMin = 0;

    for (var i = 1; i<=x.length;i++){
        if (x[indexMin] > x[i]){
            indexMin = i;
        }
    }
    div.innerHTML = "De min waarde van de reeks is: " + x[indexMin];
}

function aantalElementen(x){
    var x = array1;
    var aantal = x.length;
    div.innerHTML = "De reeks heeft "+aantal+" elementen.";
}
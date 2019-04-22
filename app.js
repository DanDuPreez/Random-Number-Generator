
document.getElementById("generate").onclick = function() {
    
    var range = document.getElementById("range").value;
    
    var randomNumber = Math.floor((Math.random() * range) + 1);
    
    document.getElementById("result").innerHTML = randomNumber;
}
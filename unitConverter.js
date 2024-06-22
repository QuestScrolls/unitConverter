function convert(){
    let inputValue = document.getElementById("userInput").value ;
    let unit = document.getElementById("unit").value ;
    let milesToKm = unit === "milesToKm" ;
    let result = 0


if (milesToKm) {
    result = inputValue * 1.60934 ;    
}
else {
    result = inputValue / 1.60934 ;
}  
document.getElementById("resultElement").innerHTML = result ;
}

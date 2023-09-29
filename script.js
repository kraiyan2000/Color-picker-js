

let textarea =document.getElementById("textareas")

document.addEventListener("input", selectColor);
function selectColor() {
var selectedColor = document.getElementById("colors").value;
textarea.style.color = selectedColor;
document.getElementById("hexcode").value = selectedColor;
}





document.getElementById("bold").addEventListener("click", fontBold);
function fontBold(){
    fontBold = textarea. style. fontWeight = 'bold';
}

document.getElementById("Italic").addEventListener("click", fontitalic);
function fontitalic(){
    fontitalic = textarea. style. fontStyle = 'italic';
}

document.getElementById("underline").addEventListener("click", underline);
function underline(){
    underline = textarea. style. textDecoration = "underline";
   
}





let button=document.getElementById("btn")
button.addEventListener("click", function(){
    localStorage.setItem("data", textarea.value)
    alert("Your Date is Saved")
})

let reset=document.getElementById("reset")
reset.addEventListener("click", function(){
    localStorage.clear("data")
    alert("Your Date is removed from storage")
})

// function showList(){
// textarea.innerHTML=localStorage.getItem("data");



// }
// showList()
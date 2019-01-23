var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var bdy= document.getElementsByTagName("body")[0];
var tex = document.querySelector("h3");
var rght = document.querySelectorAll("button")[0];
var left = document.querySelectorAll("button")[1];



function change1(){
    bdy.style.background="linear-gradient(to right,"+color1.value+","+color2.value +")";
    tex.textContent=bdy.style.background +";";    
}
function change2(){
    bdy.style.background="linear-gradient(to left,"+color1.value+","+color2.value +")";
    tex.textContent=bdy.style.background +";";
}



color1.addEventListener("input", change1);
color2.addEventListener("input",change1);

rght.addEventListener("click",change1);
left.addEventListener("click",change2);
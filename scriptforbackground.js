let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let bdy= document.getElementsByTagName("body")[0];
let tex = document.querySelector("h3");
let rght = document.querySelectorAll("button")[0];
let left = document.querySelectorAll("button")[1];

function change1(){
    bdy.style.background="linear-gradient(to right,"+color1.value+","+color2.value +")";
    tex.textContent=bdy.style.background +";";    
}
function change2(){
    bdy.style.background="linear-gradient(to left,"+color1.value+","+color2.value +")";
    tex.textContent=bdy.style.background +";";
}
function copytext(){
     let tr = tex.innerHTML;
     let el = document.createElement('textarea');
      el.value = tr;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      alert("text copied to clipboard");
}



tex.addEventListener("click",copytext);

color1.addEventListener("input", change1);
color2.addEventListener("input",change1);

rght.addEventListener("click",change1);
left.addEventListener("click",change2);
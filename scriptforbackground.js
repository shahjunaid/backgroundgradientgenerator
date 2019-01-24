
//making variables
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let bdy= document.getElementsByTagName("body")[0];
let tex = document.querySelector("h3");
let rght = document.querySelectorAll("button")[0];
let left = document.querySelectorAll("button")[1];
let copyte = document.getElementsByClassName("clicktocopy")[0];
let copied = false;
let addcheck = false;


copyte.classList.add("e");

//functions 
function addremove(){
	addcheck = true;
    copyte.classList.remove("e");
    copyte.classList.add("di");
}
function change1(){
    bdy.style.background="linear-gradient(to right,"+color1.value+","+color2.value +")";
    tex.textContent=bdy.style.background +";";
    if(copied){copyte.innerHTML = "click to copy";}
    if(!addcheck){ addremove(); }
   
    
 
}
function change2(){
    bdy.style.background="linear-gradient(to left,"+color1.value+","+color2.value +")";
    tex.textContent=bdy.style.background +";";
     if(copied){copyte.innerHTML = "click to copy";}
   	if(!addcheck){ addremove(); }
   
    
}

function copytext(){
     let tr = tex.innerHTML;
     let el = document.createElement('textarea');
      el.value = tr;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      copyte.innerHTML = "copied";
      copied = true;     
}


//attaching listeners
copyte.addEventListener("click",copytext);

tex.addEventListener("click",copytext);

color1.addEventListener("input", change1);
color2.addEventListener("input",change1);

rght.addEventListener("click",change1);
left.addEventListener("click",change2);
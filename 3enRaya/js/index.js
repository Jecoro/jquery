document.addEventListener('DOMContentLoaded', function () {
var boton=document.getElementById("boton1");
boton.addEventListener('click', mostrar);
var boton2=document.getElementById("boton2");
boton2.addEventListener('click', mostrar);
var botonJugar=document.getElementById("boton3");
botonJugar.addEventListener('click',generarPartida);
let info = document.getElementById("tematica");
 info.addEventListener("focusout",seleccionartematica);
let mensaje = document.getElementById("mensaje");
let cuadro_casillas = document.querySelectorAll(".cuadro");
let i=Math.floor(Math.random() * 2) + 1  ;
const botonRevancha=document.getElementById("revancha");
const botonRevanchaActivo =  "pointer-events:initial;opacity:initial;"
const botonRevanchaInactivo =  "pointer-events:none;opacity:40%;"
botonRevancha.addEventListener('click',reiniciarTablero);

const volverMp=document.getElementById("regresarMp");
volverMp.addEventListener("click", mostrarMP);

let c=i;
let player1=document.getElementById("j1name");
let player2=document.getElementById("j2name");
let        relleno1="X";
let relleno2="O";

function seleccionartematica(){
    
    const tematica=info.options[info.selectedIndex].text;
    console.log("La tematica es"+tematica);
    if(tematica=="Avengers"){
        relleno1='<img src="./img/capitanAmerica.png">';
        relleno2='<img src="./img/ironman.png">';
    }
}
cuadro_casillas.forEach(boton => {

    boton.onclick = function(){
       
       $(boton).hide(1000); 
       mensaje.innerHTML = "";         
        if(c == 1){    
           boton.innerHTML = `${relleno1}`; 
           $(boton).show(1000)
          
           comprobar();
           c=2;
           
       } else {
           boton.innerHTML = `${relleno2}`;   
           $(boton).show(1000)
           comprobar();
           c=1;
       }  
       boton.style.setProperty("pointer-events","none"); 
       i++;   
     }
   
});
function generarPartida(){
    var y= document.getElementById('menu2');
    var x=document.getElementById('tablero');

    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display=='none';
        
    } else {
        x.style.display = 'none';
        y.style.display='block';
        
    }
}
function mostrar() {
    
    var y=document.getElementById('menuPrincipal');
    var x = document.getElementById('menu2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display=='none';
        
    } else {
        x.style.display = 'none';
        y.style.display='block';
        
    }
}

function EmpezarJuego(){

    botonRevancha.style.cssText = botonRevanchaInactivo;

    const texto= "Presione cualquier cuadro para iniciar: "
    const texto2= "Empieza."
    let valor;
    if(c == 1 ){
        valor= `${player1.value}` ; 
    }else{
        valor= `${player2.value}`;  
    }
    
    let p = texto.split(/\n/g);
    let html = "";
  
    for (let x = 0; x < p.length; x++) {
        html += p[x] + texto2 + valor + "<br>";
    }

    mensaje.innerHTML = html;
    
}
function reiniciarTablero(){
    for(x = 0; x < cuadro_casillas.length; x++){    
        cuadro_casillas[x].style.cssText = "pointer-events:initial;";
        cuadro_casillas[x].innerHTML = "";
    }
    EmpezarJuego();
}
function comprobar(){
    
    botonRevancha.style.cssText = botonRevanchaInactivo;
    console.log(cuadro_casillas[0].innerHTML);
    console.log(relleno1);    
   if ((cuadro_casillas[0].innerHTML == `${relleno1}` && cuadro_casillas[1].innerHTML == `${relleno1}` && cuadro_casillas[2].innerHTML == `${relleno1}`) ||
       (cuadro_casillas[3].innerHTML == `${relleno1}` && cuadro_casillas[4].innerHTML == `${relleno1}` && cuadro_casillas[5].innerHTML == `${relleno1}`) ||
       (cuadro_casillas[6].innerHTML == `${relleno1}` && cuadro_casillas[7].innerHTML == `${relleno1}` && cuadro_casillas[8].innerHTML == `${relleno1}`) ||
       (cuadro_casillas[0].innerHTML == `${relleno1}` && cuadro_casillas[3].innerHTML == `${relleno1}` && cuadro_casillas[6].innerHTML == `${relleno1}`) ||
       (cuadro_casillas[1].innerHTML == `${relleno1}` && cuadro_casillas[4].innerHTML == `${relleno1}` && cuadro_casillas[7].innerHTML == `${relleno1}`) ||
       (cuadro_casillas[2].innerHTML == `${relleno1}` && cuadro_casillas[5].innerHTML == `${relleno1}` && cuadro_casillas[8].innerHTML == `${relleno1}`) ||
       (cuadro_casillas[0].innerHTML == `${relleno1}` && cuadro_casillas[4].innerHTML == `${relleno1}` && cuadro_casillas[8].innerHTML == `${relleno1}`) ||
       (cuadro_casillas[6].innerHTML == `${relleno1}` && cuadro_casillas[4].innerHTML == `${relleno1}` && cuadro_casillas[2].innerHTML == `${relleno1}`))  {
       
        mensaje.innerHTML = `${player1.value}`+' Gana';
       deshabilitarCasillas();
       
        } else if ((cuadro_casillas[0].innerHTML == `${relleno2}` && cuadro_casillas[1].innerHTML == `${relleno2}` && cuadro_casillas[2].innerHTML == `${relleno2}`) ||
        (cuadro_casillas[3].innerHTML == `${relleno2}` && cuadro_casillas[4].innerHTML == `${relleno2}` && cuadro_casillas[5].innerHTML == `${relleno2}`) ||
        (cuadro_casillas[6].innerHTML == `${relleno2}` && cuadro_casillas[7].innerHTML == `${relleno2}` && cuadro_casillas[8].innerHTML == `${relleno2}`) ||
        (cuadro_casillas[0].innerHTML == `${relleno2}` && cuadro_casillas[3].innerHTML == `${relleno2}` && cuadro_casillas[6].innerHTML == `${relleno2}`) ||
        (cuadro_casillas[1].innerHTML == `${relleno2}` && cuadro_casillas[4].innerHTML == `${relleno2}` && cuadro_casillas[7].innerHTML == `${relleno2}`) ||
        (cuadro_casillas[2].innerHTML == `${relleno2}` && cuadro_casillas[5].innerHTML == `${relleno2}` && cuadro_casillas[8].innerHTML == `${relleno2}`) ||
        (cuadro_casillas[0].innerHTML == `${relleno2}` && cuadro_casillas[4].innerHTML == `${relleno2}` && cuadro_casillas[8].innerHTML == `${relleno2}`) ||
        (cuadro_casillas[6].innerHTML == `${relleno2}` && cuadro_casillas[4].innerHTML == `${relleno2}` && cuadro_casillas[2].innerHTML == `${relleno2}`))  {
        
         mensaje.innerHTML = `${player2.value}`+' Gana';
        deshabilitarCasillas();
 
         } else{  if (cuadro_casillas[0].innerHTML != "" && cuadro_casillas[1].innerHTML != "" && cuadro_casillas[2].innerHTML != "" &&
        cuadro_casillas[3].innerHTML != "" && cuadro_casillas[4].innerHTML != "" && cuadro_casillas[5].innerHTML != "" &&
        cuadro_casillas[6].innerHTML != "" && cuadro_casillas[7].innerHTML != "" && cuadro_casillas[8].innerHTML != "" &&
        cuadro_casillas[0].innerHTML != "" && cuadro_casillas[3].innerHTML != "" && cuadro_casillas[6].innerHTML != "" &&
        cuadro_casillas[1].innerHTML != "" && cuadro_casillas[4].innerHTML != "" && cuadro_casillas[7].innerHTML != "" &&
        cuadro_casillas[2].innerHTML != "" && cuadro_casillas[5].innerHTML != "" && cuadro_casillas[8].innerHTML != "" &&
        cuadro_casillas[0].innerHTML != "" && cuadro_casillas[4].innerHTML != "" && cuadro_casillas[8].innerHTML != "" &&
        cuadro_casillas[6].innerHTML != "" && cuadro_casillas[4].innerHTML != "" && cuadro_casillas[2].innerHTML != "")  {
         
          mensaje.innerHTML = "Empate";
          deshabilitarCasillas(false);
          } 
        }   
}
function  deshabilitarCasillas(y){
  
    if (y == false){
      i = Math.floor(Math.random() * (3 - 1)) + 1;
   }
   
      for(x = 0; x < cuadro_casillas.length; x++){    
      cuadro_casillas[x].style.setProperty("pointer-events","none"); 
      }
      botonRevancha.style.cssText = botonRevanchaActivo;
}

function mostrarMP(){
    var x= document.getElementById('menuPrincipal');
    var y=document.getElementById('tablero');
        x.style.display = 'block';
        y.style.display=='none';        
}

EmpezarJuego();

});


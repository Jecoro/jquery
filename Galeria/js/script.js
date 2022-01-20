var imagenes= [
    {nombre: "./img/01.jpg",posicion: 1},
    {nombre: "./img/02.png",posicion: 2},
    {nombre: "./img/03.jpg",posicion: 3},
    {nombre: "./img/04.jpg",posicion: 4},
    {nombre: "./img/05.jpg",posicion: 5},
];
var posicion=0;
var posicionAnterior=4;
var posicionSiguiente=1;
 document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById("imagen_0").src=`${imagenes[4].nombre}`;
    document.getElementById("imagen_1").src=`${imagenes[0].nombre}`;
    document.getElementById("imagen_2").src=`${imagenes[1].nombre}`;

    var siguiente=document.getElementById("arrowright");
    siguiente.addEventListener('click', mostrarSiguiente);

    var anterior=document.getElementById("arrowleft");
    anterior.addEventListener('click', mostrarAnterior);

    function mostrarSiguiente(){
        if(posicion<=4){
            posicion=posicion+1
        }else{
            posicion=0;
        }

        if(posicion<4){
            posicionSiguiente=posicion+1;
        }else{
            posicionSiguiente=0;
        }

        if(posicion>0){
            posicionAnterior=posicion-1;

        }else{
            posicionAnterior=4;
        }
        document.getElementById("bigimage").src=`${imagenes[posicion].nombre}`;
        document.getElementById("imagen_0").src=`${imagenes[posicionAnterior].nombre}`;
        document.getElementById("imagen_1").src=`${imagenes[posicion].nombre}`;
        document.getElementById("imagen_2").src=`${imagenes[posicionSiguiente].nombre}`;
        $("#imagen_1").animate({zoom: '80%'}, "slow");
    }

    function mostrarAnterior(){
        if(posicion>=0){
            posicion=posicion-1
        }else{
            posicion=4;
        }
        if(posicion<4){
            posicionSiguiente=posicion+1;
        }else{
            posicionSiguiente=0;
        }

        if(posicion>0){
            posicionAnterior=posicion-1;

        }else{
            posicionAnterior=4;
        }
        document.getElementById("bigimage").src=`${imagenes[posicion].nombre}`;
        document.getElementById("imagen_0").src=`${imagenes[posicionAnterior].nombre}`;
        document.getElementById("imagen_1").src=`${imagenes[posicion].nombre}`;
        document.getElementById("imagen_2").src=`${imagenes[posicionSiguiente].nombre}`;
    }



    

 });

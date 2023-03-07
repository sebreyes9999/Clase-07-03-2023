'use strict';
/*
Seleccionar elementos desde el DOM(Todo el documento)
*/ 

var elemento1=false; //Caracter Global, no recomendado para trabajar
let elemento2; //Caracter Local, recomendado para trabajar
const elemento3 = 3;//Es una constante, debo asignar un valor, letras, numeros 

const envio = document.getElementById("forma2");//Capturar datos
const formulario = document.getElementById("form1");



//asociando evento al boton seleccionado
envio.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log(formulario[0].value);
    console.log(formulario[1].value);
    console.log(formulario[2].value);
    //console.log();

});


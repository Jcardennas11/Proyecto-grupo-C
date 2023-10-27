// alert("foijnadsiuf");
// ####### tipo de variables
// const para valores constantes
const pi = 3.1416;
const pul = 2.54;
// var para variables globales
var days = 10;
var name = "Johan";
// let para variables de bloqueo o locales
let count = 1;

// ####### formas de impresion
// alert
// alert(name);
console.log(name);
// body - pantalla
document.write(name + " cardenas");
document.getElementById("box_one").innerHTML = "<h1>Johan Cardenas </h1>";
document.getElementById("box_two").innerHTML = "<h1>Johan Cardenas </h1>";

// librerias

// Swal.fire(
//     'The Internet?',
//     'That thing is still around?',
//     'question'
//   )


// Swal.fire({
//     icon:'error',
//     showConfirmButton: false,
//     title: name,
//     text: name, 
//     footer: "footer " + name,
//     background: 'green',
//     position: 'top-start'
// });

// ########## tipos de datos

var number_one = 20;
var number_two = 5.5;
// texto
var class_type = "Electiva Tecnica 1";
// booleanos
var boolean = true;
// arrays
var array_num = [1,2,3,4,5,3.4,1.2];
var array_tex = ["lunes", "martes","miercoles"];
var array_mix = [1,"a",2,"b"];
var array_mul = [
    {name:"Johan", last_name:"Cardenas",age:"21"},
    {name:"Johan", last_name:"Cardenas",age:"21"},
    {name:"Johan", last_name:"Cardenas",age:"21"},
    {name:"Johan", last_name:"Cardenas",age:"21"}
]

// ########## Operadores basicos

// suma 
var suma = number_one + number_two;
console.log("suma = " + suma);
var resta = number_one - number_two;
console.log("resta = " + resta);
var multi = number_one * number_two;
console.log("multiplicacion = " + multi);
var divi = number_one / number_two;
console.log("division = " + divi.toFixed(2));
var modulo = number_one % number_two;
console.log("modulo = " + modulo);

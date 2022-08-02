var variable;
let variableLet;

// const constante;

var a = 1;
console.log(a);

a = 4;
console.log(a);


const constante = "Hola, soy una constante";

console.log(constante);

//constante = "Adios" --> las constantes no se pueden cambiar. Esto da error

let b = 3;
console.log(b);

b = 5;
console.log(b);

//¿Que diferencias hay entre var y let? var afecta a todo el codigo y let solo a donde esta siendo declarado
var variable = "Hola soy una variable var";
for(var i = 0; i < 3; i++){
    var variable = "soy la segunda variable" //Esto solo es a modo ilustrativo. Si queremos cambiar la variable, no tenemos que poner nunca el var delante
}
console.log(variable) //aunque declaremos una segunda variable en el bucle, esta afecta a la declaracion principal de variable.


let variableLet2 = "Hola soy una variable LET";
for(var i = 0; i < 3; i++){
    let variableLet2 = "soy la segunda variable" //Esta variable es una variable local por lo que la variable fuera del for no se ve afectada
}
console.log(variableLet2);

//Tipeof es un operador que nos diria de que tipo es un valor
console.log(typeof 1);


//Como JS es de tipo inferido las variables pueden cambiar
var num = 4;
console.log(typeof num);

num = "Hola soy num";
console.log(typeof num);
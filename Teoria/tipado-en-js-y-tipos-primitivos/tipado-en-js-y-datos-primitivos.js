//Tipos primitivos

//Number
4;

//String
"Hola Mundo";
'Hola mundo';
`Hola mundo`;

//Booleanos
true;
false;

//null y undefined
null;
undefined;

//¿Cuales son las diferencias entre null, undefined, false y 0?
//Todas son falsy, hacen que las condiciones no se cumplan
//Aunque sean todas falsy, estas variables no son iguales

console.log(null === undefined);

if(true /*null, undefined, false, 0*/ ){
    console.log("cumple");
}else{
    console.log("no cumple")
}
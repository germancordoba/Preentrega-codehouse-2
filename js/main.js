let alumno = prompt('ingrese su nombre');
let edad = Number(prompt('ingrese su edad'));

while(edad >= 13){
    let pregunta = Number(prompt(`Ingrese 1 si quiere calcular el promedio de la notas o 
    ingrese 2 si quiere calcular la suma entre notas`));

    let notas = []
    notas.push(pedir_nota('ingrese la nota 1'));
    notas.push(pedir_nota('ingrese la nota 2'));
    notas.push(pedir_nota('ingrese la nota 3'));
    console.log(notas);

    if(pregunta == 1){
        let promedio = notas.reduce((acc,elm)=>acc + elm , 0) / 3
        console.log('El promedio del alumno ' + alumno + " es " + promedio);
    };

    if(pregunta == 2){
        let suma = notas + notas + notas
        console.log('La suma entre las notas fue de ' + suma);
    };

    let mayor_nota = notas.find((elm)=> elm > 7);
    console.log('La mayor nota es ' + mayor_nota);

   if(confirm('Desea salir?')){
        break;
   };
};

function pedir_nota(str,max){
    let nota = Number(prompt(str))
    while(isNaN(nota) || (nota < 0 || nota > max) || nota == ''){
        nota = Number(prompt(str))
    };
    return nota
};
let alumno = prompt('ingrese su nombre');
let edad = Number(prompt('ingrese su edad'));
let nota_mayor
let resultados = {
    promedio: 'sin calcular',
    suma: 'sim calcular',
    mayor_nota: 'sin calcular'
}

while(edad >= 13){
    let pregunta = Number(prompt(`Ingrese 1 si quiere calcular el promedio de la notas, 
    ingrese 2 si quiere calcular la suma entre notas o 
    ingrese 3 si quiere ver la nota mas alta de las aprobadas`));
    
    notas = []
    notas.push(pedir_nota('ingrese la nota 1'));
    notas.push(pedir_nota('ingrese la nota 2'));
    notas.push(pedir_nota('ingrese la nota 3'));
    console.log(notas);
    
    if(pregunta == 1){
        resultados.promedio = promedio(notas)
    };
    
    if(pregunta == 2){
        resultados.suma = notas[0] + notas[1]+ notas[2]
    };
    
    if(pregunta == 3){
        resultados.mayor_nota = 0
        notas.filter((nota)=> nota >= 7).forEach(nota => {
            if(resultados.mayor_nota < nota){
                resultados.mayor_nota = nota
            }
            console.log(nota)
        });
    }

    

    console.log(resultados);
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

function promedio(valores){
    const PROMEDIO = valores.reduce((acc,elm)=>acc + elm , 0) / valores.length
    return PROMEDIO
}

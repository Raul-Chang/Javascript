// Promedio de notas

// 5 materias, valores entre 0 y 10

let sumaNotas = 0
let nota = 0

let alumno = prompt("Ingrese Nombre y Apellido del alumno")

alert("Por favor ingrese el valor de las 5 notas del alumno, solo valores entre 1 y 10")


function solicitarNotas(){
    let notaIngresada = prompt(`Ingrese las notas`)
    if (notaIngresada>=0 && notaIngresada<=10){
        nota = notaIngresada
    } else {        
        nota = 11               
    }
}

for(i=0; i<5; i++){
    if(i<5){
        solicitarNotas(); 
        if(nota<=0 || nota>10){
            alert(`Valor ingresado invalido. Intente nuevamente`)
            i--
        } else {
            sumaNotas = Number(sumaNotas) + Number(nota)        
            console.log(Number(nota))
            }
    } 
}       


let promedio = sumaNotas / 5;
console.log(`Promedio de notas del alumno ${alumno} en las 5 materias es = ${promedio}`)






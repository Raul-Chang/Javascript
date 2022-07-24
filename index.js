const alumnos = [
    {
        "nombre": "Raul Chang",
        "notaMatematica": 10,
        "notaFisica": 9,
        "notaQuimica": 10,
        "notaBiologia": 10,
        "notaHistoria": 9
    }, {
        "nombre": "Luis Flores",
        "notaMatematica": 7,
        "notaFisica": 6,
        "notaQuimica": 8,
        "notaBiologia": 5,
        "notaHistoria": 6
    }, {
        "nombre": "Jorge Peña",
        "notaMatematica": 8,
        "notaFisica": 7,
        "notaQuimica": 6,
        "notaBiologia": 10,
        "notaHistoria": 8
    },
]

let materias = ["Matematica", "Fisica" , "Quimica", "Biologia", "Historia"]
let sumaNotas = 0
let alumno
let alumnoLog

function solicitarAlumno(){
    return prompt("Para ver las notas finales, ingrese el nombre de uno de los alumnos: Raul Chang, Luis Flores o Jorge Peña");
}

function comparacionAlumno(){
    alumno = solicitarAlumno()
    alumnoLog = alumnos.find((alu) => alu.nombre === alumno)
}

comparacionAlumno()

while(!alumnoLog) {
    alert("Nombre Ingresado Invalido. Intente de nuevo");    
    comparacionAlumno()        
} 

console.log(`Notas y promedio del alumno ${alumno}:`)

materias.forEach( mat => {
    console.log(`Nota de ${mat} es : ${alumnoLog[`nota${mat}`]}`)
    sumaNotas += alumnoLog[`nota${mat}`]
} )

let promedio = sumaNotas / 5;

console.log(`Promedio de notas del alumno ${alumno} en las 5 materias es = ${promedio}`)



let boton_consulta = document.getElementById('consulta-notas-bton');



boton_consulta.addEventListener("click", ()=>{
    let id_estudiante = prompt('Ingrese el Id del alumno a consultar:')
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos_alumnos=>{
        for(estudiante of datos_alumnos){
            if (estudiante.id == id_estudiante){
                for(dato in estudiante){
                    if (estudiante[dato] < 7 && typeof(estudiante[dato] == 'number')&& dato!=='curso' && dato!=='id'){
                        alert(`El alumno: ${estudiante.nombre} debe intensificar ${dato}, su nota es ${estudiante[dato]}`)
                    }
                }
            }
        }
    })
});
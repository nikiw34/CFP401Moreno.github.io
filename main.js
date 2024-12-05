class Curso {  
    constructor(codigo, sede, horario, nombreTrayecto, comienza, duracion) {  
        this._codigo = codigo;  
        this._sede = sede;  
        this._horario = horario;  
        this._nombreTrayecto = nombreTrayecto;  
        this._comienza = comienza;  
        this._duracion = duracion;  
    }  

    // Métodos get  
    get codigo() {  
        return this._codigo;  
    }  
    
    get sede() {  
        return this._sede;  
    }  

    get horario() {  
        return this._horario;  
    }  

    get nombreTrayecto() {  
        return this._nombreTrayecto;  
    }  

    get comienza() {  
        return this._comienza;  
    }  

    get duracion() {  
        return this._duracion;  
    }  

    // Métodos set  
    set codigo(nuevoCodigo) {  
        this._codigo = nuevoCodigo;  
    }  

    set sede(nuevaSede) {  
        this._sede = nuevaSede;  
    }  

    set horario(nuevoHorario) {  
        this._horario = nuevoHorario;  
    }  

    set nombreTrayecto(nuevoNombreTrayecto) {  
        this._nombreTrayecto = nuevoNombreTrayecto;  
    }  

    set comienza(nuevaFecha) {  
        this._comienza = nuevaFecha;  
    }  

    set duracion(nuevaDuracion) {  
        this._duracion = nuevaDuracion;  
    }  
}  

const cursosPorSeccion = {  
    estetica: {  
        "Peluqueria (TM)": new Curso("3310", "Av. Libertador 4603 - Las Catonas", "Martes, jueves y viernes, 8:30 a 12:00", "peluquero/a", "marzo 2025", "9 meses"),
        "Peluqueria (TT)": new Curso("3287", "Av. Libertador 4603 - Las Catonas", "Lunes, Miercoles y Viernes 13:00 a 16:30", "peluquero/a", "marzo 2025", "3 meses"),
        "Peluqueria (TN)": new Curso("3311", "Av. Libertador 4603, las Catonas", "Lunes, Miercoles y viernes, 18:00 a 22:00", "Peluquero/a", "Marzo 2025", "7 meses"),
        "Manicuria": new Curso("3288","Av. Libertador 4603, las Catonas","Martes y Jueves, 13:00 a 16:30","manicura/o","Marzo 2025","3 meses") 
    }, 
    gastronomia: {  
	    "Elaboradora/or de Conservas de Frutas y Hortalizas": new Curso("3217", "Pringles 225 Moreno, Paso del Rey ", "Lunes y Miercoles, 08:00 - 12:30", "Elaboradora/or de Conservas de Frutas y Hortalizas", "Marzo 2025", " 9 meses"),    
	    "Panadero/a": new Curso("3245", "Dr. Enrique Finochietto 1998. Fco. Alvarez, (Iglesia Jesucristo de los Santos de Los Ultimos Dias)", "Martes y Jueves, 18:00 - 22:00", "Panadero/a", "Marzo 2025", "9 meses"),
	    "Panadero/a (2)": new Curso("3252", "Magdalena y Felix de Azara, Moreno", "Lunes y Viernes, 18:00 - 21:00", "Panadero/a", "Marzo 2025", "9 meses"),
	    "Elaborador de Quesos": new Curso("3278", "Dastugue 3591, Paso del Rey", "Lunes y Jueves, 17:00 - 21:30", "Elaborador de Quesos", "Marzo 2025", "2 meses"),
	    "Mucama de Hotel": new Curso("3285", "Piovano 3087, Moreno", "Lunes y Miercoles, 13:00 - 16:30", "Mucama de Hotel", "Marzo 2025", "7 meses"),
	},  
    informatica: {  
        "Programación": new Curso("3219", "Av. Libertador 4603, las Catonas", "Lunes, Miércoles y Viernes, 18:00 - 22:00", "Programador/a", "Marzo 2025", "7 meses"),  
	    "Operador Informatico": new Curso("3205", "Av. Libertador 4603, Las Catonas", "Lunes, Miércoles y Viernes, 09:00 - 12:30", "Operador/a de informatica para administracion y gestion", "Marzo 2025", "6 meses"),  
        "Operador Informatico (2)": new Curso("3207", "Av. Libertador 4603, Las Catonas", "Lunes, Miercoles y Viernes, 13:00 - 17:00", "Operador/a de informatica para administracion y gestion", "Marzo 2025", "5 meses"),
	    "Operador Informatico (3)": new Curso("3291", "Av. Libertador 4603, Las Catonas", "Martes y Jueves, 18:00 - 22:00", "Operador/a de informatica para administracion y gestion", "Marzo 2025", "7 meses"),
	    "Operador Informatico (4)": new Curso("3241", "Mitre 1108 Esq. Camili, Moreno Centro", "Lunes, Miércoles y Viernes, 18:00 - 21:30", "Operador/a de informatica para administracion y gestion", "Marzo 2025", "6 meses"),
	    "Técnicas de Diseño Gráfico en Sistemas I": new Curso("3221", "Av. Libertador 4603, Las Catonas", "Martes, Miércoles y Jueves, 08:00 - 12:00", "Técnicas de Diseño Gráfico en Sistemas Informáticos Nivel I", "Marzo 2025", "1 mes"),
	    "Técnicas de Diseño Gráfico en Sistemas II": new Curso("3222", "Av. Libertador 4603, Las Catonas", "Martes, Miércoles y Jueves, 08:00 - 12:00", "Técnicas de Diseño Gráfico en Sistemas Informáticos Nivel II", "Abril 2025", "2 meses"),
	    "Operador de Herramientas de Marketing": new Curso("3312", "Mexico 599, Moreno", "Lunes y Jueves, 16:30 - 20:30", "Operador de Herramientas de Marketing y venta Digital", "Marzo 2025", "2 meses"),
    },
    agro: {  
        "Jardineria": new Curso("3309", "Av del Libertador 4603 Sede", "Martes y Jueves, 09:00 - 11:45", "Huerta bajo nylon", "marzo 2025", "9 meses"),  
        "Horticultura (TM)": new Curso("3295", "Polo Agrario del Parque del Oeste", "lunes, Miercoles  y Viernes, 08:00 - 12:00", "Horticultor/a", "Marzo 2025", "8 meses"),
        "Horticultura (TT)": new Curso("3296", "Capilla nuestra señora de Lujan", "lunes, Miercoles  y Viernes, 13:00 - 17:00", "Horticultor/a", "Marzo 2025", "8 meses"), 
    },
    metalmecanica: {  
        "Soldador Basico #1": new Curso("3227", "Pringles 225 Moreno, Paso del Rey", "Martes, Jueves y Viernes, 18:00 - 21:40,", "Soldador Basico", "Marzo 2025", "3 Meses"),  
        "Soldador Basico #2": new Curso("3277", "Pringles 225 Moreno, Paso del Rey", "Miércoles y Viernes, 17:00 - 21:30", "Soldador Basico", "Marzo 2025", "4 Meses"),       
        "Auxiliar Mecanico de Automotores": new Curso("3229", "Pringles 225 Moreno", "Lunes y Jueves, 18:00 - 21:45", "Auxiliar Mecanico de Automotores", "Marzo 2025", "1 año")
    }, 
    auxiliar: {  
        "Auxiliar en instituciones educativas #1": new Curso("3211", "Pringles 225-Moreno-Paso del rey", " Miércoles y Viernes 17:30 - 21:00", "auxiliar en instituciones educativas", "14/05/2025 - 11/06/2025", "1 mes"),
        "Auxiliar en instituciones educativas #2": new Curso("3246","Av.Libertador 4603-Moreno-sede","Lunes y Miercoles 13:30 - 17:30","auxiliar en instituciones educativas","03/03/2025 - 24/03/2025","2 semanas"), 
        "Auxiliar en instituciones educativas #3": new Curso("3248","Av.Libertador 4603-Moreno-sede","Lunes y Miercoles 13:30 - 17:30","auxiliar en instituciones educativas","21/05/2025 - 11/06/2025","2 semanas"),
        "Auxiliar en instituciones educativas #4": new Curso("3256","Gualeguaychu(entre Hipocrates y Tulisi)Barrio san carlos-Francisco Alvarez-Pensar Moreno(el molinito)","Lunes,Martes y Miercoles 13:15 - 16:45","auxiliar en instituciones educativas","03/03/2025 - 19/03/2025","2 semanas"),
        "Auxiliar en instituciones educativas #5": new Curso("3267","Mitre 1108 esquina Camilli, Moreno","Lunes y Miercoles 17:30 - 21:00","auxiliar en instituciones educativas","03/03/2025 - 31/03/2025","2 semanas"), 
        "Auxiliar en instituciones educativas #6": new Curso("3280","pringles 225, Paso del Rey","Viernes 09:00 - 12:30","auxiliar en instituciones educativas","04/03/2025 - 01/05/2025","2 meses"), 
        "Auxiliar en instituciones educativas #7": new Curso("3281","pringles 225, Paso del Rey","Viernes 09:00 - 12:30","auxiliar en instituciones educativas","06/05/2025 - 03/07/2025","2 meses"), 
        "Limpieza institucional #1": new Curso("3210", "Pringles 225-Moreno-Paso del rey", "Miercoles y Viernes 17:30 - 21:00", "auxiliar en limpieza institucional", "05/03/2025 - 09/05/2025", "2 mes"), 
        "Limpieza institucional #2": new Curso("3247","Av.Libertador 4603-Moreno-sede","Lunes y Miercoles 13:30 - 17:30","limpieza institucional","26/03/2025 - 19/05/2025","2 meses"),
        "Limpieza institucional #3": new Curso("3257","Gualeguaychu(entre Hipocrates y Tulisi)Barrio san carlos-Francisco Alvarez-Pensar Moreno(el molinito)","Lunes,Martes y Miercoles 13:15 - 16:45","limpieza institucional","24/03/2025 - 06/05/2025","2 meses"),
        "Limpieza institucional #4": new Curso("3258","Gualeguaychu(entre Hipocrates y Tulisi)Barrio san carlos-Francisco Alvarez-Pensar Moreno(el molinito)","Lunes,Martes y Miercoles 13:15 - 16:45","limpieza institucional","07/05/2025 - 23/06/2025","2 meses"),
        "Limpieza institucional #5": new Curso("3268","Mitre 1108 esquina Camilli, Moreno","Lunes y Miercoles 17:30 - 21:00","limpieza institucional","02/04/2025 - 09/06/2025","2 meses"),  
	"Elaboracion de alimento a base de soja": new Curso("3215", "Pringles 225 Moreno, Paso del Rey ", "Lunes y Martes, 17:00 - 21:00", "Elaboracion de alimento a base de productos de soja", "Marzo 2025", "6 meses"),
	"Cocinero para comedor escolar": new Curso("3218", "Pringles 225 Moreno, Paso del Rey ", "Martes y Viernes, 13:00 - 17:00", "Cocinero para comedor escolar", "Marzo 2025", "2 meses"),
	"Cocinero para comedor escolar (2)": new Curso("3230", "Pringles 225 Moreno, Paso del Rey ", "Martes y Viernes, 13:00 - 17:00", "Cocinero para comedor escolar", "Mayo 2025", "3 meses"),
	"Elaboradora/or de Conservas de Frutas y Hortalizas": new Curso("3243", "Dr, Enrique Finochetto 1998 Fco. Alvarez ", "Martes y Jueves, 14:00 - 17:30", "Elaboradora/or de Conservas de Frutas y Hortalizas", "Marzo 2025", " 9 meses"),   
    }, 
    textil: {  
        "Tejido en telar": new Curso("3262", "tabla 0927 entre Shakespere y Darwin. Barrio Satelite", "Lunes, Miércoles y vier 18:00 - 22:00", "Tejido en telar", "Marzo 2025", "3 meses"),  
        "Tecnicas basicas en diseño de indumentaria": new Curso("3264", "Malavia 5019 Cuartel v", "Lunes, miercoles y Viernes 13:00 - 17:00", "Tecnicas basicas de Diseño de indumentaria", "Marzo 2025", "6 meses"),  
        "Practica en diseño basico de indumentaria #1": new Curso("3265", "Av. Libertador 4603- Moreno", "Lunes, miercoles y viernes 13:00 - 17:00", "practico en diseño basico de instrumentaria", "Marzo 2025", "9 meses"), 
        "Practica en diseño basico de indumentaria #2": new Curso("3299", "Av. Libertador 4603- Moreno", "Martes, Jueves y viernes 08:30 - 12:45", "practico en diseño basico de instrumentaria", "Marzo 2025", "7 meses"), 
        "Operador de maquina para la confeccion de indumentaria": new Curso("3266", "Av. Libertador 4603- Moreno", "Lunes y miercoles  08:00 - 12:00", "operador de maquina para la confeccion indumentaria", "Marzo 2025", "9 meses"),
        "Serigrafia #1": new Curso("3305","Piovano 3087, Moreno","Lunes, Miercoles y Viernes 08:30 - 12:00","practico en serigrafia","Marzo 2025","2 semanas"),
        "Estampador multiple #1": new Curso("3306","Piovano 3087, Moreno","Lunes, Miercoles y Viernes 08:30 - 12:00","estampador multiple","mayo 2025","7 meses"),
        "Serigrafia #2": new Curso("3307", "Gral Manuel Belgrano(Entre obrien y fray beltran)", "Martes, Jueves y Viernes 13:30 - 17:00","practico en terigrafia", "Marzo 2025", "2 meses"),
        "Estampador multiple #2": new Curso("3308", "Gral Manuel Belgrano(Entre obrien y fray beltran)", "Martes, Jueves y Viernes 13:30 - 17:00", "estampador multiple", "Mayo 2025", "7 meses"),
    }, 
    construccion: {  
        "Mantenimiento de Edificios #1": new Curso("3301", "Dr. Enrique Finochietto 1998. Fco Alvarez", "IGLESIA DE JESUCRISTO DE LOS SANTOS DE LOS ULTIMOS DIAS", "Lunes, Martes y Viernes, 18:00 - 22:00", "Mantenimiento de Edificios", "Marzo 2025", "4 Meses"),
        "Mantenimiento de Edificios #2": new Curso("3304", "Dastugue 3591, Paso del Rey. Moreno", "Granja de Elvio","Lunes, Martes y Miércoles, 18:00 - 21:30", "Mantenimiento de Edificios", "Marzo 2025", "6 Meses"), 
        "Operador/ra de Carpinteria y Fabricacion de Mobiliario": new Curso("3239", "MEXICO 599 Moreno", "ESCUELA AGRARIA", "Jueves y Viernes, 13:00 - 17:00", "Operador/ra de Carpinteria y Fabricacion de Mobiliario", "Marzo 2025", "10 Meses"),
        "Armador y Montador de Paneles y Cielorrasos de Placas de Roca y Yeso": new Curso("3275", "Av. Libertador 4603, Las Catonas", "Lunes y Viernes, 18:00 - 21:30", "Armador y Montador de Paneles y Cielorrasos de Placas de Roca y Yeso", "Marzo 2025", "4 Meses"),
        "Electricista en Inmuebles #1": new Curso("3315", "Pringles 225, Moreno", "Paso del Rey", "Martes, Jueves y Viernes, 18:00 - 22:00", "Electricista en Inmuebles", "Marzo 2025", "8 Meses"),
        "Electricista en Inmuebles #2": new Curso("3238", "Gualeguaychu(entre Hipocrates y tulisis) Barrio San Carlos, Francisco Alvarez", "Pensar Moreno(EL MOLINITO)", "Lunes, Martes y Miércoles, 18:30 - 22:00", "Electricista en Inmuebles", "Marzo 2025", "9 meses"),
        "Gasista": new Curso("3314", "Pringles 225, Moreno", "Lunes, Miercoles y Viernes 13:00 -17:00","gasista domiciliario", "Marzo 2025", "9 meses")
    },
    social_administrativo: {  
        "Admistrativo": new Curso("3225", "Pensar Moreno, Piovano 3087 - Moreno", "Lunes, Miercoles y Viernes, 8:30 - 12:00", "administrativo", "Marzo 2025", "6 meses"),
        "Apoyo en seguridad e higiene industrial #1": new Curso("3234", "Epa - Cens 451, Mitre 1108 Esq.Camili Moreno Centro", "Lunes, Miercoles y Viernes, 18:00 - 21:30", "apoyo en seguridad e higiene industrial", "Marzo 2025", "1 mes"),  
        "Apoyo en seguridad e higiene industrial #2": new Curso("3235", "Pensar Moreno, Piovano 3087 - Moreno", "Lunes, Miercoles y Viernes, 8:30 - 12:00", "apoyo en seguridad e higiene industrial", "Marzo 2025", "1 mes"),
        "Auxiliar en seguridad e higiene laboral #1": new Curso("3236", "Pensar Moreno, Piovano 3087 - Moreno", "Lunes, Miercoles y Viernes, 8:30 - 12:00", "auxiliar en seguridad e higiene laboral", "Abril 2025", "8 meses"),
        "Auxiliar en seguridad e higiene laboral #2": new Curso("3237", "Epa - Cens 451, Mitre 1108 Esq.Camili Moreno Centro", "Lunes, Miercoles y Viernes, 18:00 - 21:30", "auxiliar en seguridad e higiene laboral", "Abril 2025", "8 meses"),
        "Operador sociocomunitario": new Curso("3253", "IGLESIA DE JUSUCRISTO DE LOS SANTOS DELOS ULTIMOS DIAS, Dr. Enrique Finochietto 1998-Francisco Alvarez","Martes, Jueves y Viernes, 17:30 - 21:00", "operador sociocomunitario", "Marzo 2025", "6 meses"),
        "Operadora/or de cuidados de adultas/os mayores": new Curso("3294", "Pensar Moreno, Piovano 3087 - Moreno", "Martes, Miercoles y Viernes, 18:00 - 21:30", "operador de cuidados de adultos mayores", "Marzo 2025", "9 meses " ),
        "Gestión de Emprendimientos Productivos": new Curso("3313", "ESCUELA AGRARIA, MEXICO 599 - Moreno", "Lunes y Jueves, 16:30 - 20:30", "emprededor productivo", "Mayo 2025", "5 meses")
    }  
    
};  

function populateCourses() {  
    const seccion = document.getElementById("seccion").value;  
    const cursoSelect = document.getElementById("curso");  

    cursoSelect.innerHTML = '<option value="">--Seleccionar--</option>';  

    if (cursosPorSeccion[seccion]) {  
        Object.entries(cursosPorSeccion[seccion]).forEach(([nombreCurso, detalles]) => {  
            cursoSelect.innerHTML += `<option value="${detalles.codigo}">${nombreCurso} (${detalles.codigo})</option>`;  
        });  
    }  
    document.getElementById("result").classList.add("hidden");  
}  

function showCourseDetails() {  
    const seccion = document.getElementById("seccion").value;  
    const cursoCodigo = document.getElementById("curso").value;  
    const resultDiv = document.getElementById("result");  

    if (seccion && cursoCodigo) {  
        const cursoSeleccionado = Object.values(cursosPorSeccion[seccion]).find(curso => curso.codigo === cursoCodigo);  
        if (cursoSeleccionado) {  
            resultDiv.innerHTML = `<h2>Detalles del Curso</h2>
            <ul>  
                <li><strong>Código:</strong> ${cursoSeleccionado.codigo}</li>  
                <li><strong>Sede:</strong> ${cursoSeleccionado.sede}</li>  
                <li><strong>Horario:</strong> ${cursoSeleccionado.horario}</li>  
                <li><strong>Nombre del Trayecto:</strong> ${cursoSeleccionado.nombreTrayecto}</li>  
                <li><strong>Comienza:</strong> ${cursoSeleccionado.comienza}</li>  
                <li><strong>Duración:</strong> ${cursoSeleccionado.duracion}</li>  
            </ul>`;  
            resultDiv.classList.remove("hidden");  
        }  
    } else {  
        resultDiv.classList.add("hidden");  
    }  
}

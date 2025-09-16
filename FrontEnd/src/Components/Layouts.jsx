// ---> Comando para generar estructura rfec 
// --> Hoja de Css
import { use, useEffect, useState } from 'react'
import './Layouts.css'
// --> Importamos Axios
import axios from 'axios'

function Layouts() {
    const [Alumnos, setAlumnos]=useState([])
    // ---> Capturamos el Servidor de NODE
    useEffect(()=>{
        axios.get('http://localhost:3000/Alumnos')
        .then((res)=>{
            // ---> Asignamos la base de datos
            setAlumnos(res.data)
        })
        .catch((error)=>{
            console.error(error)
        })
    })
  return (
    <div>
        <section className='contenedor'>
            {Alumnos.map((i)=>(
                <div className="tarjeta" key={i.DNI}>
                    <h1>{i.Nombre}</h1>
                    <h2>{i.Apellido}</h2>
                    <p>{i.Edad}</p>
                </div>
            ))}
        </section>
    </div>
  )
}

export default Layouts
// 1° Renderizar la Dependencia
const express= require('express')
// 2° Creamos una Variable Principal para los Métodos
const App= express()
// 3° Definimos el Puerto
require('dotenv').config()
const PORT=process.env.PORT || 5000
// 4° Definimos la ruta del Servidor
App.listen(PORT,()=>{
    console.log(`🚀 Servidor Corriendo en: http://localhost:${PORT}`)
})

// ---> Para permitir el Acceso de otro Servidor
const cors=require('cors')
App.use(cors())
// --> Convierte la BD en un archivo de texto plano
App.use(express.json())

const conexion= require('./Server/database')
// ---> Ruta de la Base de Datos: Tabla Alumnos
App.get('/Alumnos',(req,res)=>{
    // req --> Request 
    // res --> Resolve
    const query='SELECT * FROM Alumnos';
    conexion.all(query,[],(Error,Filas)=>{
        if(Error){
            return res.status(500).send.json({Error: 'No se pudo establecer conexion'})
        }
        else{
            res.json(Filas)
        }
    })
})

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
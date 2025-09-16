const sqlite3= require('sqlite3').verbose()
// ---> Rutas Estaticas
const path= require('path')
// ------------------------>Carpeta "Server", Crea la BD
const dbstatic=path.resolve(__dirname,'./escuela.db')
// ---> Creamos la Base de Datos
const db= new sqlite3.Database(dbstatic,(Error)=>{
    if(Error){
        console.error('❗ No se pudo Crear o Conectar la Base de Datos')
    }
    else{
        console.log('✔ Base de Datos Creada Correctamente')
    }
})

db.run(`
   CREATE TABLE IF NOT EXISTS Alumnos(
   DNI INTEGER PRIMARY KEY,
   Apellido TEXT,
   Nombre TEXT,
   Edad INTEGER
)`)

module.exports=db;
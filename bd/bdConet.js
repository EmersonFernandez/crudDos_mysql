const mysql = require('mysql2');


    function conexionDB(){
        const conexion = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "mibdnode"
    
        })
    
        
        conexion.connect((error)=>{
            if(error){
                console.error("El error de conexion es: "+error);
                return conexion.end();
            }
            console.log("Conecxion a la base de dato Establecida");
        });

        return conexion;
    }

module.exports=conexionDB();

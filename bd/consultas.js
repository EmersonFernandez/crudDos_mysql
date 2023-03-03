//aqui vamos a consulta
const mysql=require('mysql2');
const conn=require('./bdConet');


function mostrarDato(req,res){

    conn.query('SELECT * FROM users',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('index',{results});
        }
    });
};

function ingresarCreate(req,res){
    res.render('insertar');
}

function listarId(req,res){
    const id=req.params.id;

    conn.query('SELECT * FROM users WHERE id=?',[id],(error,result)=>{
        if(error){
        console.log(error);
        }else{
            res.render('editar',{user:result[0]})
        }
    })
}

function actualizarRegistro(req,res){
    const id=req.body.id;
    const user=req.body.user;
    const rol=req.body.rol;

    conn.query('UPDATE users SET ? WHERE id=?',[{user,rol},id],(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/home');
        }
    })
}

function crearRegistro(req,res){
    const user=req.body.user;
    const rol=req.body.rol;
    conn.query('INSERT INTO users SET ?',{user,rol},(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/home');
        }
    });
}





function eliminarRegistro(req,res){
    const id=req.params.id;
    conn.query('DELETE FROM users WHERE id=?',[id],(error,result)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/home')
        }
    })
}

module.exports={
    mostrarDato,
    ingresarCreate,
    crearRegistro,
    eliminarRegistro,
    listarId,
    actualizarRegistro

};

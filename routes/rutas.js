const {Router}=require('express');
const router=Router();
const consulta=require('../bd/consultas')



router.get('/home',(req,res)=>{
    consulta.mostrarDato(req,res);
});
router.get('/ingresar',consulta.ingresarCreate)

router.post('/add',consulta.crearRegistro)

router.get('/update/:id',consulta.listarId)

router.post('/update',consulta.actualizarRegistro)

router.get('/delete/:id',consulta.eliminarRegistro)



module.exports=router;
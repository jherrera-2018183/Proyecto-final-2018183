const { Router } = require('express');
const { check } = require('express-validator');
const { getCarrito, postCarrito, putCarrito} = require('../controllers/carrito');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT, validarJWTProducto } = require('../middlewares/validar-jwt');
const { esAdminRole, tieneRole } = require('../middlewares/validar-roles');

const router = Router();

router.get('/mostrar', getCarrito)

router.post('/agregar',[
    validarJWT,
    tieneRole('CLIENT_ROLE'),
    check('carrito', 'El nombre es obligatorio').not().isEmpty(),

], postCarrito)

router.put ('/editar/:id',[
    validarJWT,
    tieneRole('CLIENT_ROLE'),
    check('carrito', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], putCarrito)



module.exports = router;
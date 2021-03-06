var express = require('express');
var router = express.Router(); 
var bicicletaController = require('../controllers/bicicleta');
/*GET biciletas listing*/
router.get('/', bicicletaController.Bicicleta_list);
router.get('/create', bicicletaController.Bicicleta_create_get);
router.post('/create', bicicletaController.Bicicleta_create_post);

router.get('/:id/update', bicicletaController.Bicicleta_update_get);
router.post('/:id/update', bicicletaController.Bicicleta_update_post);
//:id representa que el parametro se envia mediante el link.
router.post('/:id/delete', bicicletaController.Bicicleta_delete_post);
module.exports = router;
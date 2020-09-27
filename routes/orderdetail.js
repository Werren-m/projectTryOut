const { Router } = require('express');
const router = Router();
const OrderDetailController = require('../controllers/orderdetails')

router.post('/add', OrderDetailController.addOrderDetail);
router.get('/view', OrderDetailController.getOrderDetail);


// router.get('/', customerController.getCustomer);
router.get('/addoo/:id', OrderDetailController.addFormOrderDetails)
// router.post('/add', customerController.addCustomer)
// router.get('/delete/:id', customerController.deleteCustomer)
// router.get('/edit/:id', customerController.editFormCustomer)
// router.post('/edit/:id', customerController.editCustomer)
// router.get('/:id', customerController.findById)

module.exports = router;

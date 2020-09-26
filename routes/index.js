const { Router } = require('express');
const router = Router();
const customersRoutes = require('./customers')


router.get('/', (req,res)=>{
    res.render('index.ejs')
});
router.use('/customers', customersRoutes)

module.exports = router;

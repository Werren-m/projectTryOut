const { Router } = require('express');
const router = Router();
<<<<<<< HEAD
const ProductRoutes = require('./product');
// const PirateRoutes = require('./pirate');


router.get('/', (req, res) => {
    // res.send("Ini page home");
     res.render('index.ejs');
});

router.use('/products', ProductRoutes);

// router.use('/pirates', PirateRoutes);


module.exports = router;
=======
const customersRoutes = require('./customers')


router.get('/', (req,res)=>{
    res.render('index.ejs')
});
router.use('/customers', customersRoutes)

module.exports = router;
>>>>>>> development

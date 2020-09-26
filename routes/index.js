const { Router } = require('express');
const router = Router();
const ProductRoutes = require('./product');
// const PirateRoutes = require('./pirate');


router.get('/', (req, res) => {
    // res.send("Ini page home");
     res.render('index.ejs');
});

router.use('/products', ProductRoutes);

// router.use('/pirates', PirateRoutes);


module.exports = router;
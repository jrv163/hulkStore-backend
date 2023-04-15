const { Router } = require('express');
const { getdata } = require('../controles/listProducts');

const router = Router();
    
router.get( '/',  getdata );


module.exports = router;
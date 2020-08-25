const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send(JSON.stringify({ "status": 200, "error": null, "response": "Home Page !!" }));
})

router.get('/home', (req, res)=>{
    res.send(JSON.stringify({ "status": 200, "error": null, "response": "Home Page !!" }));
})

module.exports = router;
const express = require('express');
const router = express.Router();

const emailController = require('../controllers/emailController');

router.post("/enviar", (req, res) => {
    emailController.enviar(req, res);
});

module.exports = router;
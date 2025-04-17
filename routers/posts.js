// importo express
const express = require(`express`);

// importo la classe router
const router = express.Router();

// index    
router.get('/', function (req, res) {
    res.send('Lista dei posts');
});
    
// show
router.get('/:id', function (req, res) {
    res.send('Dettagli dei posts ' + req.params.id);
});
    
// store
router.post('/', function (req, res) {
    res.send('Creazione nuovi posts');
});
    
// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale dei posts ' + req.params.id);
});
    
// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale dei posts ' + req.params.id);
});
    
// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione dei posts ' + req.params.id);
});

// esporto il router posts
module.exports = router;
// TODO: Import Dependencies
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Sorry, wrong route!'));

// TODO: Export
module.exports = router;
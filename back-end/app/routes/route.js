module.exports = (app) => {
    const controller = require('../controllers/controller');
    const router = require('express').Router();

    router.get('/', controller.findAll);

    app.use('/api', router);
}
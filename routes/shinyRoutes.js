
const requireLogin = require('../middlewares/requireLogin');
const proxy = require('./proxy')();

module.exports = (app) => {
    app.get('/api/reports/*', requireLogin, async (req, res) => {
        //console.log('test');
        proxy.web(req, res);
    });
}
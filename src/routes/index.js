const Express = require('express');
const router = Express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'First Website'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact Page'})
});

module.exports = router;
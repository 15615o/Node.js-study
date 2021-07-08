const express = require('express');

const router = express.Router();

// GET / 라우터
router.get ('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
// 이 방법도 가능
// router.get('/', function(req, res, next) {
//     res.locals.title = 'Express';
//     res.render('index');
// });

module.exports = router;
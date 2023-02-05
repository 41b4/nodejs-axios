var express = require('express');
let axios =require('axios')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', (req, res)=> {
  res.render('about');
});

router.get('/posts', async (req, res)=> {
  const response= await axios.get('https://jsonplaceholder.typicode.com/posts')
  res.render('posts', {
    posts: response.data
  })
});

router.get('/dashboard', (req, res)=>{
  res.render('dashboard')
})

module.exports = router;

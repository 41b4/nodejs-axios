var express = require('express');
let axios =require('axios')
const cookie = require('cookie-parser')
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

router.get('/cookie/:set',(req, res, next)=>{
  console.log(req.params)
  res.cookie('theme' , req.params.set)
  res.redirect('/')
})

router.get('/about/cookie/:set',(req, res, next)=>{
  console.log(req.params)
  res.cookie('theme' , req.params.set)
  res.redirect('/about')
})

router.get('/posts/cookie/:set',(req, res, next)=>{
  console.log(req.params)
  res.cookie('theme' , req.params.set)
  res.redirect('/posts')
})

module.exports = router;

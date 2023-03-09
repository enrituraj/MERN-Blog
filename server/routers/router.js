const express = require('express');
const router = express()

//Function Defined
const Home = require('../controllers/index');
const Blog = require('../controllers/blog');
const Login = require('../controllers/login');
const Register = require('../controllers/register');

//home page or index page
router.get('/', Home);

//login page
router.post('/login', Login);

//Register pae
router.post('/register',Register);

//View Blog
router.get('/blog',Blog)


module.exports = router;
const express=require('express');
const route=express.Router();
const {login}=require('../controllers/loginControllers');


//login
route.post('/',login);


module.exports = route;
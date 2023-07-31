const express=require('express');
const route=express.Router();
const {login}=require('../controllers/login-controllers');
//login
route.post('/',login);


module.exports = route;
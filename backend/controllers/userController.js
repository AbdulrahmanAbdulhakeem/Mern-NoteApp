const express = require('express')
const User = require('../models/userModel')

const registerUser = async(req,res) => {
    const {email} = req.body
    const checkUser = await User.findOne({email})
    console.log(checkUser)
    res.send('Register User')
}

const login = (req,res) => {
    res.send('Logging in')
}

module.exports = {
    registerUser,
    login
}
const express = require('express')

const registerUser = (req,res) => {
    res.send('Register User')
}

const login = (req,res) => {
    res.send('Logging in')
}

module.exports = {
    registerUser,
    login
}
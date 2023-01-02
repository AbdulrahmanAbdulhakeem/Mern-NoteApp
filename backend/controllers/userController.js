const express = require("express");
const userModel = require("../models/userModel");
const { StatusCodes } = require("http-status-codes");

const registerUser = async (req, res) => {
  const { email } = req.body;
  const checkUser = await userModel.findOne({ email });

  if (checkUser) throw new BadRequestError("Email Is Already Used");

  const user = await userModel.create({ ...req.body });
  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    imageUrl: user.imageUrl,
    token,
  });
};

const login = (req, res) => {
  res.send("Logging in");
};

module.exports = {
  registerUser,
  login,
};

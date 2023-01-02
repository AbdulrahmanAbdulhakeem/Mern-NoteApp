const express = require("express");
const Note = require("../models/noteModel");
const {StatusCodes} = require('http-status-codes')

const getAllNotes = async (req, res) => {
  const notes = await Note.find();
  res.status(StatusCodes.OK).json(notes);
};

const getNoteById = async (req, res) => {
  res.send("Get Note By Id");
};

const createNote = async (req, res) => {
  res.send("Create Note");
};

const updateNote = async (req, res) => {
  res.send("Updated Note");
};

const deleteNote = async (req, res) => {
  res.send("Deleted");
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};

const express = require("express");
const Note = require("../models/noteModel");
const {StatusCodes} = require('http-status-codes')

const getAllNotes = async (req, res) => {
  const notes = await Note.find();
  res.status(StatusCodes.OK).json(notes);
};

const getNoteById = async (req, res) => {
    const { id } = req.params;
  const note = await Note.findById(id);

  if (!note) {
    throw new BadRequestError("Post Does Not Exist Or Has Been Deleted");
  }

  res.status(StatusCodes.OK).json(note);
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

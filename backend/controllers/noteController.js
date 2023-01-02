const express = require("express");
const Note = require("../models/noteModel");
const { BadRequestError, UnAuthenticatedError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

//@desc getAllNotes
//@route GET /api/v1/note
//access Private
const getAllNotes = async (req, res) => {
  const notes = await Note.find();
  res.status(StatusCodes.OK).json(notes);
};

//@desc getNoteById
//@route GET /api/v1/note/:id
//access Private
const getNoteById = async (req, res) => {
  const { id } = req.params;
  const note = await Note.findById(id);

  if (!note) {
    throw new BadRequestError("Post Does Not Exist Or Has Been Deleted");
  }

  res.status(StatusCodes.OK).json(note);
};

//@desc createNote
//@route POST /api/v1/note
//access Private
const createNote = async (req, res) => {
  req.body.createdBy = req.user._id;
  const note = await Note.create(req.body);
  res.status(StatusCodes.CREATED).json(note);
};

//@desc updateNote
//@route PATCH /api/v1/note/:id
//access Private
const updateNote = async (req, res) => {
  const {
    user: { id: userId },
    body: { title, note },
    params: { id: noteId },
  } = req;

  if (title === " " || note === " " || !title || !note) {
    throw new BadRequestError("Input Cannot Be Empty");
  }

  let updatedNote = await Note.findById(noteId);

  if (!updatedNote) {
    throw new BadRequestError("Post Does Not Exist Or Has Been Deleted");
  }

  if (updatedNote.createdBy.toString() !== userId) {
    throw new UnAuthenticatedError("UnAuthorized Access");
  }

  updatedNote = await Note.findByIdAndUpdate({ _id: noteId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json(updatedNote);
};

//@desc deleteNote
//@route DELETE /api/v1/note/:id
//access Private
const deleteNote = async (req, res) => {
  const {
    user: { id: userId },
    params: { id: noteId },
  } = req;

  const note = await Note.findById(noteId);

  if (!note) {
    throw new BadRequestError("Post Does Not Exist Or Has Been Deleted");
  }

  if (note.createdBy.toString() !== userId) {
    throw new UnAuthenticatedError("UnAuthorized Access");
  }

  await note.remove();

  const notes = await Note.find();

  res.status(StatusCodes.OK).json(notes);
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};

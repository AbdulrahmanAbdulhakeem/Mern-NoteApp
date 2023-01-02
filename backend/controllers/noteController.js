const { response } = require("express");
const express = require("express");

const getAllNotes = async (req, res) => {
  res.send("All Notes");
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

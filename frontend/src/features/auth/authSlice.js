import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
  user: user ? user : null,
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: "",
};

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const baseUrl = "http://localhost:3333/";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    try {
      const response = await axios.get(`${baseUrl}categories/all`);
      return response.data;
    } catch (error) {
      console.log(error.massage);
      throw new Error(error.massage);
    }
  }
);

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await axios.get(`${baseUrl}products/all`);
      return response.data;
    } catch (error) {
      console.log(error.massage);
      throw new Error(error.massage);
    }
  }
);

export const getProductsByCategory = createAsyncThunk(
  "categories/getProductsByCategory",
  async (categoryID) => {
    try {
      const response = await axios.get(`${baseUrl}categories/${categoryID}`);
      return response.data;
    } catch (error) {
      console.log(error.massage);
      throw new Error(error.massage);
    }
  }
);

export const sendData = createAsyncThunk("sale/sendData", async (data) => {
  try {
    const response = await axios.post(`${baseUrl}sale/send`);
    return response.data;
  } catch (error) {
    console.log(error.massage);
    throw new Error(error.massage);
  }
});

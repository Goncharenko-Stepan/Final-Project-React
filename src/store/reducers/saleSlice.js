import { createSlice } from "@reduxjs/toolkit";
import { sendData } from "../ActionCreators";

const initialState = {
  status: "IDLE",
  error: null,
};

const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendData.pending, (state) => {
        state.status = "PENDING";
        state.error = null;
      })
      .addCase(sendData.fulfilled, (state, action) => {
        state.status = "SUCCESS";
        state.error = null;
      })
      .addCase(sendData.rejected, (state, action) => {
        state.status = "FAILED";
        state.error = action.error.message;
      });
  },
});
export default saleSlice.reducer;

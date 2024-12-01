import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postLead from "../../src/services/LeadServices";

// Async thunk untuk memanggil API
export const postLeadThunk = createAsyncThunk("lead/postLead", async ({payload}:{payload:any},{ rejectWithValue }) => {
  try {
    const response = await postLead(payload)
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message || 'An unexpected error occurred');
    } else {
      return rejectWithValue('An unexpected error occurred');
    }
  }
});

interface LeadState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: LeadState = {
  data: [],
  loading: true,
  error: null,
};

const LeadSlice = createSlice({
  name: "lead",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postLeadThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(postLeadThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(postLeadThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default LeadSlice.reducer;

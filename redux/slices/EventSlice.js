import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchEvents } from "../../src/services/EventServices";

// Async thunk untuk memanggil API
export const getEvents = createAsyncThunk("event/getEvents", async () => {
  const response = await fetchEvents();
  return response.data;
});

// Slice untuk event
const EventSlice = createSlice({
  name: "event",
  initialState: {
    events: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default EventSlice.reducer;

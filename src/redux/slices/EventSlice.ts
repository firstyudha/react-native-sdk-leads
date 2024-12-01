import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchEvents from "../../services/EventServices";

// Async thunk untuk memanggil API
export const getEventsThunk = createAsyncThunk("event/getEvents", async () => {
  const response = await fetchEvents();
  return response.data;
});

export interface EventState {
  events: any[];
  loading: boolean;
  error: string | null;
}

const initialState: EventState = {
  events: [],
  loading: true,
  error: null,
};

// Slice untuk event
const EventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEventsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEventsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(getEventsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default EventSlice.reducer;

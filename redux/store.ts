import { configureStore } from "@reduxjs/toolkit";
import eventReducer from './slices/EventSlice'
import leadReducer from './slices/LeadSlice'

export const store = configureStore({
    reducer: {
        event: eventReducer,
        lead: leadReducer,
    }
})
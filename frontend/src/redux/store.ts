import { configureStore } from '@reduxjs/toolkit';
import fileSlice from './fileSlice';

export const store = configureStore({
    reducer: {
        files: fileSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

import { backendURL } from "../configs";

interface FileSliceState {
    songs: any[],
    currentSong: File|null
}

const initialState:FileSliceState = {
    songs: [],
    currentSong: null
}

export const findFiles = createAsyncThunk(
    "files/getFiles",
    async (_, thunkApi) => {
        try {
            const res = await axios.get(`${backendURL}/files`);

            return res.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e);
        }

    }   
)

const fileSlice = createSlice({
    name: "files",
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(findFiles.fulfilled, (state:FileSliceState, action) => {
            return {
                ...state,
                songs: action.payload.music_files
            }
        });
        builder.addCase(findFiles.rejected, (state:FileSliceState) => {
            return {
                ...state,
                songs: []
            }
        })
    },
});

export default fileSlice.reducer;
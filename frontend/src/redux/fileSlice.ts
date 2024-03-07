import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

import { backendURL } from "../configs";

interface FileSliceState {
    songs: any[],
    currentSong: File|null,
    searchTerm: string
}

const initialState:FileSliceState = {
    songs: [],
    currentSong: null,
    searchTerm: '',
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
    reducers: {
        setSearchTerm: (state:FileSliceState, action) => {
            return {
                ...state,
                searchTerm: action.payload
            }
        },
        clearSearchTerm: (state:FileSliceState) => {
            return {
                ...state,
                searchTerm: ''
            }
        },
        setCurrentSong: (state:FileSliceState, action) => {
            return {
                ...state,
                currentSong: action.payload
            }
        },
        setSongList: (state:FileSliceState, action) => {
            return {
                ...state,
                songs: action.payload
            }
        }
    },
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

export const { setSearchTerm, clearSearchTerm, setCurrentSong, setSongList } = fileSlice.actions;
export default fileSlice.reducer;
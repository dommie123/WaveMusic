import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface FileSliceState {
    songs: Array<String>,
    currentSong: File|null
}

interface FindFilesBody {
    path: String
}

const initialState:FileSliceState = {
    songs: [],
    currentSong: null
}

export const findFiles = createAsyncThunk(
    "files/getFiles",
    async (data:FindFilesBody, thunkApi) => {
        try {
            const res = await axios.get(`/files/${data.path}`);

            return { data: res.data, isFile: Boolean(res.data.files) };
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
            if (action.payload.isFile) {
                return {
                    ...state,
                    currentSong: action.payload.data
                }
            }

            return {
                ...state,
                files: action.payload.data
            }
        });
    },
});

export default fileSlice.reducer;
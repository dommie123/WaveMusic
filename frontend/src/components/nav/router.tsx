import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { AppBar } from '../common/AppBar/AppBar';
import { SongList } from '../feature/SongList/SongList';

export const Router:React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <>
                        <AppBar route='Library'>
                            <h1>Library</h1>
                        </AppBar>
                        <SongList />
                    </> 
                } />
                <Route path='/playlists' element={
                    <>
                        <AppBar route='Playlists'>
                            <h1>Playlists</h1>
                        </AppBar>
                        <p>Playlists</p>
                    </> 
                } />
            </Routes>
        </BrowserRouter>
    )
}
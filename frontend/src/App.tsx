import React from 'react';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import { AppBar } from './components/common/AppBar/AppBar';
import { MusicButtonSuite } from './components/feature/MusicButtonSuite/MusicButtonSuite';
import { SongList } from './components/feature/SongList/SongList';

import './App.css';
// import { ButtonSuite } from './components/feature/ButtonSuite/ButtonSuite';

function App() {
    return (
        <Provider store={store}>
            <AppBar route='Test'>
                <h1>Test Header</h1>
            </AppBar>
            <SongList />
            <MusicButtonSuite />
        </Provider>
    );
}

export default App;

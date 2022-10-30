import React from 'react';

import {AppBar} from './components/common/AppBar/AppBar';
import { MusicButtonSuite } from './components/feature/MusicButtonSuite/MusicButtonSuite';

import './App.css';
// import { ButtonSuite } from './components/feature/ButtonSuite/ButtonSuite';

function App() {
    return (
        <>
            <AppBar route='Test'>
                <h1>Test Header</h1>
            </AppBar>
            <MusicButtonSuite />
        </>
    );
}

export default App;

import React from 'react';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import { AppBar } from './components/common/AppBar/AppBar';
import { Router } from './components/nav/router';
import { MusicButtonSuite } from './components/feature/MusicButtonSuite/MusicButtonSuite';

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Router />
            <MusicButtonSuite />
        </Provider>
    );
}

export default App;

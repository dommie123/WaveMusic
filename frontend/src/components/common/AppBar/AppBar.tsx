import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';

import './AppBar.css';

interface AppBarProps {
    route: string;
    children: any,
}

export const AppBar: React.FC<AppBarProps> = ({route, children}) => {
    return (
        <div className='app-bar'>
            {/* TODO add logo here */}
            {children}
            <SearchBar label={`Search ${route}`} onChange={() => console.log("Change happened")} />
        </div>
    )
}
import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { IconButton } from '../IconButton/IconButton';

import { Menu as MenuIcon } from '@mui/icons-material';

import logo from '../../../assets/WaveMusic_Logo.ico';

import './AppBar.css';

interface AppBarProps {
    route: string;
    children: any,
}

export const AppBar: React.FC<AppBarProps> = ({route, children}) => {
    return (
        <div className='app-bar'>
            <IconButton className='app-menu-button' onClick={() => {}} icon={<MenuIcon />} />
            <img src={logo} alt='Wave Music Logo' className='app-bar-logo' width={100} height={60} />
            {children}
            <SearchBar label={`Search ${route}`} onChange={() => console.log("Change happened")} />
        </div>
    )
}
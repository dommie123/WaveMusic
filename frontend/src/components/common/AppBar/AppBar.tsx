import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SimpleDrawer as AppDrawer } from '../Drawer/SimpleDrawer';

import { LibraryMusic, QueueMusic } from '@mui/icons-material';

import logo from '../../../assets/WaveMusic_Logo.ico';

import './AppBar.css';

interface AppBarProps {
    route: string;
    children: any,
}

export const AppBar: React.FC<AppBarProps> = ({route, children}) => {
    const options = [
        { icon: <LibraryMusic />, label: "Library" },
        { icon: <QueueMusic />, label: "Playlists" }
    ];

    return (
        <div className='app-bar'>
            <AppDrawer anchor='left' options={options} className='app-menu-button' />
            <img src={logo} alt='Wave Music Logo' className='app-bar-logo' width={100} height={60} />
            {children}
            <SearchBar label={`Search ${route}`} onChange={() => console.log("Change happened")} />
        </div>
    )
}
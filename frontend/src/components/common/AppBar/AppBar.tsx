import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SearchBar } from '../SearchBar/SearchBar';
import { SimpleDrawer as AppDrawer } from '../Drawer/SimpleDrawer';

import { setSearchTerm } from '../../../redux/fileSlice';

import { LibraryMusic, QueueMusic } from '@mui/icons-material';

import { AppDispatch } from '../../../redux/store';

import logo from '../../../assets/WaveMusic_Logo.ico';

import './AppBar.css';

interface AppBarProps {
    route: string;
    children: any,
}

export const AppBar: React.FC<AppBarProps> = ({route, children}) => {
    const navigate = useNavigate();
    const dispatch:AppDispatch = useDispatch();
    const [prelimSearchTerm, setPrelimSearchTerm] = useState<string>('');

    const options = [
        { icon: <LibraryMusic />, label: "Library", handleSelect: () => { navigate('/') } },
        { icon: <QueueMusic />, label: "Playlists", handleSelect: () => { navigate('/playlists') } }
    ];

    return (
        <div className='app-bar'>
            <AppDrawer anchor='left' options={options} className='app-menu-button' />
            <img src={logo} alt='Wave Music Logo' className='app-bar-logo' width={100} height={60} />
            {children}
            <SearchBar 
                label={`Search ${route}`} 
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => { setPrelimSearchTerm(e.target.value) }} 
                onSearch={(e:React.MouseEvent<HTMLButtonElement>) => { dispatch(setSearchTerm(prelimSearchTerm)) }} 
            />
        </div>
    )
}
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SongListItem } from './SongListItem/SongListItem';

import { AppDispatch, RootState } from '../../../redux/store';

import './SongList.css';

export const SongList:React.FC = () => {
    const songs = useSelector<RootState>(state => state.files.songs);
    const dispatch:AppDispatch = useDispatch();

    return (
        <div className='song-list-container'>
            <SongListItem title='How to make cheese' artist='Old Man Jenkins' album='Cheddar Hits' onPlay={() => {}} />
            <SongListItem title='How to make cheese' artist='Old Man Jenkins' album='Cheddar Hits' onPlay={() => {}} />
            <SongListItem title='How to make cheese' artist='Old Man Jenkins' album='Cheddar Hits' onPlay={() => {}} />
            <SongListItem title='How to make cheese' artist='Old Man Jenkins' album='Cheddar Hits' onPlay={() => {}} />
            <SongListItem title='How to make cheese' artist='Old Man Jenkins' album='Cheddar Hits' onPlay={() => {}} />
        </div>
    )
} 
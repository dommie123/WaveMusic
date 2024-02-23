import React from 'react';

import { IconButton } from '../../../common/IconButton/IconButton';

import { Menu as MenuIcon, PlayArrow } from '@mui/icons-material';

import './SongListItem.css';

interface SongListItemProps {
    title: string,
    artist: string,
    album: string, 
    onPlay: Function
}

export const SongListItem:React.FC<SongListItemProps> = ({title, artist, album, onPlay}) => {
    const handleClick = (e:React.MouseEvent) => {
        onPlay(e);
    }

    return (
        <div className='song-item'>
            <IconButton onClick={handleClick} icon={(<PlayArrow />)} />
            <b className='song-title'>{title}</b>
            <p className='song-artist'>{artist}</p>
            <p className='song-album'>{album}</p>
            <MenuIcon />    {/* TODO make songs in menu draggable */}
        </div>
    )
}
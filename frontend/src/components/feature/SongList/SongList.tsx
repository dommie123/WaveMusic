import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SongListItem } from './SongListItem/SongListItem';

import { findFiles } from '../../../redux/fileSlice';
import { AppDispatch, RootState } from '../../../redux/store';

import './SongList.css';

interface SongFileProperties {
    music_path: string;
    properties: any;
}

export const SongList:React.FC = () => {
    const songs = useSelector<RootState, any[]>(state => state.files.songs);
    const dispatch:AppDispatch = useDispatch();

    const songList = localStorage.getItem('songList');

    const getSongProperties = ({ music_path, properties }:SongFileProperties) => {
        const pathParts = music_path.split(`\\`);

        const title = Boolean(properties.title) ? properties.title : pathParts[pathParts.length - 1];
        const artist = Boolean(properties.artist) ? properties.artist : "Unknown Artist";
        const album = Boolean(properties.album) ? properties.album : "Unknown Album";

        return { title, artist, album };
    }

    useEffect(() => {
        console.log({songs, songList});

        if (songs.length === 0) {
            dispatch(findFiles());
        }

        if (songList === '' && Boolean(songs)) {
            localStorage.setItem('songList', `${songs}`);
        }

    }, [songs, songList])

    return (
        <div className='song-list-container'>
            {songs.map(song => <SongListItem {...getSongProperties(song)} onPlay={() => {}} />)}
        </div>
    )
} 
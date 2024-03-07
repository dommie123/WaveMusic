import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SongListItem } from './SongListItem/SongListItem';

import { findFiles, setCurrentSong, setSongList } from '../../../redux/fileSlice';
import { AppDispatch, RootState } from '../../../redux/store';

import './SongList.css';

interface SongFileProperties {
    music_path: string;
    properties: any;
}

export const SongList:React.FC = () => {
    const songs = useSelector<RootState, any[]>(state => state.files.songs);
    const searchTerm = useSelector<RootState, string>(state => state.files.searchTerm);
    const [filteredSongList, setFilteredSongList] = useState<any[]>(songs);
    const dispatch:AppDispatch = useDispatch();

    const songList = JSON.parse(localStorage.getItem('songList') || "[]");

    const getSongProperties = ({ music_path, properties }:SongFileProperties) => {
        const pathParts = music_path.split(`\\`);

        const title = Boolean(properties.title) ? properties.title : pathParts[pathParts.length - 1];
        const artist = Boolean(properties.artist) ? properties.artist : "Unknown Artist";
        const album = Boolean(properties.album) ? properties.album : "Unknown Album";

        return { title, artist, album };
    }

    const handlePlaySong = (song:any) => {
        const songFile = new File(song.music_path, getSongProperties(song).title)
        dispatch(setCurrentSong(songFile));
    }

    useEffect(() => {
        // If no songs are in local storage, find songs and add them automatically.
        if (songs.length === 0 && songList.length === 0) {
            dispatch(findFiles());
        }
        // Otherwise, pull from local storage. This prevents application slowdown.
        else if (songs.length === 0) {
            dispatch(setSongList(songList));
        }

        // If songs are found and there are none in storage, store the list of songs.
        if (songList.length === 0 && Boolean(songs)) {
            localStorage.setItem('songList', JSON.stringify(songs));
        }
    }, [songs, songList])

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredSongList(songs);
            return;
        }

        const newSongList = songs.filter((song:SongFileProperties) => getSongProperties(song).title.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredSongList(newSongList);
    }, [songs, searchTerm])

    return (
        <div className='song-list-container'>
            {filteredSongList.map((song:SongFileProperties) => <SongListItem {...getSongProperties(song)} onPlay={() => { handlePlaySong(song) }} />)}
        </div>
    )
} 
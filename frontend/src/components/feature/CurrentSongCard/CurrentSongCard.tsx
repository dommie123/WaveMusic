import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';

import './CurrentSongCard.css';

export const CurrentSongCard:React.FC = () => {
    const currentSong = useSelector<RootState>(state => state.files.currentSong);

    return (
        <div className='current-song-container'>
            <img 
                src="data:image/png;base64,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" 
                alt='Album Cover' 
                width={75}
                height={75}
            />
            <div className='current-song-details'>
                <b className='current-song-header'>Song Title</b>
                <p className='current-song-additional-details'>Additional Info</p>
            </div>
        </div>
    )
}
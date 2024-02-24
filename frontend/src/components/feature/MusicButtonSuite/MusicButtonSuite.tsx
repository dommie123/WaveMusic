import React from 'react';

import { ButtonSuite } from '../ButtonSuite/ButtonSuite';
import { IconButton } from '../../common/IconButton/IconButton';

import { VolumeSlider } from '../VolumeSlider/VolumeSlider';
import { CurrentSongCard } from '../CurrentSongCard/CurrentSongCard';


// Icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import './MusicButtonSuite.css';

interface MusicButtonSuiteProps {
    id?: string;
    className?: string;
}

export const MusicButtonSuite:React.FC<MusicButtonSuiteProps> = ({id, className}) => {
    return (
        <ButtonSuite>
            <CurrentSongCard />
            <div className='music-buttons'>
                <IconButton id="skip-back-btn" onClick={() => {console.log("Skip Back")}} icon={<SkipPreviousIcon />}></IconButton>
                <IconButton id="play-btn" onClick={() => {console.log("Play Music")}} icon={<PlayArrowIcon />}></IconButton>
                <IconButton id="skip-forward-btn" onClick={() => {console.log("Skip Forward")}} icon={<SkipNextIcon />}></IconButton>
            </div>
            <VolumeSlider id="vol-slider" />
        </ButtonSuite>
    )
}
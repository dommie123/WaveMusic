import React from 'react';
import './ButtonSuite.css';

interface MusicFooterProps {
    children: any;
}

export const ButtonSuite:React.FC<MusicFooterProps> = ({children}) => {
    return (
        <footer className='suite-container'>
            {children}
        </footer>
    )
}
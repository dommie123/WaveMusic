import React from 'react';

import './IconButton.css';

interface IconButtonProps {
    id?: string;
    icon: JSX.Element;
    onClick(e:React.MouseEvent<HTMLButtonElement>): void;
    children?: any;
}

export const IconButton: React.FC<IconButtonProps> = ({id, icon, onClick, children}) => {
    return (
        <button id={id} className='icon-btn' onClick={onClick}>
            {icon}
            {children}
        </button>
    )
}
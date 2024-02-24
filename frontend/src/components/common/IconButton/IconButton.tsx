import React from 'react';

import './IconButton.css';

interface IconButtonProps {
    id?: string;
    className?: string;
    icon: JSX.Element;
    onClick(e:React.MouseEvent<HTMLButtonElement>): void;
    children?: any;
}

export const IconButton: React.FC<IconButtonProps> = ({id, className, icon, onClick, children}) => {
    return (
        <button id={id} className={`icon-btn ${className}`} onClick={onClick}>
            {icon}
            {children}
        </button>
    )
}
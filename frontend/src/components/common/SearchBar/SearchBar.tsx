import React from "react";
import SearchIcon from '@mui/icons-material/Search';

import { IconButton } from "../IconButton/IconButton";

import './SearchBar.css';

interface SearchBarProps {
    label: string;
    onChange(e:React.ChangeEvent<HTMLInputElement>):void;
}

export const SearchBar: React.FC<SearchBarProps> = ({label, onChange}) => {
    return (
        <div className="search-container">
            <input className="search-bar" type="text" name={label} placeholder={label} onChange={onChange} />
            {/* <button id="search-button" onClick={() => console.log("Searching...")}><SearchIcon /></button> */}
            <IconButton id="search-button" onClick={() => console.log("Searching...")} icon={(<SearchIcon />)}>
            </IconButton>
        </div>
    )
}
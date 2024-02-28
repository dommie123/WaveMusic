import React from "react";
import SearchIcon from '@mui/icons-material/Search';

import { IconButton } from "../IconButton/IconButton";

import './SearchBar.css';

interface SearchBarProps {
    label: string;
    onChange(e:React.ChangeEvent<HTMLInputElement>): void;
    onSearch(e:React.MouseEvent<HTMLButtonElement>): void;
}

export const SearchBar: React.FC<SearchBarProps> = ({label, onChange, onSearch}) => {
    return (
        <div className="search-container">
            <input className="search-bar" type="text" name={label} placeholder={label} onChange={onChange} />
            {/* <button id="search-button" onClick={() => console.log("Searching...")}><SearchIcon /></button> */}
            <IconButton id="search-button" onClick={onSearch} icon={(<SearchIcon />)}>
            </IconButton>
        </div>
    )
}
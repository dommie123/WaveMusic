import React from "react";
import SearchIcon from '@mui/icons-material/Search';

import './SearchBar.css';

interface SearchBarProps {
    label: string;
    onChange(e:React.ChangeEvent<HTMLInputElement>):void;
}

export const SearchBar: React.FC<SearchBarProps> = ({label, onChange}) => {
    return (
        <div className="search-container">
            {/* <label className="search-bar-label">{label}</label> */}
            <input className="search-bar" type="text" name={label} placeholder={label} onChange={onChange} />
            <button className="search-button" onClick={() => console.log("Searching...")}><SearchIcon /></button>
        </div>
    )
}
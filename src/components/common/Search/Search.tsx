import { FC } from "react";
import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";
import './Search.scss'
import { SearchProps } from "../../../types";

const Search:FC<SearchProps> = ({placeholder, icon, inputWidth, searchValue, handleSearchChange}) => {

   
	return (
		<div className="search">
			<input type="search" placeholder={placeholder} value={searchValue} onChange={(e)=>handleSearchChange!(e.target.value)}   style={{ minWidth: inputWidth ? inputWidth : '200px' }} />
            {icon === 'search' && <CiSearch size={16} />}
            {icon === 'filter' && <FiFilter size={16} />}
            
		</div>
	);
};

export default Search;

import React, { useState, useEffect } from 'react'
import FilteredItems from './FilteredItems'

function SearchItem() {
    const[searchItem, setSearchItem] = useState('');
    const[items, setItems] = useState([]);
    const[filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        setItems(JSON.parse(localStorage.getItem('data')));
    }, [filteredItems, searchItem]);

    const handleOnChange = (e) => {
        setSearchItem(e.target.value);
        setFilteredItems(items.filter(user => user.name.toLowerCase().includes(searchItem.toLowerCase())));
        console.log(filteredItems);
    }

    return (
        <div>
            <input type="text" value={searchItem} placeholder="Enter name to search.." onChange={handleOnChange}></input>
            {filteredItems.map((items, index) => <FilteredItems key={index} {...items}/>)}
        </div>
    )
}

export default SearchItem

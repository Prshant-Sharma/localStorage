import React, { useState, useEffect } from 'react'

function SearchItem() {
    const[searchItem, setSearchItem] = useState('');
    const[items, setItems] = useState([]);

    useEffect(() => {
        setItems(JSON.parse(localStorage.getItem('data')));
    }, []);

    const handleOnChange = (e) => {
        setSearchItem(e.target.value);
        items.filter(user => user.name === searchItem);
    }

    return (
        <div>
            <input type="text" value={searchItem} placeholder="Enter name to search.." onChange={handleOnChange}></input>
            <button style={{marginLeft: '10px'}}>Search</button>
        </div>
    )
}

export default SearchItem

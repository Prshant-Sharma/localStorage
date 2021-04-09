import React, { useState } from 'react'
import ItemList from './ItemList'
// import SearchItem from './SearchItem'
import '../../App.css'

function AddItem() {
    const[user, setUser] = useState([{userName: '', age: ''}]);

    const handleAdd = () => {
        let items = [];
        let itemsData = JSON.parse(localStorage.getItem('data'));
        if(itemsData === null) {
            let obj = {};
            obj['name'] = user.userName;
            obj['age'] = user.age;
            items.push(obj);
            localStorage.setItem('data', JSON.stringify(items));
        } 
        else {
            let names = itemsData.map(item => item.name.toLowerCase());
            if(names.indexOf(user.userName.toLowerCase()) >= 0) {
                alert('Name already exist!');
                return;
            }
            let obj = {};
            obj['name'] = user.userName;
            obj['age'] = user.age;
            itemsData.push(obj);
            localStorage.setItem('data', JSON.stringify(itemsData));
        }
        setUser([{userName: '', age: ''}]);
    }

    return (
        <div className="App">
            <input type="text" value={user.userName} placeholder="Enter a name to add" onChange={(e) => setUser({...user, userName: e.target.value})}></input>
            <input style={{marginLeft: '5px'}} type="number" value={user.age} placeholder="Enter age" onChange={(e) => setUser({...user, age: e.target.value})}></input>
            <button style={{marginLeft: '10px'}} disabled={!user.userName} onClick={handleAdd}>Add item</button>
            <ItemList />
            {/* <SearchItem /> */}
        </div>
    )
}

export default AddItem

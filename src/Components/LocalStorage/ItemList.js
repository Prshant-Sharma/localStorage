import React, { useEffect, useState } from 'react'

function ItemList() {
    let [list, setList] = useState([]);
    const [nameToBeUpdate, setNameToUpdate] = useState('');
    const [id, setId] = useState(null);

    useEffect(() => {
        setList(JSON.parse(localStorage.getItem('data')));
    }, [list])

    const handleDelete = (id) => {
        setList(list.splice(id, 1));
        localStorage.setItem('data', JSON.stringify(list));
        // let dataList = JSON.parse(localStorage.getItem('data'));
        // dataList.splice(id, 1);
        // localStorage.setItem('data', JSON.stringify(dataList));
    }

    const handleUpdate = (item, id) => {
        setNameToUpdate(item.name);
        setId(id);
    }

    return (
        <div>
            {list.map((item, index) => {
                return (
                    <div>
                        <input hidden={id !== index} type="text" value={item.name} onChange={(e) => setNameToUpdate(e.target.value)}></input>
                        <button disabled={!nameToBeUpdate} hidden={id !== index}>Save</button>
                        <li key={index}>{item.name} is {item.age} years old.
                            <button onClick={() => handleDelete(index)} style={{marginLeft: '10px'}}>Delete</button>
                            <button onClick={() => handleUpdate(item, index)} style={{marginLeft: '5px'}}>Update</button>
                        </li>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList

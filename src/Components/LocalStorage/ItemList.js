import React, { useEffect, useState } from 'react'

function ItemList(props) {
    const {name, age} = props;

    let [list, setList] = useState([]);

    useEffect(() => {
        setList(JSON.parse(localStorage.getItem('data')));
    }, [list])

    const handleDelete = (id) => {
        let dataList = JSON.parse(localStorage.getItem('data'));
        dataList.splice(id, 1);
        localStorage.setItem('data', JSON.stringify(dataList));
    }

    return (
        <div>
            {list.map((item, index) => {
                return (
                    <div>
                        <li key={index}>{item.name} is {item.age} years old.
                            <button onClick={() => handleDelete(index)} style={{marginLeft: '10px'}}>Delete</button>
                        </li>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList

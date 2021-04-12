import React from 'react'

function FilteredItems({name, age}) {

    return (
        <div>
            <li>{name} is {age} years old.</li>
        </div>
    )
}

export default FilteredItems

import React, { useState } from 'react'
import Header from './Header'

function Child() {
    const [object, setObject] = useState({firstName: '', lastName: '', email: ''});

    return (
        <div>
            <Header object={object}/>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" value={object.firstName} onChange={(e) => setObject({...object, firstName: e.target.value})}></input>
                <input type="text" value={object.lastName} onChange={(e) => setObject({...object, lastName: e.target.value})}></input>
                <input type="text" value={object.email} onChange={(e) => setObject({...object, email: e.target.value})}></input>
            </form>
        </div>
    )
}

export default Child

import React from 'react'

function Header(props) {
    return (
        <div>
            First name: {props.object.firstName} <br />
            Last name: {props.object.lastName} <br />
            Email: {props.object.email} <br />
        </div>
    )
}

export default Header

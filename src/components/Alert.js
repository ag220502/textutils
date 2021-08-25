import React from 'react'

function Alert(props) {
    return (
        props.NewAlert && <div>
            <div className={`alert alert-${props.NewAlert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.NewAlert.msg}</strong>
            </div>
        </div>
    )
}

export default Alert

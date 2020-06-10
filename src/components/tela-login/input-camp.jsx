import React from 'react'
import './style-components/imput-camp.css'

export default props =>
    <>
        <div className="field">
            <span>{props.children}</span>
            <input type={props.tipo} placeholder={props.placeholder} />
        </div>
    </>
import React from 'react'
import './style-components/form-title.css'

export default props =>
    <>
        <div className="ico-title">
            <div className="linha"></div>
            <div className="perfil textBack">{props.children}</div>
        </div>
    </>
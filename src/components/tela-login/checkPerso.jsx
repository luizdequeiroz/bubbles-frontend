import React from 'react'
import './style-components/checkPerso.css'

export default props =>
    <>
        <div class="round">
            <input type="checkbox" id="checkbox" />
            <label for="checkbox"></label>
            <span> {props.children} </span>
        </div>
    </>
import React from 'react'
import './tela-login.css'

import Title from './form-title'
import Field from './input-camp'
import Btn from './btn'
import Check from './checkPerso'

export default props =>
    <>
        <Title><i class="fas fa-user"></i></Title>
        
        <form className="login">
            
            <div className="inputs">

                <Field tipo = "text" placeholder="Name"><i class="fas fa-envelope textBack"></i></Field>
                <Field tipo = "password" placeholder="Password"><i class="fas fa-lock textBack"></i></Field>

                <Btn><i class="fas fa-sign-in-alt"></i> LOGIN</Btn>

                <div className="options">
                    <Check>Remember me</Check>
                    <p>New here?<a href="#/register">Sign In!</a></p>
                </div>

            </div>

        </form>
    </>
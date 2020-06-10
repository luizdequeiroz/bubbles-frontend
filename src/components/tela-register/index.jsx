import React from 'react'
import './register.css'

import Title from '../tela-login/form-title'
import Field from '../tela-login/input-camp'
import Btn from '../tela-login/btn'
import Check from '../tela-login/checkPerso'

export default props =>
    <>
        <Title><i class="fas fa-address-card"></i></Title>

        <form className="register">

            <div className="imputs">

                <div className="relative w50">
                    <Field class="nome field" tipo="text" placeholder="Name">
                        <i class="fas fa-user"></i>
                    </Field>
                    <div className="stats"></div>
                </div>

                <div className="relative w50">
                    <Field class="sobrenome" tipo="text" placeholder="Lastname">
                        <i class="fas fa-user"></i>
                    </Field>
                    <div className="stats"></div>
                </div>

                <div className="relative w100">
                    <Field tipo="email" placeholder="E-mail">
                        <i class="fas fa-envelope textBack"></i>
                    </Field>
                    <div className="stats"></div>
                </div>

                <div className="relative w100">
                    <Field tipo="text" placeholder="Username">
                        <i class="fas fa-user textBack"></i>
                    </Field>
                    <div className="stats"></div>
                </div>


                <div className="relative w100">
                    <Field tipo="password" placeholder="Password">
                        <i class="fas fa-lock textBack"></i>
                    </Field>
                    <div className="stats"></div>
                </div>

                <div className="relative w100">
                    <Field tipo="password" placeholder="Confirm your password">
                        <i class="fas fa-lock textBack"></i>
                    </Field>
                    <div className="stats"></div>
                </div>


                <Btn><i class="fas fa-sign-in-alt"></i> REGISTER</Btn>

            </div>

            <div className="options">
                <Check>Privacy Terms</Check>
                <p>Do you have an account?<a href="#/login">Log In!</a></p>
            </div>

        </form>
    </>
import React from 'react'
import { useForm } from '../../hooks/useForm'
import { TrashitButton } from '../style/styledComponents';

import Logo from '../../assets/images/logo.png';
import candado from '../../assets/images/bloquear.png';
import usuario from '../../assets/images/usuario.png'
import Google from '../../assets/images/google-blanco.png';
import Facebook from '../../assets/images/facebook.png';

export function LoginScreen() {

    const [ valuesForm, handleInputChange ] = useForm({
        email: '',
        password: '',
    })

    const { email, password } = valuesForm;


    const handleLogin = ( e ) => {
        e.preventDefault();
        console.log( email, password)
        alert(`El usuario es ${ email } y la contraseña es ${ password }`);
    }

    return (
        <section className="auth__main-container">
            <section className="img__login-container">
                <img 
                    src={ Logo }
                />
            </section>


            <form 
                onSubmit={ handleLogin }
                className="form__login-container"
            >
                <div
                    className="auth__inputs-container" 
                >
                    <div className="auth__input">
                        <img src={ candado } />
                        <input
                            type="text"
                            placeholder="Email"
                            name="email" 
                            autoComplete="off"
                            value={ email }
                            onChange={ handleInputChange }
                        />
                    </div>

                    <div className="auth__input">
                        <img src={ usuario }/>
                        <input 
                            type="password"
                            placeholder="Password"
                            name="password" 
                            autoComplete="off"
                            value={ password }
                            onChange={ handleInputChange } 
                        />
                    </div>
                    
                </div>

                <TrashitButton
                    className="akira"
                    color="white"
                    background="black"
                >
                    Login
                </TrashitButton>
            </form>

            <div className="auth__or-container">
                <div className="lines__or-container"></div>
                <p>or</p>
                <div className="lines__or-container"></div>
            </div>

            <section className="auth__social-container">
                <div className="google__container"><a href="/">
                    <img src={ Google }/>
                </a></div> 
                <div className="facebook__container"><a href="/">
                    <img src={ Facebook }/>      
                </a></div>
            </section> 
        </section>
    )
}

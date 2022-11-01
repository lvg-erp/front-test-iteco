import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'


export function Login() {

    const [login, setLogin] = useState(false)

    return (
        <div className="form-wrap">
            <div className="tabs">
                <h3 className="phone-tab"><a className={login ? '' : 'active'} href="#phone-tab-content" onClick={()=>setLogin(false)}>СМС</a></h3>
                <h3 className="login-tab"><a className={login ? 'active' : ''} href="#login-tab-content" onClick={()=>setLogin(true)}>Пароль</a></h3>
            </div>

            <div className="tabs-content">
                <div className="error"> Некорректные данные </div>
                <input type="text" className="inputAuth tel user-js" id="user_login" autoComplete="off" placeholder="Телефон" />
                <div id="login-tab-content" className={login ? 'active' : ''}>
                    <form className="login-form" action="" >
                        <input type="text" className="inputAuth user-pass" id="user_pass" autoComplete="off" placeholder="Пароль" />
                        <Link to='/order'>
                            <button type="submit" className="button enter-js" onClick={()=>console.log('event')}>Войти</button>   
                        </Link>      
                    </form>
                    <div className="help-text"></div>
                </div>

                <div id="phone-tab-content" className={login ? '' : 'active'}>
                    <form className="phone-form" action="" >
                        <input type="text" className="inputAuth user-pass form-sms" id="user_sms" autoComplete="off" placeholder="Код из СМС" />
                        <button type="submit" className="button code-js form-sms active" id="timer" >Получить код</button>
                        <button type="submit" className="button enter-js-sms form-sms" >Войти</button>
                    </form>
                    <div className="help-text"></div>
                </div>
            </div>
        </div>
        )
}
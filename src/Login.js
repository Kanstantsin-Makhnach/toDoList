import React, {useState} from "react";

function Login({loginCheck}) {

    const[loginInputValue, setLoginInputValue] = useState('')
    const[passwordInputValue, setPasswordInputValue] = useState('')

    const handleLoginChange = (e) => {
        setLoginInputValue(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPasswordInputValue(e.target.value)
    }



    const buttonCheck = (e) => {
        
        if(loginInputValue === 'admin' && passwordInputValue === '12345'){
            loginCheck()
            return
        } 
        return alert('Введен неправильный логин или пароль')
    }

    return(
        <div>
            <input type='text' placeholder="Введите логин" value={loginInputValue} onChange={handleLoginChange}>
            </input>
            <input type='password' placeholder='Введите пароль' value={passwordInputValue} onChange={handlePasswordChange}>
            </input>
            <button onClick={buttonCheck}>Войти</button>
        </div>
    )

}

export default Login;
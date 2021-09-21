import React, {useContext} from 'react';
import MyInput from "../UI/button/MyInput";
import MyButton from "../UI/button/MyButton";
import {AuthContext} from "../context/context";

//заглушка для авторизации
const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('authenticated', 'true')
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', marginTop: '250px', alignItems: 'center'}}>
            <h1 style={{textAlign: 'center'}}>Login</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;
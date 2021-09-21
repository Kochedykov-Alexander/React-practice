import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import { AuthContext } from '../../context/context';
import MyButton from '../../UI/button/MyButton';

const Navbar = () => {
    
    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (
        isAuth 
        ?
        <div className="navbar" style={{position: 'fixed'}}> 
            <div className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
                <MyButton onClick={() => setIsAuth(false)}>Выйти</MyButton>
            </div>
        </div>
        :
        <div className="navbar" style={{position: 'fixed'}}>
            <div className="navbar__links">
                <Link to="/posts">Посты</Link>
                <Link to="/login">Логин</Link>        
            </div>
        </div>

    );
};

export default Navbar;

import React, { useContext } from "react";
import { Context } from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const NavBar = observer( () => {
    const {user} = useContext(Context)
    return (
         <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Ярмарка Мастеров</NavLink>
            {user.isAuth ?
            <Nav className="ml-auto" style={{color:'white'}}>
                <Button variant={"outline-light"}>Админ панель</Button>
                <Button variant={"outline-light"} className="ml-2">Регистрация</Button>
                <Button variant={"outline-light"} >Войти</Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color:'white'}}>
                <Button variant={"outline-light"} >Регистрация</Button>
                <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)} className="ml-2">Авторизация</Button>
            </Nav>

        }
        </Container>
      </Navbar>
      
    );
  })
  
  export default NavBar;
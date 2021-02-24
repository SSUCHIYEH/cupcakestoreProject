import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

import icon_account from '../asset/icon/icons8-user-90.png'
import icon_cart from '../asset/icon/icons8-shopping-cart-90.png'

function Nav(){
    return(
        <header className="App-header">

        <div className="logo">
          <a href="#">Chill Cup</a>
        </div>
        <nav >
          <a className="header_nav" href="#">賣場</a>
        </nav>
        <nav className="header_icon_div">
          <a className="header_icon" href="#">
            <img src={icon_account} />
            <p>登入</p>
          </a>
          <a className="header_icon" href="#">
            <img src={icon_cart} />
            <p>購物車</p>
          </a>
        </nav>

      </header>
    )
} 

export default Nav;
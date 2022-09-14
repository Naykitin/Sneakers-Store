import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
   <header>
      <Link to="/">
         <div className="headerLeft">
            <img width={40} height={40} src="/img/logo.png" alt="logo" />
         <div className="headerInfo">
            <h3>Sneakers-shop</h3>
            <p>Best sneakers store</p>
         </div>
         </div>
      </Link>

      <div className="headerRight">
      <div className="shopCart" onClick={props.onClickCart}>
         <img width={18} height={18} src="/img/cart.svg" alt="cart"/>
         <span>1205 uah.</span>
      </div>
      <div>
         <Link to="/favorites">
            <img width={18} height={18} src="/img/unliked.png" alt="favorites"/>
         </Link>
      </div>
      <div>
         <img width={18} height={18} src="/img/user.png" alt="user"/>
      </div>
      </div>
   </header>
  )
}

export default Header
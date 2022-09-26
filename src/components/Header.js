import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';

function Header(props) {

   const { cartItems } = React.useContext(AppContext);
   const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

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
         <span>{totalPrice} uah.</span>
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
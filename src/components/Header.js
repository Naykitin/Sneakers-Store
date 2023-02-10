import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

function Header(props) {

   const { cartItems } = React.useContext(AppContext);
   const totalPrice = cartItems === null ? 0 : cartItems.reduce((sum, obj) => obj.price + sum, 0);
  return (
   <header>
      <Link to="/">
         <div className="headerLeft">
            <img width={60} height={60} src="/img/logo.png" alt="logo" />
         <div className="headerInfo">
            <h3>Sneakers-shop</h3>
            <p>Best sneakers store</p>
         </div>
         </div>
      </Link>

      <div className="headerRight">
      <div className="shopCart" onClick={props.onClickCart}>
         <FontAwesomeIcon icon={faShoppingBasket} />
         <span>{totalPrice} uah.</span>
      </div>
      <div>
         <Link to="/favorites">
            <img width={24} height={24} src="/img/unliked.png" alt="favorites"/>
         </Link>
      </div>
      <div>
         <FontAwesomeIcon icon={faUser} size="lg"/>
         {/* <img width={24} height={24} src="/img/user.png" alt="user"/> */}
      </div>
      </div>
   </header>
  )
}

export default Header
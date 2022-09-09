import React from 'react'

function Header(props) {
  return (
   <header>
      <div className="headerLeft">
      <img width={40} height={40} src="/img/logo.png" alt="logo" />
      <div className="headerInfo">
         <h3>Sneakers-shop</h3>
         <p>Best sneakers store</p>
      </div>
      </div>
      <div className="headerRight">
      <div className="shopCart" onClick={props.onClickCart}>
         <img width={18} height={18} src="/img/cart.svg" alt="cart"/>
         <span>1205 uah.</span>
      </div>
      <div>
         <img width={18} height={18} src="/img/user.png" alt="user"/>
      </div>
      </div>
   </header>
  )
}

export default Header
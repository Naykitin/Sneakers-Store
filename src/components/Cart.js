import React from 'react'

function Cart({onCloseCart, cartItems = []}) {
  return (
   <div className="shopCartOverlay">
      <div className="shopCart">
      <h3>
         Shop Cart
         <img  onClick={onCloseCart} width="32" height="32" className="remove" src="/img/plus.svg" alt="Plus" />
      </h3>

      <div className="cartItems">
         {
            cartItems.map((obj) => (
               <div className="cartItem">
                  <img width={120} height={70} src={obj.image} alt={obj.title} />
                  <div className="cartItem-info">
                  <p>{obj.title}</p>
                  <b>{obj.price} uah.</b>
                  </div>
                  <img width={32} height={32} className="remove" src="/img/plus.svg" alt="Plus"/>
               </div>
            ))
         }
      </div>

      <div className="shopCartTotal">
         <div className="totalPrices">
            <div>
            <p>Total</p>
            <hr/>
            <b>12499 uah.</b>
            </div>
            <div>
            <p>Tax 5%</p>
            <hr/>
            <b>1299 uah.</b>
            </div>
         </div>
         <button>Сheckout</button>
      </div>
      </div>
   </div>
  )
}

export default Cart;
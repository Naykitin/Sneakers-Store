import React from 'react'

function Cart() {
  return (
   <div style={{display: 'none'}} className="shopCartOverlay">
      <div className="shopCart">
      <h3>
         Shop Cart
         <img width="32" height="32" className="remove" src="/img/plus.svg" alt="Plus" />
      </h3>

      <div className="cartItems">
         <div className="cartItem">
            <img width={120} height={70} src="/img/sneakers/vans.png" alt="Vans" />
            <div className="cartItem-info">
            <p>Vans slip on shoes</p>
            <b>4 999 uah.</b>
            </div>
            <img width={32} height={32} className="remove" src="/img/plus.svg" alt="Plus"/>
         </div>
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
import React from 'react'
import Notice from './Notice';
import axios from 'axios';
import { AppContext } from '../App'

function Cart({onCloseCart, onRemove, items = []}) {

   const { cartItems, setCartItems } = React.useContext(AppContext);
   const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
   const [ isOrderComplete, setIsOrderComplete ] = React.useState(false);
   const onClickOrder = () => {
      axios.post('https://631b4c69fae3df4dcffaecdd.mockapi.io/orders', {items: cartItems});
      setIsOrderComplete(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
         const item = cartItems[i];
         axios.delete('https://631b4c69fae3df4dcffaecdd.mockapi.io/cart/' + item.id);
      }
   }

  return (
   <div className="shopCartOverlay">
      <div className="shopCart">
         <h3>
            Shop Cart
            <img  onClick={onCloseCart} width="32" height="32" className="remove" src="/img/plus.svg" alt="Plus" />
         </h3>

         {items.length > 0 ? (
            <>
            <div className="cartItems">
            {
               items.map((obj, index) => (
                  <div key={index} className="cartItem">
                     <img width={120} height={70} src={obj.image} alt={obj.title} />
                     <div className="cartItem-info">
                     <p>{obj.title}</p>
                     <b>{obj.price} uah.</b>
                     </div>
                     <img width={32} height={32} className="remove" src="/img/plus.svg" alt="Plus" onClick={() => onRemove(obj.number, obj.id)}/>
                  </div>
               ))
            }
         </div>

         <div className="shopCartTotal">
            <div className="totalPrices">
               <div>
               <p>Total</p>
               <hr/>
               <b>{totalPrice} uah.</b>
               </div>
               <div>
               <p>Tax 5%</p>
               <hr/>
               <b>{totalPrice * 0.05} uah.</b>
               </div>
            </div>
            <button onClick={onClickOrder}>Checkout</button>
         </div>
         </>) : (
            <Notice 
               title={isOrderComplete ? 'Order is processed' : 'Cart is empty'} 
               description={isOrderComplete ? 'Order is processed' : 'Add your favorite sneakers'} 
            />
         )
         }
      </div>
   </div>
  )
}

export default Cart;
import Card from '../components/Card';
import React from 'react';
import {AppContext} from '../App';

function Favorites({onAddToCart, onClickFavorite}) {
  
  const state = React.useContext(AppContext);

   return (
      <div className="content">
        <div className="contentTop">
          <h1>Favorites</h1>
        </div>
        <div className="cards">
          {
            state.favorites.map((sneaker) => (
              <Card 
                key={sneaker.id} 
                {...sneaker}
                onPlus={(currItem) => onAddToCart(currItem)} 
                onFavorite={onClickFavorite}
              />
            ))
          }
        </div>
      </div>
   )
}

export default Favorites;
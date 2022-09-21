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
            state.favorites.map((sneaker, index) => (
              <Card 
                key={index} 
                {...sneaker}
                onPlus={(currItem) => onAddToCart(currItem)} 
                onFavorite={(currItem) => onClickFavorite(currItem)}
              />
            ))
          }
        </div>
      </div>
   )
}

export default Favorites;
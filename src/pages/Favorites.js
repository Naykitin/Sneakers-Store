import Card from '../components/Card';

function Favorites({items, onAddToCart, onClickFavorite}) {

   return (
      <div className="content">
        <div className="contentTop">
          <h1>Favorites</h1>
        </div>
        <div className="cards">
          {
            items.map((sneaker) => (
              <Card 
                key={sneaker.id} 
                id={sneaker.id} 
                image={sneaker.image} 
                title={sneaker.title} 
                price={sneaker.price} 
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
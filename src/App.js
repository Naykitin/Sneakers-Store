import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://631b4c69fae3df4dcffaecdd.mockapi.io/items').then(res => {
      return res.json();
    }).then(json => {
      setItems(json);
    })
  }, []);

  const onAddToCart = (currItem) => {
    // console.log(cartItems);
    // console.log(currItem);
    // console.log(cartItems.includes(currItem));
    if (cartItems.filter((i) => i.includes(currItem))) {
      return;
    } else {
      setCartItems((prev) => [...prev, currItem])
    }
  }


  return (
    <div className="wrapper">
      {cartOpened && <Cart cartItems={cartItems} onCloseCart = {() => setCartOpened(false)} />}
      <Header onClickCart = {() => setCartOpened(true)} />
      <div className="content">
        <div className="contentTop">
          <h1>All sneakers</h1>
          <div className="search-block">
            <img width={18} height={18} src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="cards">
          {
            items.map((sneaker) => (
              <Card id={sneaker.id} image={sneaker.image} title={sneaker.title} price={sneaker.price} onPlus={(currItem) => onAddToCart(currItem)} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
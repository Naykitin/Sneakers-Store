import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://631b4c69fae3df4dcffaecdd.mockapi.io/items').then(res => {
      return res.json();
    }).then(json => {
      setItems(json);
    });
    fetch('https://631b4c69fae3df4dcffaecdd.mockapi.io/cart').then(res => {
      return res.json();
    }).then(json => {
      setCartItems(json);
    });
  }, []);

  const onAddToCart = (currItem) => {
    fetch('https://631b4c69fae3df4dcffaecdd.mockapi.io/cart',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(currItem)
    }).then(response => response.json());
    setCartItems((prev) => [...prev, currItem]);
  }

  const onRemoveFromCart = (id) => {
    fetch(`https://631b4c69fae3df4dcffaecdd.mockapi.io/cart/${id}`, { method: 'DELETE' }).then(setCartItems((prev) => prev.filter(item => item.id !== id)));
  }

  const onClickFavorite = (currItem) => {
    fetch('https://631b4c69fae3df4dcffaecdd.mockapi.io/favorites',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(currItem)
    }).then(response => response.json());
    setFavorites((prev) => [...prev, currItem]);
  }

  const onSearch = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className="wrapper">
      {cartOpened && <Cart 
        cartItems={cartItems} 
        onCloseCart = {() => setCartOpened(false)} 
        onRemove={onRemoveFromCart} 
      />}
      <Header onClickCart = {() => setCartOpened(true)} />
      <div className="content">
        <div className="contentTop">
          <h1>{search ? `Search by: ${search}` : "All sneakers" }</h1>
          <div className="search-block">
            <img width={18} height={18} src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." value={search} onChange={onSearch} />
            {search && <img onClick={() => setSearch('')} className='clear' width="22" height="22" src="/img/plus.svg" alt="Clear" />}
          </div>
        </div>
        <div className="cards">
          {
            items.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).map((sneaker) => (
              <Card 
                key={sneaker.id} 
                image={sneaker.image} 
                title={sneaker.title} 
                price={sneaker.price} 
                onPlus={(currItem) => onAddToCart(currItem)} 
                onFavorite={(currItem) => onClickFavorite(currItem)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
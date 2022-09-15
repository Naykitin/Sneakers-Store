import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import axios from 'axios';

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
    fetch('https://631b4c69fae3df4dcffaecdd.mockapi.io/favorites').then(res => {
      return res.json();
    }).then(json => {
      setFavorites(json);
    });
  }, []);
  

  const onRemoveFromCart = (id) => {
    fetch(`https://631b4c69fae3df4dcffaecdd.mockapi.io/cart/${id}`, { method: 'DELETE' }).then(setCartItems((prev) => prev.filter(item => item.id !== id)));
  }

  const onAddToCart = (currItem) => {
    axios.post('https://631b4c69fae3df4dcffaecdd.mockapi.io/cart', currItem);
    setCartItems((prev) => [...prev, currItem]);
 }

 const onClickFavorite = (currItem) => {
  // console.log(currItem);
  // console.log(favorites);
    if (favorites.find(favCurrItem => favCurrItem.id === currItem.id)) {
      fetch(`https://631b4c69fae3df4dcffaecdd.mockapi.io/favorites/${currItem.id}`, { method: 'DELETE' });
      setFavorites((prev) => prev.filter(item => item.id !== currItem.id))
    } else {
      fetch('https://631b4c69fae3df4dcffaecdd.mockapi.io/favorites',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currItem)
      }).then(response => response.json());
      setFavorites((prev) => [...prev, currItem]);
    }
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
      <Routes>
        <Route path="/" exact element={<Home 
            items={items} 
            search={search} 
            setSearch={setSearch}
            onSearch={onSearch}
            onClickFavorite={onClickFavorite}
            onAddToCart={onAddToCart}
          />} />
        <Route path="/favorites" element={<Favorites items={favorites} onClickFavorite={onClickFavorite}/>} />
      </Routes>
    </div>
  );
}

export default App;
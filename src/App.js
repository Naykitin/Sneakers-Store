import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import axios from 'axios';

export const AppContext = React.createContext({});

function App() {
  
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    async function fetchData () {
      const itemsRes = await axios.get('https://631b4c69fae3df4dcffaecdd.mockapi.io/items');
      const cartRes = await axios.get('https://631b4c69fae3df4dcffaecdd.mockapi.io/cart');
      const favoritesRes = await axios.get('https://631b4c69fae3df4dcffaecdd.mockapi.io/favorites');

      setIsLoading(false);
      
      setItems(itemsRes.data);
      setCartItems(cartRes.data);
      setFavorites(favoritesRes.data);
      
    }
    fetchData();
  }, []);
  

  const onRemoveFromCart = (number, id) => {
    axios.delete(`https://631b4c69fae3df4dcffaecdd.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.number !== number));
  }

  const onAddToCart = (currItem) => {
    try {
      if(cartItems.find(cartCurrItem => cartCurrItem.number === currItem.number)) {
        axios.delete(`https://631b4c69fae3df4dcffaecdd.mockapi.io/cart/${currItem.id}`);
        setCartItems((prev) => prev.filter(item => item.number !== currItem.number));
      } else {
        axios.post('https://631b4c69fae3df4dcffaecdd.mockapi.io/cart', currItem);
        setCartItems((prev) => [...prev, currItem]);
      }
    } catch (error) {
      
    }
 }

 const onClickFavorite = async (currItem) => {
    try {
      if (favorites.find(favCurrItem => favCurrItem.number === currItem.number)) {
      axios.delete(`https://631b4c69fae3df4dcffaecdd.mockapi.io/favorites/${currItem.id}`);
      setFavorites((prev) => prev.filter(item => item.number !== currItem.number));
      } else {
        const { data } = await axios.post('https://631b4c69fae3df4dcffaecdd.mockapi.io/favorites', currItem);
        setFavorites((prev) => [...prev, data]);
      } 
    } catch (error) {
        alert('error after adding to favorite');
    }
  }

  const onSearch = (event) => {
    setSearch(event.target.value);
  }

  const isItemAdded = (number) => {
    return cartItems.some(item => item.number === number);
  }
  const isItemFavorite = (number) => {
    return favorites.some(item => item.number === number);
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, setFavorites, isItemAdded, isItemFavorite, isFavorite, setIsFavorite, setCartOpened }}>
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
              isLoading={isLoading}
            />} />
          <Route path="/favorites" element={
            <Favorites 
            onClickFavorite={onClickFavorite} 
            onAddToCart={onAddToCart}
            />
          } />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
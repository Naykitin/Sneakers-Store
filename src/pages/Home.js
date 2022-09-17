import React from 'react';
import Card from '../components/Card';



function Home({items, search, setSearch, onSearch, onClickFavorite, onAddToCart, cartItems, isLoading}) {

  const rendeItems = () => {
    const cardFilter = items.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));

    return (isLoading ? [...Array(10)] : cardFilter).map((sneaker, index) => (
      <Card 
        key={index}
        onPlus={(currItem) => onAddToCart(currItem)} 
        onFavorite={(currItem) => onClickFavorite(currItem)}
        added={cartItems.some(item => item.id === sneaker.id)}
        loading={isLoading}
        {...sneaker}
      />
    ))
  }
 
   return (
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
            rendeItems()
          }
        </div>
      </div>
   )
}

export default Home;
import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';

const sneakers = [
  {
    id: 1,
    image: '/img/sneakers/vans.png',
    title: 'Vans slip on shoes 39',
    price: 1999
  },
  {
    id: 2,
    image: '/img/sneakers/vans.png',
    title: 'Vans slip on shoes 42',
    price: 2099
  },
  {
    id: 3,
    image: '/img/sneakers/vans.png',
    title: 'Vans slip on shoes 44',
    price: 2199
  }
]

function App() {
  return (
    <div className="wrapper">
      <Cart />
      <Header />
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
            sneakers.map((sneaker) => (
              <Card id={sneaker.id} image={sneaker.image} title={sneaker.title} price={sneaker.price} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
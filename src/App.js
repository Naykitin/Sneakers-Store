
function App() {
  return (
    <div className="wrapper">

      <div style={{display: 'none'}} className="shopCartOverlay">
        <div className="shopCart">
          <h3>
            Shop Cart
            <img width="32" height="32" class="remove" src="/img/plus.svg" alt="Plus" />
          </h3>

          <div className="cartItems">
            <div className="cartItem">
              <img width={120} height={70} src="/img/sneakers/vans.png" alt="Vans" />
              <div className="cartItem-info">
                <p>Vans slip on shoes</p>
                <b>4 999 uah.</b>
              </div>
              <img width={32} height={32} className="remove" src="/img/plus.svg" alt="Plus"/>
            </div>
          </div>

          <div className="shopCartTotal">
            <div className="totalPrices">
              <div>
                <p>Total</p>
                <hr/>
                <b>12499 uah.</b>
              </div>
              <div>
                <p>Tax 5%</p>
                <hr/>
                <b>1299 uah.</b>
              </div>
            </div>
            <button>Сheckout</button>
          </div>
        </div>
      </div>
      

      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3>Sneakers-shop</h3>
            <p>Best sneakers store</p>
          </div>
        </div>
        <div className="headerRight">
          <div>
            <img width={18} height={18} src="/img/cart.svg" alt="cart"/>
            <span>1205 uah.</span>
          </div>
          <div>
            <img width={18} height={18} src="/img/user.png" alt="user"/>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="contentTop">
          <h1>All sneakers</h1>
          <div className="search-block">
            <img width={18} height={18} src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <img width={18} height={18} className="favorite" src="/img/unliked.png" alt="unliked"/>
            <img width={133} height={112} src="/img/sneakers/vans.png" alt="Vans"/>
            <p>Vans slip on shoes</p>
            <div className="cardInfo">
              <div className="cardPrice">
                <span>Price:</span>
                <b>4 999 uah.</b>
              </div>
              <img width={22} height={22} src="/img/plus.svg" alt="Plus"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

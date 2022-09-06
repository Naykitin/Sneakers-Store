
function App() {
  return (
    <div className="wrapper">
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
        <h1>All sneakers</h1>
        <div className="cards">
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/vans.jpg" alt="Vans"/>
            <p>Vans slip on shoes</p>
            <div className="cardInfo">
              <div className="cardPrice">
                <span>Price:</span>
                <b>4 999 uah.</b>
              </div>
              <button>
                <img width={28} height={28} src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

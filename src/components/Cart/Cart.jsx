import './cart.scss';

const productItem = [
  {
    name: '破壞補丁修身牛仔褲',
    count: 0,
    price: 3999,
    img: require('../../assets/images/product-1.jpg'),
  },
  {
    name: '刷色直筒牛仔褲',
    count: 0,
    price: 1299,
    img: require('../../assets/images/product-2.jpg'),
  },
];

const Cart = () => {
  return (
    <div className="cart-container ml-3">
      <h4 className="cart-title mb-3"> 購物籃</h4>
      {productItem.map((item) => {
        // const [name, count, prize, img] = item;
        return (
          <div className="product-container" key={productItem.indexOf(item)}>
            <div className="row my-3">
              <div className="col col-4">
                <img className="img-container" src={item.img} alt="" />
              </div>
              <div className="col col-8">
                <div className="product-info">
                  <div className="product-name">{item.name}</div>
                  <div className="product-price">${item.price}</div>
                </div>
                <div className="product-control-container">
                  <div className="product-control">
                    <span className="product-count">{item.count}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="cart-info shipping">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </div>
      <div className="cart-info total">
        <div className="text">小計</div>
        <div className="price">$0</div>
      </div>
    </div>
  );
};

export default Cart;

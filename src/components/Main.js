import { addToCart, emptyCart, removeToCart } from '../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../actions/productActions';


function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);
  const product = {
    name: 'i Phone',
    category: 'mobile',
    price: 10000,
    color: 'red'
  }
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      <div>
        <button onClick={() => dispatch(removeToCart(product.name))}>Remove from Cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(productList())}>Get Product List</button>
      </div>
    </div>
  );
}

export default Main;

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { productSearch } from '../actions/productActions';

const Header = () => {
    const result = useSelector((state) => state.cartData);
    const dispatch = useDispatch();
    return (
        <div className="header">
            <Link to="/">
                <h1 className='logo'>E-Comm</h1>
            </Link>
            <div className='search-box'>
                <input type="text" placeholder='Search Product' onChange={(e) => dispatch(productSearch(e.target.value))} />
            </div>
            <Link to="/cart">
                <div className="cart-div">
                    <span>{result.length}</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
                </div>
            </Link>
        </div>
    )
}
export default Header;
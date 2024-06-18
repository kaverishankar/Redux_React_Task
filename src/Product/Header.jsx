import './Product_module.css'
import { useSelector } from 'react-redux';

const Header = () => {
    const cart = useSelector((state) => state.listingReducer.Cart)
    const total = useSelector((state) => state.listingReducer.total)

    return (
        <header className="header">
            <h1>Phone World</h1>
            <button style={{ float: 'right', fontSize: '15px', padding: '8px', borderRadius: '5px', color: 'yellow', backgroundColor: 'black' }}>
                {'Cart '}<i style={{ padding: '2px' }} className="fa-solid fa-cart-shopping">{' '}{cart.length}</i></button>

            <button style={{ float: 'right', fontSize: '15px', padding: '8px', marginRight: '10px', borderRadius: '5px', color: 'yellow', backgroundColor: 'black' }}>
                {'Total Price : '}<i style={{ padding: '2px' }} className="fa-solid fa-indian-rupee-sign">{' '}{total}</i>
            </button>

        </header>
    );
};

export default Header;

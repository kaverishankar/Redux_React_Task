import { useDispatch, useSelector } from 'react-redux';
import './Product_module.css'


const Product = (props) => {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.listingReducer.Cart);

    const check = (productId) => {
        return cartItem.some((item) => item.id === productId);

    };


    const add_remove = () => {
        if (check(props.id)) {

            dispatch({ type: "remove_cart", prod: props });
        } else {

            dispatch({ type: "add_in_cart", prod: props });
        }
    };

    const handleChangeQuantity = (e) => {
        e.target.value;
    };


    return (
        <div className='product'>
            <img style={{ height: '350px', width: '300px', objectFit: 'contain' }} src={props.image}></img>
            <div className='proname'>
                <h3 style={{ paddingBottom: '0', textAlign: 'center', color: 'yellow' }}>{props.title}</h3>
                <h4>Brand : {props.brand}</h4>
                <h5>Description : {props.description}</h5>
                <label>Quantity: </label>
                <select value={props.quantity} onChange={handleChangeQuantity}>
                    <option propsue={"1"}>1</option>
                    <option propsue={"2"}>2</option>
                    <option propsue={"3"}>3</option>
                </select>
                <i style={{ padding: '10px', color: 'aqua', paddingTop: '0', }} className="fa-solid fa-indian-rupee-sign">
                    {' ' + props.price}
                </i><br></br>
                <button style={{ color: 'red' }} onClick={add_remove}>{check(props.id) ? 'Remove' : 'Add to Cart'}</button>
            </div>
        </div>
    );
};

const Listing = () => {
    const products = useSelector(state => state.listingReducer.prod);
    return (
        <div className='Content'>
            {(products || []).map((pro) =>
            (
                <Product{...pro} key={pro.id} />
            ))}
        </div>
    );
};

export default Listing;
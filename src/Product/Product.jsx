import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Listing from './Listing';
import { useDispatch } from 'react-redux';

const prod =
    [
        {
            "id": 1,
            "title": "iPhone 15",
            "description": "An apple mobile which is nothing like apple.",
            "price": 10000.0,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "quantity": 1,
            "image": "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__en-IN_817ead95-bff3-4129-866d-3f87976e8be2.jpg?v=1694759321"
        },
        {
            "id": 2,
            "title": "Samsung Z Flip4",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe.",
            "price": 8000.0,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "quantity": 1,
            "image": "https://img.pccomponentes.com/articles/1051/10513230/2784-samsung-galaxy-z-flip4-5g-8-128gb-violeta-cargador-de-pared-25w-b7d2d2c6-cb20-4015-a6a3-fa9345c9c7b1.jpg"
        },
        {
            "id": 3,
            "title": "IQOO 7",
            "description": "IQOO is officially announced on April 2021.",
            "price": 3000.0,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "IQOO",
            "category": "smartphones",
            "quantity": 1,
            "image": "https://static.toiimg.com/thumb/resizemode-4,msid-82256035,imgsize-60451,width-800/82256035.jpg"
        },
        {
            "id": 4,
            "title": "OnePlus 12",
            "description": "Compare to other phone , it will be PLUS ONE +1.",
            "price": 5000.0,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "OnePlus",
            "category": "smartphones",
            "quantity": 1,
            "image": "https://youget.pt/160851-large_default/oneplus-open-5g-512gb16gb-dual-sim-black.jpg"
        }
    ];

const Products = () => {
    const dispatch = useDispatch();
    const loadProducts = () => {
        dispatch({ type: 'load', prod })
    }
    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div>
            <Header />
            <Listing />
            <Footer />
        </div>
    )
}

export default Products
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { addToCart } from '../redux/actions';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const [units, setUnits] = useState(1);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleUnitsChange = (event) => {
        setUnits(parseInt(event.target.value));
    };

    const handleAddToCart = () => {
        if (units <= 0) {
            setErrorMessage("Quantity must be greater than 0.");
            setTimeout(() => setErrorMessage(''), 2500);
            return;
        }

        if (units > 10) {
            setErrorMessage("You can only add up to 10 units.");
            setTimeout(() => setErrorMessage(''), 2500);
            return;
        }

        dispatch(addToCart(product, units));
        setSuccessMessage(`${product.title} added to cart!`);
        setErrorMessage('');
        setTimeout(() => setSuccessMessage(''), 2500);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 relative">
            <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
            <Link to={`/details/${product.id}`} className="link">
                <h2 className="hover:underline text-base font-medium my-2">{product.title}</h2>
            </Link>

            <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-700">${product.price}</span>
                <div className="flex items-center">
                    <span className="mr-2 text-green-600">In Stock</span>
                    <input
                        type="number"
                        min="1"
                        max="10"
                        value={units}
                        onChange={handleUnitsChange}
                        className="w-16 border-gray-400 border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                    />
                </div>
            </div>

            <div className="flex items-center justify-center">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            </div>

            {successMessage && (
                <div className="mt-3 text-green-600 text-center font-medium transition-opacity duration-300">
                    {successMessage}
                </div>
            )}

            {errorMessage && (
                <div className="mt-3 text-red-600 text-center font-medium transition-opacity duration-300">
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default ProductCard;
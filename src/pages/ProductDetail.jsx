import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { addToCart } from "../redux/actions";
import Footer from "../components/Footer";
const ProductDetail = () => {
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [product, setProduct] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [id]);

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleQuantityChange = (e) => {
        setSelectedQuantity(parseInt(e.target.value));
    };

    const handleAddToCart = () => {
        if (selectedQuantity <= 0) {
            setErrorMessage("Quantity must be greater than 0.");
            setSuccessMessage('');
            setTimeout(() => setErrorMessage(''), 2500);
            return;
        }

        if (selectedQuantity > 10) {
            setErrorMessage("You can only add up to 10 units.");
            setSuccessMessage('');
            setTimeout(() => setErrorMessage(''), 2500);
            return;
        }

        dispatch(addToCart(product, selectedQuantity));
        setSuccessMessage(`${product.title} added to cart!`);
        setErrorMessage('');
        setTimeout(() => setSuccessMessage(''), 2500);
    };

    return (
        <>
            <Navbar cartItemsCount={cart.length} />
            <div className="flex flex-wrap justify-center items-center mt-10">
                <div className="w-full md:w-1/2 p-4">
                    <img src={product.image} alt={product.title} className="mx-auto w-64" />
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                    <p className="text-gray-600 mb-2">${product.price}</p>
                    <p className="text-gray-700 mb-4">{product.description}</p>

                    <div className="mb-4">
                        <span className="mr-2">Color:</span>
                        <div className="flex flex-wrap justify-start items-center">
                            {["red", "blue", "green"].map(color => (
                                <button
                                    key={color}
                                    className={`color-option ${selectedColor === color ? `selected border-2 border-${color}-500` : ""}`}
                                    onClick={() => handleColorChange(color)}
                                >
                                    <div className={`w-8 h-8 rounded-full bg-${color}-500 mx-3`}></div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <span className="mr-2">Size:</span>
                        <select className="border border-gray-400 rounded py-2 px-4">
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <span className="mr-2">Quantity:</span>
                        <input
                            type="number"
                            min="1"
                            max="10"
                            value={selectedQuantity}
                            onChange={handleQuantityChange}
                            className="border border-gray-400 rounded py-2 px-4"
                        />
                    </div>

                    <div className="mb-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                            onClick={handleAddToCart}
                        >
                            Add to cart
                        </button>
                    </div>

                    {/* ✅ Success/Error Message Section */}
                    {successMessage && (
                        <div className="mb-4 text-green-600 text-center font-medium transition-opacity duration-300">
                            {successMessage}
                        </div>
                    )}
                    {errorMessage && (
                        <div className="mb-4 text-red-600 text-center font-medium transition-opacity duration-300">
                            {errorMessage}
                        </div>
                    )}

                    <div className="mb-4">
                        <Link to="/cart" className="text-blue-500 hover:text-blue-600">
                            Go to cart
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ProductDetail;

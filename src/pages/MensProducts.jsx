import React, { useEffect, useState } from "react";
import { Categories, Navbar } from "../components";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
const MensProducts = () => {

    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/men's clothing")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        if (searchTerm === "") {
            setFiltered(products);
        }
    }, [searchTerm, products]);

    const onChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        if (!searchTerm) {
            setFiltered(products);
            return;
        }

        const filteredProducts = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm)
        );
        setFiltered(filteredProducts);
    };


    return (
        <div>
            <Navbar onChange={onChange} />
            <Categories />
            <div className="container mx-auto my-4">
                <h2 className="text-2xl font-bold mb-8 mt-8 flex items-center justify-center">Men's Clothing</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {filtered.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MensProducts
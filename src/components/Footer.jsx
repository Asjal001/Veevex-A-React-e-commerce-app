import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim() === '') return;

        setSuccessMessage("Subscribed successfully!");
        setEmail('');

        setTimeout(() => setSuccessMessage(''), 2500);
    };

    return (
        <footer className="bg-blue-600 text-white py-8 mt-0">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                    <h3 className="text-xl font-semibold mb-3">About Us</h3>
                    <p className="text-sm">
                        We are a trusted online store providing high-quality products at affordable prices. Your satisfaction is our priority.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/cart" className="hover:underline">Cart</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-3">Customer Service</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/about" className="hover:underline">About</Link></li>
                        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-3">Stay Connected</h3>
                    <p className="text-sm mb-2">Subscribe to our newsletter</p>
                    <form onSubmit={handleSubscribe} className="flex mb-2">
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-2 rounded-l w-full text-black"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-white text-blue-600 px-4 py-2 rounded-r hover:bg-gray-100"
                        >
                            Subscribe
                        </button>
                    </form>

                    {successMessage && (
                        <div className="text-green-300 text-sm">{successMessage}</div>
                    )}
                </div>
            </div>

            <div className="text-center mt-8 text-sm text-white/70">
                &copy; {new Date().getFullYear()} Veevex. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
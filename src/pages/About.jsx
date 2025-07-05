import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold text-blue-600 mb-4">About Veevex</h1>
                <p className="text-gray-700 text-lg mb-6">
                    At <span className="font-semibold">Veevex</span>, we believe shopping should be simple, enjoyable, and trustworthy. 
                    We’re a passionate team dedicated to providing high-quality products at fair prices, all while delivering an outstanding customer experience.
                </p>
                <p className="text-gray-700 text-lg mb-6">
                    Since our founding, we’ve helped thousands of customers discover their favorite products — from electronics and fashion to lifestyle accessories. 
                    We continuously work to improve our platform, services, and selection.
                </p>
                <p className="text-gray-700 text-lg">
                    Thank you for being part of the Veevex journey. We’re excited to serve you and make your online shopping experience better than ever.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default About;

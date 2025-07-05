import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    // Refs for inputs
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'This field is required';
        if (!formData.email.trim()) newErrors.email = 'This field is required';
        if (!formData.message.trim()) newErrors.message = 'This field is required';
        return newErrors;
    };

    const scrollToField = (fieldName) => {
        if (fieldName === 'name') nameRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (fieldName === 'email') emailRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (fieldName === 'message') messageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            scrollToField(Object.keys(newErrors)[0]); // scroll to the first error field
            return;
        }

        setSuccessMessage("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setTimeout(() => setSuccessMessage(''), 2500);
    };

    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold text-blue-600 mb-6">Contact Veevex</h1>
                <p className="text-gray-700 mb-6">
                    Have a question, feedback, or need help? Fill out the form below and we’ll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div ref={nameRef}>
                        <label className="block text-gray-700 mb-1">
                            Name <span className="text-blue-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full border rounded px-4 py-2 focus:outline-none focus:border-blue-500 ${
                                errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div ref={emailRef}>
                        <label className="block text-gray-700 mb-1">
                            Email <span className="text-blue-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full border rounded px-4 py-2 focus:outline-none focus:border-blue-500 ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Message */}
                    <div ref={messageRef}>
                        <label className="block text-gray-700 mb-1">
                            Message <span className="text-blue-500">*</span>
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className={`w-full border rounded px-4 py-2 focus:outline-none focus:border-blue-500 ${
                                errors.message ? 'border-red-500' : 'border-gray-300'
                            }`}
                        ></textarea>
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                {successMessage && (
                    <div className="mt-4 text-green-600 text-center font-medium transition-opacity duration-300">
                        {successMessage}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Contact;

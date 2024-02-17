import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';

const QuoteModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to backend
        console.log(formData);
        setIsSubmitted(true); // Show submission message
        // You can also reset the form fields here if needed
        setTimeout(() => {
            setIsSubmitted(false); // Hide submission message after 3 seconds
            onClose(); // Close modal after form submission
        }, 3000);
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm ${isOpen ? '' : 'hidden'}`}>
            <div className="bg-white rounded-lg p-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative">
                <button onClick={onClose} className="absolute top-0 right-0 p-2">
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                </button>
                {isSubmitted ? (
                    <div className="mb-4 text-center text-xl font-bold text-green-600">Request Submitted! We will reach you soon.</div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-start font-bold">Name:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-start font-bold">Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 text-start font-bold">Phone:</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="service" className="block text-gray-700 text-start font-bold">Service:</label>
                            <select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                                <option value="" disabled>Select a service</option>
                                <option value="Custom Software Development">Custom Software Development</option>
                                <option value="Website Development">Website Development</option>
                                <option value="Mobile App Development">Mobile App Development</option>
                                <option value="Software Testing">Software Testing</option>
                            </select>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default QuoteModal;

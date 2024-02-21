import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import axios from 'axios';

const QuoteModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // If the input name is 'phone', limit its length to 10 characters
        if (e.target.name === 'phone' && e.target.value.length > 10) {
            return; // Stop the function from proceeding further
        }

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        // Check if the input name is 'name' and filter out non-alphabet characters
            if (e.target.name === 'name') {
                const filteredValue = e.target.value.replace(/[^A-Za-z\s]/g, '');
                setFormData({
                ...formData,
                [e.target.name]: filteredValue,
                });
            } else {
                // For all other inputs, use the entered value as it is
                setFormData({
                ...formData,
                [e.target.name]: e.target.value,
                });
            }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.post("http://localhost:3001/api/send-quote-email", formData);
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                onClose();
            }, 3000);
        } catch (error) {
            console.error('Error sending quote email:', error);
            setError('Failed to send email. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm ${isOpen ? '' : 'hidden'}`}>
            <div className="bg-white rounded-lg p-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative">
                <button onClick={onClose} className="absolute top-0 right-0 p-2">
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                </button>
                {error && (
                    <div className="mb-4 text-center text-xl font-bold text-red-600">{error}</div>
                )}
                {isSubmitted ? (
                    <div className="mb-4 text-center text-xl font-bold text-green-600">Request Submitted! We will reach you soon.</div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold text-start">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md" pattern="[A-Za-z\s]+" title="Name should contain only alphabetic characters" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold text-start">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold text-start">Phone</label>
                            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md" pattern="\d{10}" title="Phone number should be 10 digits" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="service" className="block text-gray-700 text-sm font-bold text-start">Service</label>
                            <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md" required>
                                <option value="">Select a service</option>
                                <option value="Custom Software Development">Custom Software Development</option>
                                <option value="Website Development">Website Development</option>
                                <option value="Mobile App Development">Mobile App Development</option>
                                <option value="Software Testing">Software Testing</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className={`bg-blue-500 text-white px-4 py-2 rounded-md ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default QuoteModal;

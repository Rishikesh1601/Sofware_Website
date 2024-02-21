import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import './contactus.css'

const ContactUs = () => {
  const onChange = () =>{

  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // If the input name is 'phone', limit its length to 10 characters
      if (e.target.name === 'phoneNumber' && e.target.value.length > 10) {
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
    try {
      await axios.post('http://localhost:3001/api/send-contact-email', formData);
      alert('We will reach out to you soon!');
      // Optionally, you can redirect the user or perform any other actions after sending the email
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };
  return (
    <div className="container mt-32 mx-auto px-2 md:px-4 contactusedit">

      <section className="">

        <div className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-12 px-6 text-3xl font-bold">
              Contact us
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-around makeitaround">

        <form onSubmit={handleSubmit} className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
          <div className="mb-3 w-full">
            <label className="block font-medium mb-[2px] text-teal-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="px-2 py-2 border w-full outline-none rounded-md"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              pattern="[A-Za-z\s]+"
              title="Name should contain only alphabetic characters"
              required
            />
          </div>

          <div className="mb-3 w-full">
            <label className="block font-medium mb-[2px] text-teal-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="px-2 py-2 border w-full outline-none rounded-md"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="mb-3 w-full">
            <label className="block font-medium mb-[2px] text-teal-700" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="tel"
              className="px-2 py-2 border w-full outline-none rounded-md"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              pattern="\d{10}"
              title="Phone number should be 10 digits"
              required
            />
          </div>

          <div className="mb-3 w-full">
            <label className="block font-medium mb-[2px] text-teal-700" htmlFor="message">
              Message
            </label>
            <textarea
              className="px-2 py-2 border rounded-[5px] w-full outline-none"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <ReCAPTCHA sitekey="6Lcyz-gkAAAAACP3J0V7WI386_8Rs77SW7ZDbCqG" onChange={onChange} className='mb-3 w-full'/>

          <button type="submit" className="mb-6 inline-block w-full rounded buttonaboutus">
            Send
          </button>
        </form>

          <div className="w-full shrink-0 grow-0 basis-auto lg:w-1/2">
            <iframe className='w-full manageIframe' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15139.05542243947!2d73.8687765!3d18.449028!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91fd5c6d489%3A0x954fefd0b60cba12!2sDreamz%20Software%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1681883790875!5m2!1sen!2sin" width="100&amp;" height="250" allowFullScreen></iframe>
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-teal-400-100 p-4 text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className=" font-bold">
                      Address
                    </p>
                    <p className="text-neutral-500 ">
                      Office No 27, DNK Business Bay, Katraj – Kondhwa Rd, Rajas Society, Katraj, Pune, Maharashtra 411046
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-teal-400-100 p-4 text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className=" font-bold ">
                      Call
                    </p>
                    <p className="text-neutral-500 ">
                      +91 99606 85666
                    </p>
                    <p className="text-neutral-500 ">
                      +91 2046766249
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="align-start flex">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-teal-400-100 p-4 text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="font-bold ">Email</p>
                    <p className="text-neutral-500 ">
                      info@dreamztechnology.com
                    </p>
                    <p className="text-neutral-500 ">
                    hr@dreamz.website
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

import React, { useState } from 'react';
import axios from 'axios';
import './footer.css';
const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3001/api/send-quote-email", { email });
      if (response.status === 200 && response.data.success) {
        setSuccessMessage('Quote requested successfully. We will contact you soon.');
        setEmail('');
      } else {
        setErrorMessage('Failed to request quote. Please try again later.');
      }
    } catch (error) {
      console.error('Error requesting quote:', error);
      setErrorMessage('An error occurred while requesting a quote. Please try again later.');
    }
    setIsLoading(false);
    
  };
  
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling behavior
    });
};

  return (
    <>
      {/* <!--footer start--> */}
      <footer className="footer bg-gray-800 text-white">
        <div className="mx-auto px-11 mobilePaddingFooter">
          <div className="primary-footer">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              <div className="col-span-1">
                <h5 className="text-xl font-bold mb-4">Get In Touch</h5>
                <ul className="media-icon list-none mb-8 addlineHeightFooter">
                  <li>
                    <p className="mb-0 text-lg">Office No 27, DNK Business Bay, Katraj – Kondhwa Rd,<br></br> Rajas Society, Katraj, Pune, Maharashtra 411046</p>
                  </li>
                  <li>
                    <div className='flex flex-col'>
                    <a href="mailto:info@dreamztechnology.com" className="text-blue-500 text-lg">
                    info@dreamztechnology.com
                    </a>
                    <a href="mailto:hr@dreamz.website" className="text-blue-500 text-lg">
                    hr@dreamz.website
                    </a>
                    </div>
                  </li>
                  <li>
                    <div className='flex flex-col'>
                    <a href="tel:+919960685666" className="text-blue-500 text-lg">
                    +91 9960685666
                    </a>
                    {/* <a href="tel:+912046766249" className="text-blue-500 text-lg">
                    +91 2046766249
                    </a> */}
                    </div>
                  </li>
                </ul>
                <h5 className="text-xl font-bold mb-2">Follow Us</h5>
                <ul className="flex gap-4 list-inline ps-0 ms-0 footer-social">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/dreamztechnology" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.youtube.com/@dreamzsoftwaresolutionspvt2569" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/dreamztechnology/" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/dreamz_tech" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/company/dreamztechnology/" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-1 mt-6 md:mt-0">
                <h5 className="text-xl font-bold mb-4">Information</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <ul className="list-none addlineHeightFooter1">
                      <li>
                        <a href="/" className="text-blue-500 text-lg">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/aboutUs" className="text-blue-500 text-lg">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="/trusted clients" className="text-blue-500 text-lg">
                          Our Trusted Clients
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1">
                    <ul className="list-none addlineHeightFooter1">
                      <li>
                        <a href="/career" className="text-blue-500 text-lg">
                          Career at Dreamz
                        </a>
                      </li>
                      <li>
                        <a href="/custom software development" className="text-blue-500 text-lg">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="/contactus" className="text-blue-500 text-lg">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1">
                    <ul className="list-none addlineHeightFooter1">
                      
                      <li>
                        <a href="/privacy" className="text-blue-500 text-lg">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="/terms" className="text-blue-500 text-lg">
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-4 mt-8">Marketing Tools</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                
                  <div className="col-span-1">
                    <ul className="list-none addlineHeightFooter1">
                      <li>
                        <a href="http://wa.dreamztechnolgy.org" target='blank' className="text-blue-500 text-lg">
                          WhatsApp ChatBot
                        </a>
                      </li>
                      <li>
                        <a href="http://trans.dreamztechnolgy.org" target='blank' className="text-blue-500 text-lg">
                          Transactional Bulk SMS
                        </a>
                      </li>
                      <li>
                        <a href="http://promo.dreamztechnolgy.org" target='blank' className="text-blue-500 text-lg">
                          Promotional Bulk SMS
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1">
                    <ul className="list-none addlineHeightFooter1">
                      <li>
                        <a href="http://bizmail.dreamztechnolgy.org" target='blank' className="text-blue-500 text-lg">
                          Transactional Bulk Email
                        </a>
                      </li>
                      <li>
                        <a href="http://mail.dreamztechnolgy.org" target='blank' className="text-blue-500 text-lg">
                          Promotional Bulk Email
                        </a>
                      </li>
                      <li>
                        <a href="http://ivr.dreamztechnolgy.org" target='blank' className="text-blue-500 text-lg">
                          IVR Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-1">
                    <ul className="list-none addlineHeightFooter1">
                      
                      <li>
                        <a href="http://voice.dreamztechnolgy.org/" target='blank' className="text-blue-500 text-lg">
                          Bulk Voice Call
                        </a>
                      </li>
                      <li>
                        <a href="https://dreamztechnology.supersite2.myorderbox.com/en/" target='blank' className="text-blue-500 text-lg">
                          Domain & Hosting
                        </a>
                      </li>
                      <li>
                        <a href="https://auth.easebuzz.in/easebuzz" target='blank' className="text-blue-500 text-lg">
                          Payment Merchant
                        </a>
                      </li>
                    </ul>
                  </div>
                  </div>
                {/* <div className="mt-8">
                  <h5 className="text-xl font-bold mb-4">Request a Quote</h5>
                  {successMessage && <div className="success-message">{successMessage}</div>}
                  {errorMessage && <div className="error-message">{errorMessage}</div>}
                  <div className="subscribe-form">
                  <form id="mc-form" className="mc-form" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email" 
                    className="email border border-gray-400 p-2 w-full"
                    id="mc-email"
                    placeholder="Email Address"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                  />
                  <input
                    className="subscribe-btn bg-blue-500 text-white p-2 ml-2 cursor-pointer"
                    type="submit"
                    value={isLoading ? "Submitting..." : "Request Quote"} 
                    disabled={isLoading} 
                  />
                </form>

                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="secondary-footer bg-transparent">
          <div className="container mx-auto">
            <div className="copyright">
              <div className="text-center py-4 copyrightTextForMobile">
                Copyright 2023 Dreamz Software Solutions Pvt. Ltd.
              </div>
              
            </div>
            
          </div>
          
        </div>
        <div className='hidden lg:flex lg:justify-end lg:-mt-7 lg:me-11'>
                <a href="#" className="flex bg-black text-white w-36 p-2 text-xl rounded-xl -mt-5" onClick={scrollToTop}>Back to Top &#8593;</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

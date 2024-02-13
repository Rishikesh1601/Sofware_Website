import React from 'react';
import './contactus.css'

const Privacy = () => {
  return (
    <>
    <div className="container mt-32 mx-auto px-2 md:px-4 contactusedit">

      <section className="">

        <div className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-12 px-6 text-5xl font-bold">
            Privacy Policy
            </h2>
          </div>
        </div>
    </section>
    </div>
        <div className='pr flex flex-col items-start justify-start ms-11 me-11'>
            <div className='faq-pr flex flex-col'>
            <div className=''>
                <h2 className='text-4xl text-gray-600 heading-pr'>Consent</h2>
            </div>
            <div className=''>
                <h3 className='text-xl ms-2 text-gray-500 content-pr'>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</h3>
            </div>
            </div>
            <br></br>
            <div className='faq-pr'>
            <div className=''>
                <h2 className='text-4xl text-gray-600 heading-pr'>Information we collect</h2>
            </div>
            <div className=''>
                <h3 className='text-xl text-gray-500 text-justify content-pr'>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
<br></br>
If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
<br></br>
When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</h3>
            </div>
            </div>
            <br></br>
            <div className='faq-pr'>
            <div className=''>
                <h2 className='text-4xl text-gray-600 heading-pr'>How we use your information</h2>
            </div>
            <div className=''>
                <h3 className='text-2xl text-gray-500 content-pr'>We use the information we collect in various ways, including to:</h3>
                <ul className='list-disc text-xl text-gray-500 ms-11 content-pr'>
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                </ul>
            </div>
            </div>
            <br></br>
            <div className='faq-pr'>
            <div className=''>
                <h2 className='text-4xl text-gray-600 heading-pr'>Log Files</h2>
            </div>
            <div className=''>
                <h3 className='text-xl text-gray-500 text-justify content-pr'>Dreamz follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.</h3>
            </div>
            </div>
            <br></br>
            <div className='faq-pr'>
            <div className=''>
                <h2 className='text-4xl text-gray-600 heading-pr'>Cookies and Web Beacons</h2>
            </div>
            <div className=''>
                <h3 className='text-xl text-gray-500 text-justify content-pr'>Like any other website, Dreamz uses “cookies”. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.</h3>
            </div>
            </div>
        </div>
</>
  );
};

export default Privacy;

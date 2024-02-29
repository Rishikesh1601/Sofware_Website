// CardCaller.js
import React from 'react';
import SDLCCardTemplate from './SDLC.card';
import './sdlc.css';
const OpenCartFeatures = () => {
  const cardData = [
    { number: '01', title: 'Planning', paragraph: "Identifying the goals and objectives of the website, researching the target audience, and selecting the type of content management system (CMS) to use. Tell us about your requirements for building personal websites, business websites, or blogs. Our Opencart developers create cutting-edge Opencart websites according to your needs." },
    { number: '02', title: 'Design', paragraph: "Creating a website design that is aesthetically pleasing and easily navigable. Be it any type of business domain and size, our custom Opencart development services offer custom Opencart websites that fit your unique business requirements. Our decades of experience in website development enable us to leverage features of Opencart such as flexibility" },
    { number: '03', title: 'Development', paragraph: "Setting up the Opencart site, installing themes and plugins, and customizing the code to meet the client’s needs. Opencart development involves creating custom themes and plugins for the platform, as well as customizing existing themes and plugins to meet specific needs."},
    { number: '04', title: 'Testing', paragraph: "Opencart website testing involves testing the functionality, design, layout, and user experience of a Opencart website. Testing should be done by a knowledgeable professional to make sure that the website meets the user’s needs and expectations. Layout testing to make sure the website’s structure is easy to navigate and understand. Performance testing to make sure the website is loading quickly and efficiently." },
    { number: '05', title: 'Deployment', paragraph: "Before making any changes to your Opencart site, it is important to backup all the site files and the database. This is to ensure that you have a backup of the original files in case something goes wrong during the deployment process. Optimizing your images is important for reducing the load time of your website. " },
    { number: '06', title: 'Maintenance', paragraph: "Opencart website maintenance involves a variety of tasks, such as regularly updating plugins and themes, creating backups, monitoring website performance, and more. This maintenance is important to ensure that your website is secure, optimized, and running smoothly. It also helps you avoid any potential issues and ensure your website is up-to-date with the latest security patches." },
  ];

  return (
    <div>
        <div class="theme-title mb-4 ms-5">
            <h6 className='aboutusTitle'>OpenCart Development Analysis</h6>
        </div>
    <div className="sdlc-card-container">
      {cardData.map((card, index) => (
        <SDLCCardTemplate key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

export default OpenCartFeatures;

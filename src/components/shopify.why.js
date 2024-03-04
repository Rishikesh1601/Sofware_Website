import React from 'react'
// import { ReactComponent as AboutUsPng } from '../assets/aboutuspage.svg';
import { ReactComponent as WhyCustomSoftwareji } from '../assets/whyshopify.svg';
import './card.css'
const WhyShopify = () => {
  return (

        <section className='mx-5 aboutusComponent'>
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 md:w-full">
                <WhyCustomSoftwareji className='w-full h-96'/>
            </div>
            <div class="lg:w-1/2 md:w-full mt-6 lg:mt-0 lg:pl-10 -ms-12 whyWebDevText">
                <div class="theme-title mb-4">
                <h6 className='aboutusTitle'>Why Shopify</h6>
                </div>
                <p class="mb-5 text-lg text-gray-400 paraAboutus text-justify">Shopify stands out as one of the top eCommerce platforms for several compelling reasons. Its user-friendly interface, robust features, and extensive integrations with other services make it a popular choice among businesses. Additionally, Shopify offers excellent customer support, secure payment processing, and reliable hosting services, ensuring a seamless online shopping experience for both merchants and customers. Moreover, Shopify Development Company provides access to a vast array of themes and apps to customize your store's appearance and functionality according to your specific requirements. Lastly, Shopify's flexible pricing plans cater to businesses of all sizes and budgets, making it accessible to startups and established enterprises alike.</p>
            </div>
            </div>
        </div>
        </section>

  )
}

export default WhyShopify
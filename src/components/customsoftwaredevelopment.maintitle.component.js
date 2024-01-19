import React from "react";
import './navbar.css'
// import { ReactComponent as Heropng } from '../assets/heropage.svg';
import {ReactComponent as CustomSoftwareTitle} from '../assets/CustomSoftwareTitle.svg'
const CustomSoftwareDevelopmentMainTitle = () => {
    
    return(
        <>
            <section class="banner-2 grediant-bg2">
            <div class="container">
                <div class="flex flex-col lg:flex-row">
                <div class="lg:w-6/12 order-lg-1">
                    <div class="banner-img p-0">
                    <div class="rounded box-shadow relative ">
                        <CustomSoftwareTitle className="w-96 h-auto heropngEdit"/>
                    </div>
                    </div>
                </div>
                <div class="lg:w-6/12 mt-36">
                    <h1 class="mb-4 text-black text-5xl animate__animated animate__shakeX animate__slow font-bold text-center"><span>Custom Software Development</span></h1>
                    <p class="text-gray-600 font-bold text-justify ms-11 text-lg mb-5 animate__animated animate__zoomIn animate__slow">At Dreamz, we specialize in custom software development. We have a talented and experienced team of developers who are well–versed in a variety of programming languages, including Python, Java, JavaScript, and C#. Our team of developers will work closely with you to create a custom–made software solution that meets your unique business needs.</p>
                </div>
                </div>
            </div>
            <div class="wave-shape">
                <svg width="100%" height="150px" fill="none">
                <path fill="#ffffff">
                    <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="
                    M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
                    M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;
                    M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
                    M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"></animate>
                </path>
                </svg>
            </div>
            </section>

        </>
    )
}

export default CustomSoftwareDevelopmentMainTitle;
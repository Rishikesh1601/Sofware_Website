import React, {useState,useEffect} from "react";
import './navbar.css'
import { ReactComponent as Heropng } from '../assets/heropage.svg';
const MainTitle = () => {
    const [dynamicText, setDynamicText] = useState('Web Development');
  const textArray = ['Enterprise Mobility', 'Software Support', 'API Integration'];
  let currentIndex = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDynamicText(textArray[currentIndex]);
      currentIndex = (currentIndex + 1) % textArray.length;
    }, 2000);

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);
    return(
        <>
            <section class="banner-2 grediant-bg2">
            <div class="container">
                <div class="flex flex-col lg:flex-row">
                <div class="lg:w-6/12 order-lg-1">
                    <div class="banner-img p-0">
                    <div class="rounded box-shadow relative">
                        <Heropng className="w-96 h-auto heropngEdit"/>
                    </div>
                    </div>
                </div>
                <div class="lg:w-6/12 mt-36">
                    <h1 class="mb-4 text-black text-7xl animate__animated animate__shakeX animate__slow font-bold text-center">Seamless <br></br><span>{dynamicText}</span><br></br> Solutions </h1>
                    <p class="text-gray-600 font-bold text-center text-lg mb-5 animate__animated animate__zoomIn animate__slow">A global IT consulting & software solutions provider</p>
                    <div class="animate__animated animate__fadeInUp animate__slow flex justify-center items-center mt-12">
                    <a class="themeht-btn" href="/career">Get Started</a>
                    <a class="themeht-btn dark-btn ms-3" href="/contactus">Contact Us</a>
                    </div>
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

export default MainTitle;
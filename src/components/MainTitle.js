import React, { useState, useEffect } from "react";
import './navbar.css';
import { ReactComponent as Heropng } from '../assets/Images/main svg.svg';
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/20/solid";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";
const MainTitle = () => {
    // const [dynamicTextIndex, setDynamicTextIndex] = useState(0);
    // const textArray = ['Custom Software', 'Mobile App', 'Web Application', 'IT Ops', 'Blockchain', 'AI/ML'];

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setDynamicTextIndex((dynamicTextIndex + 1) % textArray.length);
    //     }, 2000);

    //     return () => clearInterval(intervalId);
    // }, [dynamicTextIndex, textArray]);

    return (
        <>
            <section className="banner-2 grediant-bg2" id="mainTitle">
                <div className="">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-6/12 order-lg-1">
                            <div className="banner-img p-0">
                                <div className="rounded box-shadow relative">
                                    <Heropng className="w-96 h-auto heropngEdit"/>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-6/12 mt-36">
                            <h1 className="mb-4 text-black text-6xl font-bold text-start homePageMainText textMainTitl mobTextEditMainTitle">
                                Unlock Your Business Potential with Dreamz <br />
                                <TypeAnimation
                                    sequence={[
                                        'Custom Software',
                                        1000, // Waits 1s
                                        'Mobile App',
                                        1000, // Waits 1s
                                        'Web Application',
                                        1000, // Waits 1s
                                        'IT Ops',
                                        1000, // Waits 1s
                                        'Blockchain',
                                        1000, // Waits 1s
                                        'AI/ML',
                                        1000, // Waits 1s
                                    ]}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={Infinity}
                                    style={{ fontSize: '2em' }}
                                />
                            </h1>
                            <p className="text-gray-600 font-bold text-start text-lg mb-5 homePageMainText">
                                A global IT consulting & software solutions provider
                            </p>
                            <div className="flex justify-start items-center mt-12 homePageMainText">
                            <a className="themeht-btn" href="whatsapp://send?phone=+919960685666">WhatsApp Us</a>
                                <a className="themeht-btn dark-btn ms-3" href="mailto:info@dreamztechnology.com">Email Us</a>
                            </div>
                            <div className="scroll-down"></div>
                        </div>
                    </div>
                </div>
                <div className="wave-shape">
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
    );
};

export default MainTitle;

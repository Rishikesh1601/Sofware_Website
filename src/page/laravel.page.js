import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import LaravelMainTitle from "../components/laravel.maintitle";
import WhyLaravel from "../components/laravel.why";
import LaravelCapabilities from "../components/laravel.capabilities";
import LaravelFeatures from "../components/laravel.features";

const LaravelPage = () => {
    return(
        <>
        <Navbar />
        <LaravelMainTitle />
        <br></br>
        <WhyLaravel />
        <br></br>
        <br></br>
        <LaravelCapabilities />
        <br></br>
        <br></br>
        <LaravelFeatures />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default LaravelPage
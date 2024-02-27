import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import WoocommerceMainTitle from "../components/woocommerce.maintitle";
import WhyWoocommerce from "../components/woocommerce.why";
import WooCommerceCapabilities from "../components/woocommerce.capabilities";
import WooCommerceFeature from "../components/woocommerce.features";

const WooCommercePage = () => {
    return (
        <>
        <Navbar />
        <WoocommerceMainTitle />
        <br></br>
        <WhyWoocommerce />
        <br></br>
        <br></br>
        <WooCommerceCapabilities />
        <br></br>
        <br></br>
        <WooCommerceFeature />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default WooCommercePage
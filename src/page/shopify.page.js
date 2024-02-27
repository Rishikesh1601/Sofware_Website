import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import ShopifyMainTitle from "../components/shopify.maintitle";
import WhyShopify from "../components/shopify.why";
import ShopifyCapabilities from "../components/shopify.capabilities";
import ShopifyFeature from "../components/shopify.feature";

const ShopifyPage = () => {
    return(
        <>
        <Navbar />
        <ShopifyMainTitle />
        <br></br>
        <WhyShopify />
        <br></br>
        <br></br>
        <ShopifyCapabilities />
        <br></br>
        <br></br>
        <ShopifyFeature />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default ShopifyPage
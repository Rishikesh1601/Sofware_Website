import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.component";
import TrustedClientsMainTitle from "../components/trustedclients.mainTitle.component";
import WhyTrustedClients from "../components/whytrustedclients";
import ClientGallery from "../components/clientgallery.component";

const TrustedClientsPage = () => {
    return (
        <>
        <Navbar />
        <TrustedClientsMainTitle />
        <br></br>
        <WhyTrustedClients />
        <br></br>
        <br></br>
        <ClientGallery />
        <br></br>
        <Footer />
        </>
    )
}

export default TrustedClientsPage
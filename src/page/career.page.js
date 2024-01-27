import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.component";
import CareerMainTitle from "../components/career.mainTitle.component";
import CareerComponent from "../components/career.component";

const CareerPage = () => {
    return(
        <>
        <Navbar />
        <CareerMainTitle />
        <CareerComponent />
        <br></br>
        <br></br>
        <Footer />
        </>
    )
}

export default CareerPage
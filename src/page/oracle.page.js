import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.component";
import CounterComponent from "../components/Counter.component";
import WhyMongoDB from "../components/mongodb.why";
import OracleMainTitle from "../components/oracle.maintitle";
import OracleFeature from "../components/oracle.features";

const OraclePage = () => {
    return (
        <>
        <Navbar />
        <OracleMainTitle />
        <br></br>
        <WhyMongoDB />
        <br></br>
        <br></br>
        <OracleFeature />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default OraclePage
import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import Footer from "../components/Footer.component";
import MSsqlMainTitle from "../components/mssql.maintitle";
import WhyMSsql from "../components/mssql.why";
import MSsqlFeatures from "../components/mssql.features";

const MSsqlPage = () => {
    return (
        <>
        <Navbar />
        <MSsqlMainTitle />
        <br></br>
        <WhyMSsql />
        <br></br>
        <br></br>
        <MSsqlFeatures />
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default MSsqlPage;
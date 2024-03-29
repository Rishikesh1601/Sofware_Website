import React from "react";
import Navbar from "../components/Navbar";
import CounterComponent from "../components/Counter.component";
import OurProjectComponent from "../components/OurProject.component";
import Footer from "../components/Footer.component";
import BlockChainMainTitle from "../components/blockchain.mainTitle.component";
import WhyBlockChain from "../components/whyblockchain";
import BlockChainCapabilities from "../components/blockchain.capabilities.component";
import BDLC from "../components/BDLC";

const BlockChainPage = () => {
    return (
        <>
        <Navbar />
        <BlockChainMainTitle />
        <br></br>
        <WhyBlockChain />
        <br></br>
        <br></br>
        <BlockChainCapabilities />
        <br></br>
        <br></br>
        <BDLC />
        {/* <br></br>
        <br></br>
        <OurProjectComponent /> */}
        <br></br>
        <br></br>
        <CounterComponent />
        <br></br>
        <Footer />
        </>
    )
}

export default BlockChainPage;
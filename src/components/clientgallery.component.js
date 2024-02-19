import React from "react";
import TataAutoCorp from "../assets/clients/Tata-AutoCorp.jpg";
import JohnDee from "../assets/clients/John-Dee.jpg";
import Cian from "../assets/clients/CIAN.jpg";
import Buldhana from "../assets/clients/Buldhana-Police.jpg";
import Vivo from "../assets/clients/Vivo.jpg";
import Indian from "../assets/clients/Indian-Ordance.jpg";
import Soft from "../assets/clients/Soft-tech.jpg";
import GT from "../assets/clients/Ghatge-Transport.jpg";
import Alpha from "../assets/clients/Alpha-Exim.jpg";
import Max from "../assets/clients/Max-Heal.jpg";
import Amcl from "../assets/clients/Amclin.jpg";
import ABMYS from "../assets/clients/ABMYS.jpg";
import Agarwal from "../assets/clients/Agarwal-Classes.jpg";
import Suzuki from "../assets/clients/Midas-Suzuki.jpg";
import RH from "../assets/clients/Renuka-Hospital.jpg";
import Vine from "../assets/clients/Vineyard.jpg";
import Servo from "../assets/clients/servomax.jpg";
import Softaid from "../assets/clients/softaid.jpg";
import Enrich from "../assets/clients/Enrich-tek.jpg";
import Abhinav from "../assets/clients/abhinav-career-scope.jpg";
import Cab from "../assets/clients/cabtab.jpg";
import Cerb from "../assets/clients/cerbral-palsy.jpg";
import CMs from "../assets/clients/CMS-Mechatronics.jpg";
import Maydon from "../assets/clients/Maydon.jpg";
import Dwi from "../assets/clients/dwivsonchem.jpg";
import Kash from "../assets/clients/Kashyap.jpg";
import Kharidee from "../assets/clients/Kharidee.jpg";
import Meral from "../assets/clients/Merakileadership.jpg";
import Purna from "../assets/clients/Purna-Agro.jpg";
import Sai from "../assets/clients/Sai-Spices.jpg";
import Lean from "../assets/clients/Leanext.jpg";
import PT from "../assets/clients/PT-Premier.jpg";
import Appoin from "../assets/clients/Appointme.jpg";
import Bhagya from "../assets/clients/Bhagya-Laxmi.jpg";
import Bue from "../assets/clients/Bue-Designer.jpg";
import DF from "../assets/clients/Dhyandeep-Foundation.jpg";
import GI from "../assets/clients/Green-Invetion.jpg";
import Heat from "../assets/clients/Heat-Gen.jpg";
import Humsafar from "../assets/clients/Humsafar-Travellers.jpg";
import Icon from "../assets/clients/Icon-Hospital.jpg";
import Dhruv from "../assets/clients/Dhruv-Global.jpg";
import Malpani from "../assets/clients/Malpani-Group.jpg";
import More from "../assets/clients/Much-More.jpg";
import Narmada from "../assets/clients/Narmada-Travellers.jpg";
import Noor from "../assets/clients/Noor-Travellers.jpg";
import Prame from "../assets/clients/Prame.jpg";
import Priti from "../assets/clients/Priti-Enterprises.jpg";
import Renn from "../assets/clients/Rennoves.jpg";
import Sterling from "../assets/clients/Sterling.jpg";
import Sakal from "../assets/clients/Shayadri.jpg";
import Vishwa from "../assets/clients/Vishwa-Travellers.jpg";
import RSS from "../assets/clients/RSS-Jan-Kalyan.jpg";
import CFOSB from "../assets/clients/Cfosb.jpg";
import SFC from "../assets/clients/SFC.jpg";
import Soni from "../assets/clients/Sonione-aviation.jpg";


const clientImages = [
    TataAutoCorp,
    JohnDee,
    Cian,
    Buldhana,
    Vivo,
    Indian,
    Soft,
    GT,
    Alpha,
    Max,
    Amcl,
    ABMYS,
    Agarwal,
    Suzuki,
    RH,
    Vine,
    Servo,
    Softaid,
    Enrich,
    Abhinav,
    Cab,
    Cerb,
    CMs,
    Maydon,
    Dwi,
    Kash,
    Kharidee,
    Meral,
    Purna,
    Sai,
    Lean,
    PT,
    Appoin,
    Bhagya,
    Bue,
    DF,
    GI,
    Heat,
    Humsafar,
    Icon,
    Dhruv,
    Malpani,
    More,
    Narmada,
    Noor,
    Prame,
    Priti,
    Renn,
    Sterling,
    Sakal,
    Vishwa,
    RSS,
    CFOSB,
    SFC,
    Soni
    
  ];


const ClientGallery = () => {
    return (
        <>
        <div className="flex items-center justify-center">
        <div class="theme-title mb-4 text-center">
            <h6 className='aboutusTitle'>Our Clients</h6>
        </div> 
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:ms-4 me-4">
        {clientImages.map((clientImage, index) => (
          <div key={index}>
            <img className="h-auto max-w-full rounded-lg border" src={clientImage} alt="" />
          </div>
        ))}
      </div>
        </>
    )
}

export default ClientGallery;

import Hero from "../components/StealthComponents/Hero";
import AboutSection from "../components/StealthComponents/AboutSection";
import Why from "../components/StealthComponents/Why";
import PartnerForm from "../components/StealthComponents/PartnerForm";
import Services from "../components/StealthComponents/Services";
import Financials from '../components/StealthComponents/Financials';
import ReadyForHunt from '../components/StealthComponents/ReadyForHunt';
import Testimonials from '../components/StealthComponents/Testimonials'

//bg-gradient-to-r from-[#042f4b] via-[#0e4c74] to-[#1b76b3]
//
export default function HomeAttack({ toggleMode }) {
    return (
        <div className="bg-gradient-to-b from-[#0b223f] to-[#06263f] text-white">
          
            <Hero />
            <AboutSection />
            <Why />
            <PartnerForm/>
            <Services/>
            <Financials/>
            <ReadyForHunt/>
            <Testimonials/>
           
        </div>
    );
}

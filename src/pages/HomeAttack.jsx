import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Why from "../components/Why";


export default function HomeAttack() {
    return (
        <div className="bg-black text-white">
            <Hero />
            <AboutSection />
            <Why />
        </div>
    );
}

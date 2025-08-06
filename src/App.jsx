import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeStealth from "./pages/HomeStealth";
import HomeAttack from "./pages/HomeAttack";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import Career from "./pages/Career";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import Automation from "./pages/services/Automation";
import B2B from "./pages/services/B2B";
import Blog from "./pages/services/Blog";
import CommunityEngagement from "./pages/services/CommunityEngagement";
import CommunityManagement from "./pages/services/CommunityManagement";
import ContentCreation from "./pages/services/ContentCreation";
import CopyWriting from "./pages/services/CopyWriting";
import Ecommerce from "./pages/services/Ecommerce";
import EmailCampaigns from "./pages/services/EmailCampaigns"
import EmailMarketing from "./pages/services/EmailMarketing";
import FacebookMarketing from "./pages/services/FacebookMarketing";
import Feedback from "./pages/services/Feedback";
import InstaMarketing from "./pages/services/InstaMarketing";
import OnlineEngagement from "./pages/services/OnlineEngagement";

export default function App() {
  const [isStealth, setIsStealth] = useState(true);

  const toggleMode = () => {
    setIsStealth((prev) => !prev);
  };

  return (
    <Router>
      <Navbar toggleMode={toggleMode} isStealth={isStealth} />
      <Routes>
        <Route path="/" element={isStealth ? <HomeStealth /> : <HomeAttack />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services/automation" element={<Automation />} />
        <Route path="/services/b2b" element={<B2B />} />
        <Route path="/services/blog" element={<Blog />} />
        <Route path="/services/communityengagement" element={<CommunityEngagement />} />
        <Route path="/services/communitymanagement" element={<CommunityManagement />} />
        <Route path="/services/contentcreation" element={<ContentCreation />} />
        <Route path="/services/copywriting" element={<CopyWriting />} />
        <Route path="/services/ecommerce" element={<Ecommerce />} />
        <Route path="/services/emailcampaign" element={<EmailCampaigns />} />
        <Route path="/services/emailmarketing" element={<EmailMarketing />} />
        <Route path="/services/facebookmarketing" element={<FacebookMarketing />} />
        <Route path="/services/feedback" element={<Feedback />} />
        <Route path="/services/instamarketing" element={<InstaMarketing />} />
        <Route path="/services/onlineengagement" element={<OnlineEngagement />} />
      </Routes>
      <Footer />
    </Router>
  );
}

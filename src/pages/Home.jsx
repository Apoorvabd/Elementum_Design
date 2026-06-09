import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import OfferSection from "../components/OfferSection";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import meating1 from "../assets/meating1.jpg";
import meating2 from "../assets/meating2.png";
import Progress from "../components/Progress";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
<InfoSection
  badge="About Us"
  title="Tomorrow should be better than today"
  description="We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe.."
  buttonText="Learn More"
  image={meating1}
 />      
 <Progress  image={meating2}/>

 <OfferSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
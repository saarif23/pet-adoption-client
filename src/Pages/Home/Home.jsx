import { Helmet } from "react-helmet-async";
import AboutUs from "../../Components/Home/AboutUsSection/AboutUs";
import CallToAction from "../../Components/Home/CallToAction/CallToAction";
import Category from "../../Components/Home/Category/Category";
import Footer from "../../Components/Home/Footer/Footer";
import Slider from "../../Components/Home/Header/Slider";
import Team from "../../Components/Home/OurTeam/Team";
import PhotoGalary from "../../Components/Home/PhotoGalary/PhotoGalary";
import Review from "../../Components/Home/Review/Review";
import AdoptMessage from "../../Components/Home/AboutUsSection/AdoptMessage";

const Home = () => {
    return (
        <div className="mt-16">
            <Slider />
            <Helmet>
                <title>Animal Care | Home</title>
            </Helmet>
            <Category />
            <CallToAction />
            <AdoptMessage/>
            <AboutUs />
            <PhotoGalary />
            <Team />
            <Review />
            <Footer />
        </div>
    );
};

export default Home;
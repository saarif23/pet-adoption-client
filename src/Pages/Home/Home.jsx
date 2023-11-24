import AboutUs from "../../Components/Home/AboutUsSection/AboutUs";
import CallToAction from "../../Components/Home/CallToAction/CallToAction";
import Category from "../../Components/Home/Category/Category";
import Slider from "../../Components/Home/Header/Slider";
import Team from "../../Components/Home/OurTeam/Team";
import PhotoGalary from "../../Components/Home/PhotoGalary/PhotoGalary";
import Review from "../../Components/Home/Review/Review";

const Home = () => {
    return (
        <div>
            <Slider />
            <Category />
            <CallToAction />
            <AboutUs />
            <PhotoGalary/>
            <Team/>
            <Review/>
        </div>
    );
};

export default Home;
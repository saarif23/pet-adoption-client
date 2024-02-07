import { FaLocationDot } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SignlePet = ({ pet }) => {
  return (
    <div className="relative pb-44">
      <div
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="2000"
        className="h-[350px] "
      >
        <img
          className="h-full w-full rounded-xl"
          src={pet.pet_image}
          alt="pet_image"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="2000"
        className="h-[230px] w-full mx-auto absolute bottom-0"
      >
        <div className="bg-white text-black  shadow-xl rounded-lg p-5 mx-5  space-y-2 ">
          <h3 className="text-3xl font-semibold">{pet.pet_name}</h3>
          <p className="text-[#279c46] font-bold">{pet.pet_category}</p>
          <hr className="" />
          <div className="flex items-center gap-2">
            <CiCalendarDate />
            <p className="min-h-fit">Age : {pet.pet_age} years</p>
          </div>
          <div className="flex items-baseline gap-2 pb-2">
            <FaLocationDot />
            <p> {pet.pet_location}</p>
          </div>
          <Link to={`/pets/${pet._id}`}>
            <button className="bg-[#279c46]  rounded cursor-pointer hover:animate-pulse py-2 px-5 w-full text-white font-bold text-lg">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
SignlePet.propTypes = {
  pet: PropTypes.object.isRequired,
};
export default SignlePet;

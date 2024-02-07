import { NavLink } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";
import Container from "../../Shared/Container";
import Logo from "../../../../public/CallToAction2.json";
import Lottie from "lottie-react";
const Navbar = () => {
  return (
    <div className="bg-white border-b border-[#279c46]">
      <Container>
        <div className="flex justify-between items-center ">
          <div className="">
            {/* <img
              className="w-16  "
              src="https://raw.githubusercontent.com/saarif23/pet-adoption-client/d123b768723afce3ec2c5adee38da4932592c41a/src/assets/logo_animal_care_agency.png"
              alt=""
            /> */}
            <Lottie animationData={Logo} style={{ width: 120, height: 80 }} />
          </div>
          <div className="lg:flex justify-center  items-center gap-10">
            <div>
              <ul className="hidden  lg:flex gap-5">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#279c46] font-bold border border-[#279c46] rounded-full  px-5 py-2"
                        : "text-black font-medium"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/petListing"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#279c46] font-bold border border-[#279c46] rounded-full  px-5 py-2"
                        : "text-[#000000] font-medium"
                    }
                  >
                    Pet Listing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/donationCampaigns"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#279c46] font-bold border border-[#279c46] rounded-full  px-5 py-2"
                        : "text-black font-medium"
                    }
                  >
                    Donation Campaigns
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className=" max-lg:gap-2 gap-8">
              <MenuDropdown />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

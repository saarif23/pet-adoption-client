import { NavLink } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";
import Container from "../../Shared/Container";
import Logo from "../../../../public/CallToAction2.json";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // eslint-disable-next-line no-unused-vars
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <div
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky
          ? "bg-white/90 shadow border-b border-[#279c46]"
          : "bg-white border-b border-[#279c46]"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center ">
          <div className="">
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

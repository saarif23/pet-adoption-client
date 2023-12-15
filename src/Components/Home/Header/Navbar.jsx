import { NavLink } from 'react-router-dom';
import MenuDropdown from './MenuDropdown';
import Container from '../../Shared/Container';


const Navbar = () => {

    return (

        <div className="bg-fuchsia-400 py-2">
            <Container>
                <div className="flex justify-between items-center ">
                    <div className="">
                        <img className="w-16  " src="https://raw.githubusercontent.com/saarif23/pet-adoption-client/d123b768723afce3ec2c5adee38da4932592c41a/src/assets/logo_animal_care_agency.png" alt="" />
                    </div>
                    <div className="lg:flex justify-center  items-center gap-10">
                        <div>
                            <ul className='hidden  lg:flex gap-5'>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-600 font-semibold shadow-xl px-5 py-3" : "text-black font-medium"
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/petListing"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-600 font-semibold shadow-xl px-5 py-3" : "text-[#000000] font-medium"
                                        }
                                    >
                                        Pet Listing
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/donationCampaigns"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-600 font-semibold shadow-xl px-5 py-3" : "text-black font-medium"
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
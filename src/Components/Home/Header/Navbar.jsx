import { NavLink } from 'react-router-dom';
import MenuDropdown from './MenuDropdown';
import Container from '../../Shared/Container';


const Navbar = () => {

    return (

        <div className="bg-fuchsia-400 ">
            <Container>
                <div className="flex justify-between items-center ">
                    <div className="">
                        <img className="w-24 " src="https://i.ibb.co/zRz64bF/LOGO-removebg-preview-1.png" alt="" />
                    </div>
                    <div className="lg:flex justify-center  items-center gap-10">
                        <div>
                            <ul className='hidden  lg:flex gap-5'>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-600 font-semibold shadow-xl px-5 py-3" : ""
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/petListing"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-600 font-semibold shadow-xl px-5 py-3" : ""
                                        }
                                    >
                                        Pet Listing
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/donationCampaigns"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-600 font-semibold shadow-xl px-5 py-3" : ""
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
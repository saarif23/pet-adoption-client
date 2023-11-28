import { NavLink } from 'react-router-dom';

import MenuDropdown from './MenuDropdown';

const Navbar = () => {
    const navLinks = <>
        <li ><NavLink to="/">Home</NavLink></li>
        <li ><NavLink to="/petListing">Pet Listing</NavLink></li>
        <li ><NavLink to="/donationCampaigns">Donation Campaigns</NavLink></li>
    </>
    return (
        <>
            <div className="shadow-xl  bg-fuchsia-400 text-black">
                <div className="navbar">
                    <div className="navbar-start">

                        <img className="w-24 " src="https://i.ibb.co/zRz64bF/LOGO-removebg-preview-1.png" alt="" />

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 ">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end max-lg:gap-2 gap-8">
                        <MenuDropdown />



                        {/* {
                            user ?
                                <>  <h4 className=" font-medium">{user.displayName}</h4>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="m-1">
                                            <div ><img className="rounded-full w-12" src={user.photoURL} alt="userPhoto" /></div>
                                        </label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-52  text-left text-black">

                                            <li> <button onClick={handleLogout}>Logout</button> </li>
                                        </ul>
                                    </div> </>
                                : <Link to="/login"><button className="btn btn-sm btn-outline">Sign In</button></Link>
                        }
 */}

                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
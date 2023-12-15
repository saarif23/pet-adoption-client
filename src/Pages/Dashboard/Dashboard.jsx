import { FaDonate, FaHome, FaList, FaUsers, } from "react-icons/fa";
import { FaCodePullRequest, } from "react-icons/fa6";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FcDonate } from "react-icons/fc";
import { MdPayment, MdPets, MdCreateNewFolder } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import Container from "../../Components/Shared/Container";
import Navbar from "../../Components/Home/Header/Navbar";
import useAdmin from "../../Hooks/useAdmin";
import { AiOutlineMenuUnfold, AiTwotoneCloseSquare } from "react-icons/ai";
import { useState } from "react";



const Dashboard = () => {
    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className=" text-black bg-slate-100">
            <Navbar />
            <Container>
                <div >

                    <div className="lg:hidden">
                        <div onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <div className='flex flex-row items-center gap-3 p-3 justify-center rounded-md  w-44 mx-auto mb-10 shadow-xl text-fuchsia-600 font-bold mt-5  '>
                                <AiTwotoneCloseSquare size={36} />
                            </div> : <div className='flex flex-row items-center gap-3 p-3 justify-center rounded-md border-2 w-44 mx-auto mb-10 shadow-xl border-fuchsia-500 text-fuchsia-600 font-bold mt-5  '>
                                DASHBOARD <AiOutlineMenuUnfold size={24} />
                            </div>}
                        </div>
                        <div className=' overflow-hidden '>
                            {isOpen &&
                                <ul className="menu p-5 space-y-3">

                                    {isAdmin ?
                                        //  ----------------------------admin -------------------------- //
                                        <>
                                            <li>
                                                <NavLink to="/dashboard/adminHome">
                                                    <FaHome></FaHome>
                                                    Admin Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/dashboard/users">
                                                    <FaUsers />
                                                    Users
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/dashboard/allPets">
                                                    <FaList />
                                                    All Pets
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/dashboard/allDonations">
                                                    <FaDonate />
                                                    All Donations
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/dashboard/addPet">
                                                    <MdPets />
                                                    Add Pet
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/dashboard/myAddedPets">
                                                    <MdPayment></MdPayment>
                                                    My Added Pets
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/dashboard/adoptionReq">
                                                    <FaCodePullRequest />
                                                    Adoption Request
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/dashboard/createDonationCampaign">
                                                    <MdCreateNewFolder />
                                                    Create Donation Campaign
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/dashboard/myDonationCampaign">
                                                    <BiSolidDonateHeart />
                                                    My Donation Campaigns
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/dashboard/myDonations">
                                                    <FaDonate />
                                                    My Donations
                                                </NavLink>
                                            </li>

                                        </>
                                        :

                                        //  ----------------------------user -------------------------- //
                                        <>

                                            <li>
                                                <NavLink to="/dashboard/userHome">
                                                    <FaHome></FaHome>
                                                    User Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/dashboard/addPet">
                                                    <MdPets />
                                                    Add Pet
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/dashboard/myAddedPets">
                                                    <MdPayment></MdPayment>
                                                    My Added Pets
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/dashboard/adoptionReq">
                                                    <FaCodePullRequest />
                                                    Adoption Request
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/dashboard/createDonationCampaign">
                                                    <MdCreateNewFolder />
                                                    Create Donation Campaign
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/dashboard/myDonationCampaign">
                                                    <BiSolidDonateHeart />
                                                    My Donation Campaigns
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/dashboard/myDonations">
                                                    <FaDonate />
                                                    My Donations
                                                </NavLink>
                                            </li>
                                        </>}

                                    <hr />
                                    <li>
                                        <NavLink to="/">
                                            <FaHome></FaHome>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/petListing">
                                            <FaList></FaList>
                                            Pet Listing
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/donationCampaigns">
                                            <FcDonate />
                                            Donation Campaigns
                                        </NavLink>
                                    </li>


                                </ul>
                            }


                        </div>
                    </div>
                </div>

                <div className="flex ">
                    {/* dashboard side bar  */}
                    <div className="border bg-slate-100 shadow-md shadow-black mr-2 max-lg:hidden font-bold md:min-h-screen text-sm ">
                        <ul className="menu p-5 space-y-3">

                            {isAdmin ?
                                //  ----------------------------admin -------------------------- //
                                <>
                                    <li>
                                        <NavLink to="/dashboard/adminHome">
                                            <FaHome></FaHome>
                                            Admin Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/users">
                                            <FaUsers />
                                            Users
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/allPets">
                                            <FaList />
                                            All Pets
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/allDonations">
                                            <FaDonate />
                                            All Donations
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/addPet">
                                            <MdPets />
                                            Add Pet
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myAddedPets">
                                            <MdPayment></MdPayment>
                                            My Added Pets
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/adoptionReq">
                                            <FaCodePullRequest />
                                            Adoption Request
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/createDonationCampaign">
                                            <MdCreateNewFolder />
                                            Create Donation Campaign
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myDonationCampaign">
                                            <BiSolidDonateHeart />
                                            My Donation Campaigns
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myDonations">
                                            <FaDonate />
                                            My Donations
                                        </NavLink>
                                    </li>

                                </>
                                :

                                //  ----------------------------user -------------------------- //
                                <>

                                    <li>
                                        <NavLink to="/dashboard/userHome">
                                            <FaHome></FaHome>
                                            User Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/addPet">
                                            <MdPets />
                                            Add Pet
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myAddedPets">
                                            <MdPayment></MdPayment>
                                            My Added Pets
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/adoptionReq">
                                            <FaCodePullRequest />
                                            Adoption Request
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/createDonationCampaign">
                                            <MdCreateNewFolder />
                                            Create Donation Campaign
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myDonationCampaign">
                                            <BiSolidDonateHeart />
                                            My Donation Campaigns
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myDonations">
                                            <FaDonate />
                                            My Donations
                                        </NavLink>
                                    </li>
                                </>}

                            <hr />
                            <li>
                                <NavLink to="/">
                                    <FaHome></FaHome>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/petListing">
                                    <FaList></FaList>
                                    Pet Listing
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/donationCampaigns">
                                    <FcDonate />
                                    Donation Campaigns
                                </NavLink>
                            </li>


                        </ul>

                    </div>


                    {/* dashboard Content */}
                    <div className="flex-1 lg:px-10 shadow-md shadow-black lg:my-10 rounded-md bg-neutral-50">
                        <Outlet></Outlet>
                    </div>
                </div>
            </Container >

        </div >
    );
};

export default Dashboard;
import { FaDonate, FaHome, FaList, FaUsers, } from "react-icons/fa";
import { FaCodePullRequest, } from "react-icons/fa6";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FcDonate } from "react-icons/fc";
import { MdPayment, MdPets, MdCreateNewFolder } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import Container from "../../Components/Shared/Container";
import Navbar from "../../Components/Home/Header/Navbar";
import useAdmin from "../../Hooks/useAdmin";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";



const Dashboard = () => {
    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="bg-[#F6F6F6]">
            <Navbar />
            <Container>
                <div >
                    <div className='lg:hidden bg-white  overflow-hidden '>
                        <div onClick={() => setIsOpen(!isOpen)} className='flex flex-row items-center gap-3 p-3 justify-start shadow-xl text-fuchsia-600 font-bold mt-5  '>
                            DASHBOARD
                        </div>

                        {isOpen &&
                            <ul className="menu p-5 space-y-3">

                                {isAdmin ?
                                    //  ----------------------------admin -------------------------- //
                                    <>
                                        <li>
                                            <NavLink to="/">
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
                                            <NavLink to="/">
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

                <div className="flex ">
                    {/* dashboard side bar  */}
                    <div className="bg-gray-400 max-lg:hidden font-bold md:min-h-screen text-sm ">
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
                    <div className="flex-1 lg:pl-10 bg-[#F6F6F6]">
                        <Outlet></Outlet>
                    </div>
                </div>
            </Container >

        </div >
    );
};

export default Dashboard;
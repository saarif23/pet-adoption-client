import { FaBook, FaDonate, FaHome, FaList, FaUsers, } from "react-icons/fa";
import { FaBookBible, FaCalendar, FaCartShopping, FaCodePullRequest, FaShop, } from "react-icons/fa6";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FcDonate } from "react-icons/fc";
import { MdPayment, MdRateReview, MdPets, MdCreateNewFolder } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../Hooks/useAdmin";
import { ImSpoonKnife } from "react-icons/im";
import Container from "../../Components/Shared/Container";
import Navbar from "../../Components/Home/Header/Navbar";
// import useCart from "../Hooks/useCart";


const Dashboard = () => {
    // const [isAdmin] = usedmin();
    // const [cart] = useCart();
    // console.log(isAdmin);
    const isAdmin = true;

    return (
        <div className="bg-[#F6F6F6]">
            <Container>
                <Navbar />
                <div className="flex ">
                    {/* dashboard side bar  */}
                    <div className="bg-[#D1A054] min-h-screen w-[100px] md:w-[250px]">
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
                <div className="flex-1 pl-10 bg-[#F6F6F6]">
                    <Outlet></Outlet>
                </div>
        </div>
            </Container >

        </div >
    );
};

export default Dashboard;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Register/SignUp";
import Login from "../Pages/Login/Login";
import PetListing from "../Pages/PetListing/PetListing";
import PetDetails from "../Pages/PetListing/PetDetails";
import DonationCampaigns from "../Pages/DonationCampaigns/DonationCampaigns";
import DonationDetails from "../Pages/DonationCampaigns/DonationDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserHome from "../Pages/Dashboard/user/UserHome";
import AddPet from "../Pages/Dashboard/user/addPet";

import AdoptionRequest from "../Pages/Dashboard/user/AdoptionRequest";
import CreateDonationCampaign from "../Pages/Dashboard/user/CreateDonationCampaign";
import MyDonationCampaign from "../Pages/Dashboard/user/MyDonationCampaign";
import MyDonations from "../Pages/Dashboard/user/MyDonations";
import AdminHome from "../Pages/Dashboard/admin/AdminHome";
import Users from "../Pages/Dashboard/admin/Users";
import AllPets from "../Pages/Dashboard/admin/AllPets";
import AllDonations from "../Pages/Dashboard/admin/AllDonations";
import MyAddedPets from "../Pages/Dashboard/user/MyAddedPet";

const Routes = createBrowserRouter([

    //|||||||||||||| Main Layouts ----------------------------------------||||||||||||||
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/petListing',
                element: <PetListing />
            },
            {
                path: '/donationCampaigns',
                element: <DonationCampaigns />
            }
        ]
    },

    //|||||||||||||| Dashboard ----------------------------------------||||||||||||||
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [

            //|||||||||||||| user route----------------------------------------||||||||||||||
            {
                path: "userHome",
                element: <UserHome></UserHome>
            },
            {
                path: "addPet",
                element: <AddPet />
            },
            {
                path: "myAddedPets",
                element: <MyAddedPets />
            },
            {
                path: "adoptionReq",
                element: <AdoptionRequest />
            },
            {
                path: "createDonationCampaign",
                element: <CreateDonationCampaign />
            },
            {
                path: "myDonationCampaign",
                element: <MyDonationCampaign />
            },
            {
                path: "myDonations",
                element: <MyDonations />
            },



            //|||||||||||||| Admin route----------------------------------------||||||||||||||
            {
                path: "adminHome",
                element: <AdminHome />,
            },
            {
                path: "users",
                element: <Users />
            },
            {
                path: "allPets",
                element: <AllPets />
            },
            {
                path: "allDonations",
                element: <AllDonations />
            },
        ]
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/details",
        element: <PetDetails />
    },
    {
        path: "/donations",
        element: <DonationDetails />
    }
])

export default Routes;
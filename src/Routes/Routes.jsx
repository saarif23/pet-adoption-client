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
import AdoptionRequest from "../Pages/Dashboard/user/AdoptionRequest";
import CreateDonationCampaign from "../Pages/Dashboard/user/CreateDonationCampaign";
import MyDonationCampaign from "../Pages/Dashboard/user/MyDonationCampaign";
import MyDonations from "../Pages/Dashboard/user/MyDonations";
import AdminHome from "../Pages/Dashboard/admin/AdminHome";
import Users from "../Pages/Dashboard/admin/Users";
import AllPets from "../Pages/Dashboard/admin/AllPets";
import AllDonations from "../Pages/Dashboard/admin/AllDonations";
import MyAddedPets from "../Pages/Dashboard/user/MyAddedPet";
import PrivateRoute from "./PrivateRoute";
import AddPet from "../Pages/Dashboard/user/AddPet";
import UpdatePet from "../Pages/UpdatePet/UpdatePet";
import UpdateDonation from "../Pages/Dashboard/user/UpdateDonation";
import { axiosSecure } from "../Hooks/useAxiosSecure";
import { axiosPublic } from "../Hooks/useAxiosPublic";
import AdminRoute from "./AdminRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([

    //|||||||||||||| Main Layouts ----------------------------------------||||||||||||||
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
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
                path: '/pets/:id',
                element: <PrivateRoute><PetDetails /></PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await axiosPublic.get(`/pets/${params.id}`)
                    return res.data;
                }

            },
            {
                path: '/donationCampaigns',
                element: <DonationCampaigns />
            },
            {
                path: '/donationCampaigns/:id',
                element: <PrivateRoute> <DonationDetails /></PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await axiosPublic.get(`/donationCampaigns/${params.id}`)
                    return res.data;
                }
            },
        ]
    },

    //|||||||||||||| Dashboard ----------------------------------------||||||||||||||
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [

            //|||||||||||||| user route----------------------------------------||||||||||||||
            {
                path: "userHome",
                element: <UserHome></UserHome>
            },
            {
                path: "addPet",
                element: <PrivateRoute><AddPet></AddPet></PrivateRoute>
            },
            {
                path: "updatePet/:id",
                element: <PrivateRoute><UpdatePet /></PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await axiosSecure.get(`/userAddedPet/${params.id}`)
                    return res.data;
                }
            },
            {
                path: "myAddedPets",
                element: <PrivateRoute><MyAddedPets /></PrivateRoute>
            },
            {
                path: "adoptionReq",
                element: <PrivateRoute><AdoptionRequest /></PrivateRoute>
            },
            {
                path: "createDonationCampaign",
                element: <PrivateRoute><CreateDonationCampaign /></PrivateRoute>
            },
            {
                path: "updateDonationCampaign/:id",
                element: <PrivateRoute><UpdateDonation /></PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await axiosSecure.get(`/userAddedDonations/${params.id}`)
                    return res.data;
                }
            },
            {
                path: "myDonationCampaign",
                element: <PrivateRoute><MyDonationCampaign /></PrivateRoute>
            },
            {
                path: "myDonations",
                element: <PrivateRoute> <MyDonations /></PrivateRoute>
            },



            //|||||||||||||| Admin route----------------------------------------||||||||||||||
            {
                path: "adminHome",
                element: <AdminRoute><PrivateRoute><AdminHome /></PrivateRoute></AdminRoute>,
            },
            {
                path: "users",
                element: <AdminRoute><PrivateRoute><Users /></PrivateRoute></AdminRoute>
            },
            {
                path: "allPets",
                element: <AdminRoute><PrivateRoute><AllPets /></PrivateRoute></AdminRoute>
            },
            {
                path: "allDonations",
                element: <AdminRoute><PrivateRoute> <AllDonations /></PrivateRoute></AdminRoute>
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

])

export default Routes;
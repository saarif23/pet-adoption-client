import { useEffect, useState } from "react";
import Title from "../../../Components/Shared/Title";
import { Link } from "react-router-dom";
import { FaPauseCircle, FaTrash } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import Swal from "sweetalert2";
import { BiSolidDonateHeart } from "react-icons/bi";
import { LuView } from "react-icons/lu";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const AllDonations = () => {
    const axiosSecure = useAxiosSecure();
    const { data: campaigns = [], refetch } = useQuery({
        queryKey: ["allCampaigns"],
        queryFn: async () => {
            const res = await axiosSecure.get("/allCampaigns")
            return res.data;
        }
    })


    return (
        <div>
            <Title
                heading={'All Donation Campaigns'}
            ></Title>

            <div className=" bg-white p-5">
                {/* <div className="flex justify-between items-center ">
                    <h3 className="text-3xl font-semibold py-5">Total Bookings {menu.length}</h3>

                </div> */}
                <table className="table ">
                    {/* head */}
                    <thead className="bg-[#D1A054] ">
                        <tr className="  text-white">
                            <th> #</th>
                            <th>Pet Name</th>
                            <th>Maximum Donation Amout</th>
                            <th>Donation Progress</th>
                            <th>Pause Campaign</th>
                            <th>Edit Campaign</th>
                            <th>Delete</th>
                            <th>View Donators</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}
                        {campaigns.map((item, index) => <tr key={index}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <p>{item.pet_name}</p>
                            </td>

                            <td>$ 00000</td>
                            <td>Progress Bar</td>
                            <th>
                                <Link to={`/dashboard/updateItem/${item._id}`}>  <button className="bg-[#D1A054]  p-2 text-white rounded-md"><FaPauseCircle /> </button></Link>
                            </th>
                            <th>
                                <button className=" bg-red-600 p-2 text-white rounded-md"><FaRegPenToSquare /></button>
                            </th>
                            <th>
                                <button onClick={() => handleDeleteItem(item)} className=" bg-red-600 p-2 text-white rounded-md"><FaTrash /></button>
                            </th>
                            <th>
                                <button className=" bg-red-600 p-2 text-white rounded-md"><LuView /></button>
                            </th>
                        </tr>)}


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllDonations;

//



////////////




// const handleDeleteItem = (item) => {
//     Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//         // if (result.isConfirmed) {
//         //     axiosSecure.delete(`/menu/${item._id}`)
//         //         .then(res => {
//         //             // console.log(res.data);

//         //             if (res.data.deletedCount > 0) {
//         //                 toast.success(`${item.name}Delete Successfully`)
//         //                 refetch();
//         //             }
//         //         })
//         //         .catch(error => console.log(error))
//         // }
//     });
// }



import Title from "../../../Components/Shared/Title";
import { Link } from "react-router-dom";
import { FaPauseCircle } from "react-icons/fa";
import { FaCirclePlay, FaRegPenToSquare } from "react-icons/fa6";
import Swal from "sweetalert2";
import { LuView } from "react-icons/lu";
import useUserDonations from "../../../Hooks/useUserDonations";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Loading from "../../../Components/Shared/Loading";

const MyDonationCampaign = () => {
    const axiosSecure = useAxiosSecure();
    const [userAddedDonations, isPending, refetch] = useUserDonations();

    const handlePauseCampaign = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Pause Campaign !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/allCampaigns/${item._id}`, { status: !item?.status || false })
                    .then(() => {
                        toast.success(`change status successfully`)
                        refetch();
                    })
                    .catch(error => console.log(error))
            }
        });
    }

    if (isPending) {
        return <Loading />
    }
    return (
        <div>
            <Title
                heading={'My Donation Campaigns'}
            ></Title>

            <div className=" bg-white p-5">
                {/* <div className="flex justify-between items-center ">
                    <h3 className="text-3xl font-semibold py-5">Total Bookings {menu.length}</h3>

                </div> */}
                <table className="md:table max-md:text-xs">
                    {/* head */}
                    <thead className="bg-[#D1A054] ">
                        <tr className="  text-white">
                            <th> #</th>
                            <th>Pet Name</th>
                            <th>Maximum Donation Amout</th>
                            <th>Donation Progress</th>
                            <th>Pause Campaign</th>
                            <th>Edit Campaign</th>
                            <th>View Donators</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}
                        {userAddedDonations.map((item, index) => <tr key={index}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <p>{item.pet_name}</p>
                            </td>

                            <td>$ 00000</td>
                            <td>Progress Bar</td>
                            <th>
                                <button onClick={() => handlePauseCampaign(item)} className="bg-fuchsia-500  p-2 text-white rounded-md"> {item?.status === true ? <FaPauseCircle /> : <FaCirclePlay />} </button>
                            </th>
                            <th>

                              
                                <Link to={`/dashboard/updateDonationCampaign/${item._id}`} >
                                    <button className=" bg-red-600 p-2 text-white rounded-md"><FaRegPenToSquare /></button>
                                </Link>
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

export default MyDonationCampaign;

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


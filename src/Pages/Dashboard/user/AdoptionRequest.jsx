
import { useQuery } from "@tanstack/react-query";
import Title from "../../../Components/Shared/Title";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Loading from "../../../Components/Shared/Loading";

const AdoptionRequest = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: donationsReq = [], isPending, refetch } = useQuery({
        queryKey: ['userAddedAdoptionRequests', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/userAddedAdoptionRequests?email=${user?.email}`)
            return res.data
        }
    })


    const handleDeleteUserReq = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/adoptReq/${user._id}`)
                    .then(res => {
                        console.log(res);
                        toast.success(`${user.name} requent delete Successfully`)
                        refetch();
                        // if (res.status === 200 && res.statusText === 'OK') { //status: 200, statusText: 'OK'
                        // }
                    })
                    .catch(error => console.log(error))
            }
        });
    }


    const handleAcceptReq = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to accept request now !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/adoptReq/${user?._id}`, { accepted: !user?.accepted || true })
                    .then(res => {
                        console.log(res);
                        toast.success(`${user?.name} requst Accespted`)
                        refetch();
                        // if (res.status === 200 && res.statusText === 'OK') { //status: 200, statusText: 'OK'
                        // }

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
                heading={'All adoption request'}
            ></Title>

            <div className=" bg-white p-5">
                {/* <div className="flex justify-between items-center ">
                    <h3 className="text-3xl font-semibold py-5">Total Bookings {menu.length}</h3>

                </div> */}
                <table className="md:table max-md:text-xs w-full">
                    {/* head */}
                    <thead className="bg-[#D1A054] ">
                        <tr className="  text-white">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Accept</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {donationsReq.map((user, index) => <tr key={user._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <p>{user.name}</p>
                            </td>

                            <td>
                                {user.email}
                            </td>
                            <td>
                                {user.phone}
                            </td>
                            <td>
                                <p>{user.location}</p>
                            </td>

                            <td>

                                <button onClick={() => handleAcceptReq(user)} className=" bg-fuchsia-500 p-2 text-white rounded-md">{user?.accepted === true ? "Accepted" : "Accept"}</button>

                            </td>
                            <td>
                                <button onClick={() => handleDeleteUserReq(user)} className=" bg-red-600 p-2 text-white rounded-md"><FaTrash></FaTrash></button>
                            </td>
                        </tr>)}




                    </tbody>

                </table>
            </div>
        </div >
    );
};

export default AdoptionRequest;




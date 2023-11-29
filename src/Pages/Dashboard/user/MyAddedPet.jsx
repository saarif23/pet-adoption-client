import Title from "../../../Components/Shared/Title";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import Loading from "../../../Components/Shared/Loading";
import useUserPets from "../../../Hooks/useUserPets";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const MyAddedPets = () => {
    const [userAddedPet, isPending, refetch] = useUserPets();
    const axiosSecure = useAxiosSecure();

    if (isPending) {
        return <Loading />
    }

    const handleDeleteItem = (item) => {
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
                axiosSecure.delete(`/userAddedPet/${item._id}`)
                    .then(res => {
                        if (res.status === 200 && res.statusText === 'OK') { //status: 200, statusText: 'OK'
                            toast.success(`${item.pet_name}Delete Successfully`)
                            refetch();
                        }
                    })
                    .catch(error => console.log(error))
            }
        });
    }
    const handleAdopt = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to adopt now !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/userAddedPet/${item._id}`)
                    .then(res => {
                        console.log(res);
                        if (res.status === 200 && res.statusText === 'OK') { //status: 200, statusText: 'OK'
                            toast.success(`${item.pet_name} adopt Successfully`)
                            refetch();
                        }

                    })
                    .catch(error => console.log(error))
            }
        });
    }






    return (
        <div>
            <Title
                heading={'My added Pets'}
            ></Title>

            <div className=" bg-white p-5">
                {/* <div className="flex justify-between items-center ">
                    <h3 className="text-3xl font-semibold py-5">Total Bookings {menu.length}</h3>

                </div> */}
                <table className="md:table ">
                    {/* head */}
                    <thead className="bg-fuchsia-500 ">
                        <tr className="  text-white">
                            <th> #</th>
                            <th>Pet Name</th>
                            <th>Pet Image</th>
                            <th>Pet Category</th>
                            <th>Adoption Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Adopt</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}
                        {userAddedPet.map((item, index) => <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <p>{item.pet_name}</p>
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.pet_image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>{item.pet_category}</td>
                            <td>{item?.adopted === true ? "Adopted" : "Not Adopted"}</td>
                            <th>
                                <Link to={`/dashboard/updatePet/${item._id}`}>  <button className="bg-amber-300  p-2 text-white rounded-md"><FaRegPenToSquare /></button></Link>
                            </th>
                            <th>
                                <button onClick={() => handleDeleteItem(item)} className=" bg-red-600 p-2 text-white rounded-md"><FaTrash></FaTrash></button>
                            </th>
                            <th>
                                {
                                    item?.adopted === true ? "Adopted" :
                                        <button onClick={() => handleAdopt(item)} className=" bg-fuchsia-500 p-2 text-white rounded-md">Adopt</button>
                                }
                            </th>
                        </tr>)}


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyAddedPets;
import Title from "../../../Components/Shared/Title";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import Swal from "sweetalert2";
import { BiSolidDonateHeart } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllPets = () => {
    const axiosSecure = useAxiosSecure();
    const { data: pets = [], refetch } = useQuery({
        queryKey: ["allPets"],
        queryFn: async () => {
            const res = await axiosSecure.get("/allPets")
            return res.data;
        }
    })


    return (
        <div>
            <Title
                heading={'My added Pets'}
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
                            <th>Pet Image</th>
                            <th>Pet Category</th>
                            <th>Adoption Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                                                   </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}
                        {pets.map((item, index) => <tr key={index}>
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
                        </tr>)}


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllPets;

//



   


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

import Title from "../../../Components/Shared/Title";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useState } from "react";
import Loading from "../../../Components/Shared/Loading";

const AllPets = () => {
    
    // const axiosSecure = useAxiosSecure();
    // const { data: pets = [], refetch } = useQuery({
    //     queryKey: ["allPets"],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get("/allPets")
    //         return res.data;
    //     }
    // })
    const axiosSecure = useAxiosSecure();
    const [itemPerPage, setItemPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0)
  
    const { data: pets = [], isPending, refetch } = useQuery({
        queryKey: ['userAddPet', currentPage, itemPerPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allPets?page=${currentPage}&size=${itemPerPage}`)
            return res.data
        }
    })
    
console.log(pets);

    const numberOfPage = Math.ceil(70 / itemPerPage)
    const pages = [...Array(numberOfPage).keys()]


    const handleItemPerPage = e => {
        const value = parseInt(e.target.value)
        setItemPerPage(value)
        setCurrentPage(0)
    }
    
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }




    const handleChangeStatus = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to change adopt status !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/allPets/${item._id}`, { adopted: !item?.adopted })
                    .then(() => {
                        toast.success(`change status successfully`)
                        refetch();
                    })
                    .catch(error => console.log(error))
            }
        });
    }


    
    const handleDeletePet = (item) => {
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
                axiosSecure.delete(`/allPets/${item?._id}`)
                    .then(() => {
                        toast.success(`${item?.pet_name} deleted successfully`)
                        refetch();
                    })
                    .catch(error => console.log(error))
            }
        });
    }




if(isPending){
    return <Loading/>
}
    return (
        <div>
            <Title
                heading={'All User Added Pets'}
            ></Title>

            <div className=" bg-white p-5">
                {/* <div className="flex justify-between items-center ">
                    <h3 className="text-3xl font-semibold py-5">Total Bookings {menu.length}</h3>

                </div> */}
                <table className="md:table p-2 max-md:text-xs  ">
                    {/* head */}
                    <thead className="bg-fuchsia-500 py-2 ">
                        <tr className="  text-white">
                            <th> #</th>
                            <th>Pet Name</th>
                            <th>Pet Image</th>
                            <th>Pet Category</th>
                            <th>Adoption Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Change Status</th>
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
                                        <div className="mask mask-squircle w-8 h-8 md:w-12 md:h-12">
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
                                <button onClick={() => handleDeletePet(item)} className=" bg-red-600 p-2 text-white rounded-md"><FaTrash></FaTrash></button>
                            </th>
                            <th>
                              <button onClick={() => handleChangeStatus(item)} className=" bg-fuchsia-500 max-md::text-[5px] p-1 md:p-2 text-white rounded-md">Change Status</button>
                                
                            </th>
                        </tr>)}


                    </tbody>

                </table>
            </div>
            <div className='pagination '>
                {/* <p>Current page : {currentPage}</p> */}

                <button onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page => <button
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page ? 'selected' : ''}
                        key={page}
                    >{page + 1}</button>)
                }
                <button onClick={handleNextPage}>Next</button>

                <select value={itemPerPage} onChange={handleItemPerPage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
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

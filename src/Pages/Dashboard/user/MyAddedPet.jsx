import Title from "../../../Components/Shared/Title";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import Loading from "../../../Components/Shared/Loading";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";


const MyAddedPets = () => {
    const axiosSecure = useAxiosSecure();
    const [itemPerPage, setItemPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(0)
    const { user } = useAuth();

    const { data: userAddedPet = [], isPending, refetch } = useQuery({
        queryKey: ['userAddPet', user?.email, currentPage, itemPerPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/userAddedPet?email=${user.email}&page=${currentPage}&size=${itemPerPage}`)
            return res.data
        }
    })

    const numberOfPage = Math.ceil(30 / itemPerPage)
    const pages = [...Array(numberOfPage).keys()]
    // console.log('pages', pages);

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
                        if (res.status === 200 ) { 
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
                        if (res.status === 200 ) { //status: 200, statusText: 'OK'
                            toast.success(`${item.pet_name} adopt Successfully`)
                            refetch();
                        }

                    })
                    .catch(error => console.log(error))
            }
        });
    }

    if (isPending) {
        return <Loading />
    }


    return (
        <div className="mb-10">
            <div>
                <Title
                    heading={'My added Pets'}
                ></Title>

                <div className=" bg-white p-5">
                    <table className="md:table max-md:text-xs">
                        {/* head */}
                        <thead className="bg-[#279c46] ">
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
                                    <button onClick={() => handleDeleteItem(item)} className=" bg-red-600 p-2 text-white rounded-md"><FaTrash></FaTrash></button>
                                </th>
                                <th>
                                    {
                                        item?.adopted === true ? "Adopted" :
                                            <button onClick={() => handleAdopt(item)} className=" bg-[#279c46] p-2 text-white rounded-md">Adopt</button>
                                    }
                                </th>
                            </tr>)}


                        </tbody>

                    </table>
                </div>
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

export default MyAddedPets;
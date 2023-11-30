import Title from "../../../Components/Shared/Title";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const MyDonations = () => {
    
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: donationsReq = [], isPending, refetch } = useQuery({
        queryKey: ['adoptReq', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/adoptReq?email=${user?.email}`)
            return res.data
        }
    })
    console.log(donationsReq);


    return (
        <div>
            <Title
                heading={'My added Pets'}
            ></Title>

            <div className=" bg-white p-5">
                {/* <div className="flex justify-between items-center ">
                    <h3 className="text-3xl font-semibold py-5">Total Bookings {menu.length}</h3>

                </div> */}
                <table className="md:table max-md:text-sm">
                    {/* head */}
                    <thead className="bg-fuchsia-500 ">
                        <tr className="  text-white">
                            <th> #</th>
                            <th>Pet Image</th>
                            <th>Pet Name</th>
                            <th>Donated Amout</th>
                            <th>Asked For Refund</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}
                        {donationsReq.map((item, index) => <tr key={index}>
                            <td>
                                {index + 1}
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
                            <td>
                                <p>{item.pet_name}</p>
                            </td>


                            <td>$0000000</td>

                            <th>
                                <button className=" bg-red-600 p-2 text-white rounded-md">Refund</button>
                            </th>
                        </tr>)}


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyDonations;



////


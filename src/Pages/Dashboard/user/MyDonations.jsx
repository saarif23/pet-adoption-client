import Title from "../../../Components/Shared/Title";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const MyDonations = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: loggedUserPaymentInfo = [], isPending, refetch } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`)
            console.log(res);
            return res.data
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
                <table className="md:table max-md:text-xs">
                    {/* head */}
                    <thead className="bg-fuchsia-500 ">
                        <tr className="  text-white">
                            <th> #</th>
                            <th>Pet Image</th>
                            <th>Pet Name</th>
                            <th>Donated Amout</th>
                            <th>transactionId </th>
                            <th>Asked For Refund</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}
                        {loggedUserPaymentInfo.map((item, index) => <tr key={index}>
                            <td>
                                {index + 1}
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
                            <td>
                                <p>{item.pet_name}</p>
                            </td>


                            <td>${item.donate}</td>
                            <td className="w-20">{item.transactionId}</td>

                            <th>
                                <button className=" bg-red-600  p-1 md:p-2 text-white rounded-md">Refund</button>
                            </th>
                        </tr>)}


                    </tbody>

                </table>
            </div>
        </div >
    );
};

export default MyDonations;



////


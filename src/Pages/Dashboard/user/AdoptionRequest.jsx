
import Title from "../../../Components/Shared/Title";

const AdoptionRequest = () => {
    return (
        <div>
            <Title
                heading={'All adoption request'}
            ></Title>

            <div className=" bg-white p-5">
                {/* <div className="flex justify-between items-center ">
                    <h3 className="text-3xl font-semibold py-5">Total Bookings {menu.length}</h3>

                </div> */}
                <table className="table ">
                    {/* head */}
                    <thead className="bg-[#D1A054] ">
                        <tr className="  text-white">
                                                     <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}
                                              
                        <td>
                            <p>Arif Hossain</p>
                        </td>
                        <td>
                            <p>Arif@gmail.com</p>
                        </td>
                        <td>017000000</td>
                        <td>
                            <p>address</p>
                        </td>
                        <th>
                           <p>Pending</p>
                        </th>
            
                </tbody>

            </table>
        </div>
        </div >
    );
};

export default AdoptionRequest;





import { Link } from "react-router-dom";
import { FaPauseCircle, FaTrash } from "react-icons/fa";
import { FaCirclePlay, FaRegPenToSquare } from "react-icons/fa6";
import Swal from "sweetalert2";
import { LuView } from "react-icons/lu";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AllDonations = () => {
  const axiosSecure = useAxiosSecure();
  const { data: campaigns = [], refetch } = useQuery({
    queryKey: ["allCampaigns"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allCampaigns");
      return res.data;
    },
  });

  const handleDeleteCampaign = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/allCampaigns/${item?._id}`)
          .then(() => {
            toast.success(`deleted donation campaign successfully`);
            refetch();
          })
          .catch((error) => console.log(error));
      }
    });
  };

  const handlePauseCampaign = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Pause Campaign !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/allCampaigns/${item._id}`, {
            status: !item?.status || false,
          })
          .then(() => {
            toast.success(`change status successfully`);
            refetch();
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div>
 
      <h1 className="pt-10 text-5xl text-[#279c46] text-center font-extrabold"> All Donation Campaigns</h1>

      <div className=" bg-white p-5">
        {/* <div className="flex justify-between items-center ">
                    <h3 className="text-3xl font-semibold py-5">Total Bookings {menu.length}</h3>

                </div> */}
        <table className="md:table p-2 max-md:text-xs ">
          {/* head */}
          <thead className="bg-[#279c46] ">
            <tr className="  text-white">
              <th> #</th>
              <th>Pet Name</th>
              <th>Pet Image</th>
              <th>Donation Progress</th>
              <th>Pause Campaign</th>
              <th>Edit Campaign</th>
              <th>Delete</th>
              <th>View Donators</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {campaigns.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <p>{item.pet_name}</p>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-8 h-8 md:w-12 md:h-12">
                        <img
                          src={item.pet_image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>Progress Bar</td>
                <th>
                  <button
                    onClick={() => handlePauseCampaign(item)}
                    className="bg-[#279c46] p-2 text-white rounded-md"
                  >
                    {" "}
                    {item?.status === true ? (
                      <FaPauseCircle />
                    ) : (
                      <FaCirclePlay />
                    )}{" "}
                  </button>
                  {/* <button className="bg-fuchsia-500  p-2 text-white rounded-md"><FaCirclePlay /></button> */}
                </th>
                <th>
                  <Link to={`/dashboard/updateDonationCampaign/${item._id}`}>
                    <button className=" bg-[#279c46] p-2 text-white rounded-md">
                      <FaRegPenToSquare />
                    </button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handleDeleteCampaign(item)}
                    className=" bg-red-600 p-2 text-white rounded-md"
                  >
                    <FaTrash />
                  </button>
                </th>
                <th>
                  <button className=" bg-red-600 p-2 text-white rounded-md">
                    <LuView />
                  </button>
                </th>
              </tr>
            ))}
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

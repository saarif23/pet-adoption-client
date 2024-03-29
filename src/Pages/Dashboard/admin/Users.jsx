// import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";

const Users = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to admin this user !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/${user._id}`, { role: "admin" })
          .then(() => {
            toast.success(`${user?.name} is admin now`);
            refetch();
          })
          .catch((error) => console.log(error));
      }
    });
  };

  const handleDelete = (user) => {
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
          .delete(`/users/${user?._id}`)
          .then(() => {
            toast.success("Delete user  Successfully");
            refetch();
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div>
      <h1 className="pt-10 text-5xl max-lg:text-4xl text-[#279c46] text-center font-extrabold">
        Manage All users
      </h1>

      <div className="overflow-x-auto bg-white p-2">
        <div className="flex justify-between items-center ">
          <h3 className="text-2xl font-semibold py-5">
            Total Users : {users.length}
          </h3>
          {/* <h3 className="text-3xl font-semibold py-5">Total Price : $ {'totalPrice'} </h3>
                    <button className="btn btn-sm bg-[#D1A054] text-white">Pay</button> */}
        </div>
        <table className="md:table text-xs">
          {/* head */}
          <thead>
            <tr className="bg-[#279c46] text-white ">
              <th></th>
              <th>NAME</th>
              <th>IMAGE</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>ACTION</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <p>{user?.name}</p>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-10 h-10 md:w-12 md:h-12">
                        <img
                          src={user?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{user?.email}</p>
                </td>
                <td>
                  {/* {user?.role === "user" && <FaUsers></FaUsers>} */}
                  {user?.role === "admin" ? (
                    <p className="font-bold text-[#279c46]">admin</p>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="bg-[#279c46] text-white p-2 md:text-2xl rounded-md"
                    >
                      <FaUsers></FaUsers>
                    </button>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(user)}
                    className=" bg-red-600 md:text-2xl p-2 text-white rounded-md"
                  >
                    <FaTrash></FaTrash>
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

export default Users;

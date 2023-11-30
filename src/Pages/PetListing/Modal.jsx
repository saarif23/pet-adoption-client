import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Modal = (_id) => {
    const [open, setOpen] = useState(true)
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.address.value;
        const petId = _id;
        const userData = { name, email, phone, location, petId, accepted: false }
        axiosPublic.post("/adoptReq", userData)
            .then(res => {
                if (res.status === 201) {
                    toast.success("Adopt Request Successfully")
                    navigate("/petListing")
                }
            })
            .catch(error => {
                toast.error(error.message)
            })

        setOpen(false)
    }

    return <>
        <button onClick={() => document.getElementById('modal_1').showModal()}>Adopt Now</button>

        {open &&
            <dialog id="modal_1" className="modal">
                <form onSubmit={handleSubmit} className="bg-white rounded-lg w-[70%] p-10 text-black text-center">
                    <div className='flex max-md:flex-col flex-row gap-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text  text-black">Name </span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={user?.displayName}
                                disabled
                                required
                                className="input input-bordered w-full" />
                        </div>
                        <div className="w-full my-2">
                            <label className="label">
                                <span className="label-text  text-black">Email </span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                defaultValue={user?.email}
                                disabled
                                required
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    <div className='flex max-md:flex-col flex-row gap-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text  text-black">Phone </span>
                            </label>
                            <input
                                type="text"
                                name="phone"
                                placeholder='Enter your phone'
                                required
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text  text-black">Address </span>
                            </label>
                            <input
                                type="text"
                                name="address"
                                placeholder='Enter your address'
                                required
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className='w-1/2 mx-auto mt-5'>

                        <button type='submit' className='bg-fuchsia-500 w-full rounded-md py-2 mt-2 text-white  transition' >
                            Submit
                        </button>
                    </div>

                </form>
            </dialog>

        }
    </>
};

export default Modal;
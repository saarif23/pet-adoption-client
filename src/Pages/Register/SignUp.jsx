import { Link, useNavigate } from 'react-router-dom'

import HorizontalLine from '../../Components/Shared/HorizontalLine'
import { FaFacebook } from 'react-icons/fa'
import { ImSpinner9 } from "react-icons/im";
import { imageUpload } from '../../Api/utils'
import useAuth from '../../Hooks/useAuth'
import GoogleSignIn from '../../Components/Shared/GoogleSignIn';
import toast from 'react-hot-toast';

import GithubSignIn from '../../Components/Shared/GithubSignIn';
import { useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { Helmet } from 'react-helmet-async';


const SignUp = () => {
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    // email and password sign up
    const { createUser, updateUserProfile } = useAuth();
    const [isLoading, setIsLoading] = useState(false)
    const handleSignUp = async event => {
        setIsLoading(true)
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {
            name,
            email,
            role: 'user'
        };
        // console.log(name, email, password);
        // console.log(form.image.files);
        const image = form.image.files[0];
        console.log(image);
        try {

            //upload image and create image url
            const imageData = await imageUpload(image);

            if (password.length < 6) {
                setIsLoading(false)
                return toast.error("Password must have atleast 6 charecters")

            } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=!])(?=.*\d).{6,}$/.test(password)) {
                setIsLoading(false)
                return toast.error("Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.")
            }
            // create user
            const result = await createUser(email, password)
            console.log(result);
            if (result?.user) toast.success("User Created Successfully")
            setIsLoading(false)


            // update profile 
            await updateUserProfile(name, imageData?.data?.display_url)
            // console.log('paise name ar image', user);
            if (result?.user?.displayName && result?.user?.photoURL) {
                toast.success("User Profile Updated")
                axiosPublic.post("/users", user)
                    .then(res => {
                        if (res.status === 201 && res.statusText === 'Created') {
                            navigate("/")
                            toast.success("user add in database")
                        }
                    })
                    .catch(error => console.log(error))



            }

        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Helmet>
                <title>Animal Care | Sign Up</title>
            </Helmet>
            <div className='flex flex-col max-w-md p-3 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-2 text-center'>
                    <h1 className='mb-2 text-4xl font-bold'>Sign Up</h1>
                    <p className='text-sm text-gray-400'>
                        Welcome to Our Adoption Platform
                    </p>
                </div>
                <form onSubmit={handleSignUp} >
                    <div className='space-y-3'>
                        <div>
                            <label htmlFor='email' className='block mb-1 text-sm'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-1 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'

                            />
                        </div>
                        <div>
                            <label htmlFor='image' className='block mb-1 text-sm'>
                                Select Profile Image:
                            </label>
                            <input
                                required
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-1 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-1 border rounded-md border-gray-300 focus:outline-fuchsia-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-1'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                autoComplete='current-password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-1 border rounded-md border-gray-300  focus:outline-fuchsia-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-fuchsia-500 w-full rounded-md py-2 mt-2 text-white  transition'
                        >
                            {
                                isLoading ? <ImSpinner9 className='animate-spin m-auto' /> : "Submit"
                            }
                        </button>

                    </div>
                </form>
                <div >
                    <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
                        Forgot password?
                    </button>
                </div>
                <div className='m-auto font-light text-gray-400 mt-2'>
                    <HorizontalLine chars={20} />Or Sign IN With <HorizontalLine chars={20} />
                </div>

                <div className='flex gap-10 my-2 justify-center'>
                    <GoogleSignIn></GoogleSignIn>
                    <GithubSignIn></GithubSignIn>
                    {/* <FaGithub className='cursor-pointer hover:animate-bounce' size={24} /> */}
                    <FaFacebook className='cursor-pointer hover:animate-bounce' size={24} />
                </div>

                <p className='px-6 text-sm text-center pt-2 text-gray-400'>
                    Already Have an Accout ?{' '}
                    <Link
                        to='/login'
                        className='hover:underline hover:text-fuchsia-600 text-gray-600'
                    >
                        Sign In
                    </Link>
                    .
                </p>
            </div>
        </div>
    )
}

export default SignUp

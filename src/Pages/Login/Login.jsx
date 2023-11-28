import { Link, useLocation, useNavigate } from 'react-router-dom'

import HorizontalLine from '../../Components/Shared/HorizontalLine'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import useAuth from '../../Hooks/useAuth'
import toast from 'react-hot-toast'
import GoogleSignIn from '../../Components/Shared/GoogleSignIn'
import GithubSignIn from '../../Components/Shared/GithubSignIn'
import { useState } from 'react'
import { ImSpinner9 } from 'react-icons/im'
import { Helmet } from 'react-helmet-async'

const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { loginUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const handleSignIn = async event => {
        setIsLoading(true)
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        try {
            const result = await loginUser(email, password)
            console.log(result)
            toast.success("Login Successfully");
            setIsLoading(false)
            navigate(from, { replace: true });
        } catch (error) {
            setIsLoading(false)
            toast.error(error.message)
        }

    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Helmet>
                <title>Animal Care | Login</title>
            </Helmet>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Log In</h1>
                    <p className='text-sm text-gray-400'>
                        Sign in to access your account
                    </p>
                </div>
                <form
                    onSubmit={handleSignIn}
                    className='space-y-5'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-fuchsia-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300  focus:outline-fuchsia-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        {/* <button
                            type='submit'
                            className='bg-fuchsia-500 w-full rounded-md py-3 text-white'
                        >
                            Submit
                        </button> */}
                        <button
                            type='submit'
                            className='bg-fuchsia-500 w-full rounded-md py-3 text-white  transition'
                        >
                            {
                                isLoading ? <ImSpinner9 className='animate-spin m-auto' /> : "Submit"
                            }
                        </button>

                    </div>
                </form>
                <div className='space-y-1'>
                    <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
                        Forgot password?
                    </button>
                </div>
                <div className='m-auto font-light text-gray-400 mt-3'>
                    <HorizontalLine chars={30} />Or <HorizontalLine chars={30} />
                </div>
                <div className='flex items-center  space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Login with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                {/* <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                    <FcGoogle size={32} />

                    <p>Continue with Google</p>
                </div> */}

                <div className='flex gap-10 my-5 justify-center'>
                    {/* <FaGoogle className='cursor-pointer hover:animate-bounce' size={36} /> */}
                    <GoogleSignIn />
                    {/* <FaGithub className='cursor-pointer hover:animate-bounce' size={36} /> */}
                    <GithubSignIn />
                    <FaFacebook className='cursor-pointer hover:animate-bounce' size={24} />
                </div>

                <p className='px-6 text-sm text-center text-gray-400'>
                    Don&apos;t have an account yet?{' '}
                    <Link
                        to='/signup'
                        className='hover:underline hover:text-fuchsia-600 text-gray-600'
                    >
                        Sign up
                    </Link>
                    .
                </p>
            </div>
        </div>
    )
}

export default Login

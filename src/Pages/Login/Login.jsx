import { Link } from 'react-router-dom'

import HorizontalLine from '../../Components/Shared/HorizontalLine'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'

const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Log In</h1>
                    <p className='text-sm text-gray-400'>
                        Sign in to access your account
                    </p>
                </div>
                <form
                    noValidate=''
                    action=''
                    className='space-y-5 ng-untouched n ng-pristine ng-valid'
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
                                data-temp-mail-org='0'
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
                                autoComplete='current-password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300  focus:outline-fuchsia-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-fuchsia-500 w-full rounded-md py-3 text-white'
                        >
                            Continue
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
                    <FaGoogle className='cursor-pointer hover:animate-bounce'  size={36}/>
                    <FaGithub  className='cursor-pointer hover:animate-bounce' size={36} />
                    <FaFacebook className='cursor-pointer hover:animate-bounce'  size={36} />
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

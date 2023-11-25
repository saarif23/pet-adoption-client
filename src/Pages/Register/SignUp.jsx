import { Link } from 'react-router-dom'

import HorizontalLine from '../../Components/Shared/HorizontalLine'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'

const SignUp = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='flex flex-col max-w-md p-3 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-2 text-center'>
                    <h1 className='mb-2 text-4xl font-bold'>Sign Up</h1>
                    <p className='text-sm text-gray-400'>
                        Welcome to Our Adoption Platform
                    </p>
                </div>
                <form    >
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
                            className='bg-fuchsia-500 w-full rounded-md py-2 mt-2 text-white'
                        >
                            Continue
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
                    <FaGoogle className='cursor-pointer hover:animate-bounce' size={24} />
                    <FaGithub className='cursor-pointer hover:animate-bounce' size={24} />
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

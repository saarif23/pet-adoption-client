import { AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth'
import toast from 'react-hot-toast'

const MenuDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const { user, logout } = useAuth()


    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])

    const handleToggleTheme = e => {
        if (e.target.checked) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }


    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success('Logout Successfully!')
                navigate("/login")
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='relative'>


            <div className='flex flex-row items-center gap-3'>
                {/* Dropdown btn */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={`p-4 md:py-1 md:px-2 border-[1px] ${user ? 'border-neutral-200' : "border-none"}  flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition`}
                >
                    <div className='text-black'>
                        <AiOutlineMenu size={28} />
                    </div>

                    {/* user profile image */}
                    {user && <div className='hidden md:block'>
                        <img
                            className='rounded-full'
                            referrerPolicy='no-referrer'
                            src={user && user?.photoURL}

                            alt='profile'
                            height='30'
                            width='30'
                        />
                    </div>}

                </div>
            </div>




            {isOpen &&
                <div className='absolute rounded-xl z-10 shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>

                    {user ?

                        <div className='flex flex-col text-black cursor-pointer'>
                            <Link
                                to='/'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Home
                            </Link>
                            <Link
                                to='/petListing'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Pet Listing
                            </Link>
                            <Link
                                to='/donationCampaigns'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Donation Campaigns
                            </Link>

                            <Link
                                to='/dashboard'
                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Dashboard
                            </Link>
                            <Link
                                onClick={handleLogout}
                                to='/logout'
                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Logout
                            </Link>
                            <div className="form-control px-4 py-3">
                                <label className="label cursor-pointer">
                                    <input
                                        type="checkbox"
                                        onChange={handleToggleTheme}
                                        checked={theme === "light" ? false : true}
                                        className="toggle" />

                                </label>
                            </div>

                        </div>
                        :
                        <div className='flex flex-col cursor-pointer'>
                            <Link
                                to='/'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Home
                            </Link>
                            <Link
                                to='/petListing'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Pet Listing
                            </Link>
                            <Link
                                to='/donationCampaigns'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Donation Campaigns
                            </Link>

                            <Link
                                to='/login'
                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Login
                            </Link>
                            <Link
                                to='/signup'
                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Sign Up
                            </Link>
                        </div>

                    }

                </div>
            }


        </div>
    )
}

export default MenuDropdown




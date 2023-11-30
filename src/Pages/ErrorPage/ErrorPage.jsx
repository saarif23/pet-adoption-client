import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Helmet } from "react-helmet-async";
const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center py-10">

            <Helmet>
                <title> Animal Care Agency | Error</title>
            </Helmet>
            <div className='text-center'>
                <Link to="/"> <p className='flex items-center gap-2 text-xl cursor-pointer text-neutral-400 font-bold'> <BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill> <span>Back to Home</span></p></Link>
                <img src="https://i.ibb.co/vV5sY6r/errorpage.jpg" alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;
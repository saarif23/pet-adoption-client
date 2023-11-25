import { FaGithub } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const GithubSignIn = () => {

    const { githubLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const handleGithubLogin = () => {
        githubLogin()
            .then(() => {
                toast.success("Google Sign In Success")
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div onClick={handleGithubLogin}>
            <FaGithub className='cursor-pointer hover:animate-bounce' size={24} />
        </div>
    );
};

export default GithubSignIn;
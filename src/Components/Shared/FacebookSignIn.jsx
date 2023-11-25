import { FaFacebook } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";


const FacebookSignIn = () => {
    const { facebookSignIn } = useAuth();
    const handleFacebookSignIn = () => {
        facebookSignIn()
        .then(res=> console.log(res))
        .catch(error=>console.log(error))
    }
    return (
        <div onClick={handleFacebookSignIn}>
            <FaFacebook className='cursor-pointer hover:animate-bounce' size={24} />
        </div>
    );
};

export default FacebookSignIn;

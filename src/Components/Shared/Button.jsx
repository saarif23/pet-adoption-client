
const Button = ({ btn_text }) => {
    return (
        <div className="bg-fuchsia-500 rounded cursor-pointer hover:bg-fuchsia-700  py-2 px-5 w-40 text-white font-bold text-lg">
            {btn_text}
        </div>
    );
};

export default Button;
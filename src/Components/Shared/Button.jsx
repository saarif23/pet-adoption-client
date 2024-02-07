/* eslint-disable react/prop-types */

const Button = ({ btn_text }) => {
  return (
    <button className="bg-[#279c46] rounded-full cursor-pointer hover:animate-pulse py-2 px-10  text-white font-bold text-lg">
      {btn_text}
    </button>
  );
};

export default Button;

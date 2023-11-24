
const Title = ({ heading, subHeading }) => {
    return (
        <div className=" w-full lg:w-6/12 mx-auto my-10  text-center">
            <h3 className="text-3xl font-semibold  py-2 uppercase">{heading}</h3>
            <p className="text-yellow-500 max-md:text-sm italic pb-2">--- {subHeading} ---</p>
        </div>
    );
};

export default Title;
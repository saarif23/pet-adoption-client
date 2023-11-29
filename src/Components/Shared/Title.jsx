import PropTypes from 'prop-types'
const Title = ({ heading, subHeading }) => {
    return (
        <div className=" w-full lg:w-7/12 mx-auto my-5 text-center">
            <h3 className="text-3xl font-bold  text-neutral-600 py-2 uppercase">{heading}</h3>
            <p className="text-fuchsia-500 max-md:text-sm italic pb-2 text-sm font-semibold"> {subHeading}</p>
        </div>
    );
};
Title.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired
}
export default Title;
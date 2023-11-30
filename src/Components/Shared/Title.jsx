import PropTypes from 'prop-types'
import Container from './Container';
const Title = ({ heading, subHeading }) => {
    return (
        <Container>
            <div className=" lg:w-7/12 mx-auto my-5 text-center">
                <h3 className="text-xl md:text-3xl font-extrabold  text-neutral-500 py-2 uppercase">{heading}</h3>
                <p className="text-neutral-400 max-md:text-sm   pb-2 text-sm font-semibold"> {subHeading}</p>
            </div>
        </Container>
    );
};
Title.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired
}
export default Title;

import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import Container from "../../Shared/Container";

const Footer = () => {
  return (
    <>
      <div className="bg-[#279c46] py-10 space-y-6">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex-1 flex flex-col space-y-4 lg:space-y-6 ">
              <p className="text-white max-lg:text-center text-4xl font-extrabold">
                Lets Connect.
              </p>
              <p className="text-gray-200 text-sm lg:text-md w-full lg:w-3/4 max-lg:mx-auto text-justify">
                Ready to discuss your project goals and explore how Nexus Weaver
                can help bring your vision to life?. Set up a meeting with our
                team today. We&apos;re excited to learn more about your company
                and how we can personalize our services to match your
                requirements.
              </p>
              <div className="flex gap-4 text-white text-2xl lg:text-3xl max-lg:justify-center items-center ">
                <FaLinkedinIn />
                <FaFacebook />
                <FaTwitter />
                <FaGithub />
              </div>
              <p className="text-white text-lg max-lg:hidden">
                © 2024 Nexus Weaver. All rights reserved.
              </p>
            </div>
            <div className="flex-1 space-y-6">
              {/* mt-6 lg:mt-0 flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-12 gap-y-6 lg:gap-y-0 */}
              <div className="mt-6 grid grid-cols-3 gap-x-12 gap-y-0">
                <div className="max-lg:text-center">
                  <h1 className="text-xl lg:text-2xl text-white font-bold">
                    Services
                  </h1>
                  <p className="text-gray-200 text-lg">Recycling</p>
                  <p className="text-gray-200 text-lg">Ecosystem</p>
                  <p className="text-gray-200 text-lg">Biology</p>
                </div>
                <div className="max-lg:text-center">
                  <h1 className="text-xl lg:text-2xl text-white font-bold">
                    Links
                  </h1>
                  <p className="text-gray-200 text-lg">Help</p>
                  <p className="text-gray-200 text-lg">Support</p>
                  <p className="text-gray-200 text-lg">Client</p>
                </div>
                <div className="flex-1 w-full">
                  <h1 className="text-xl lg:text-2xl text-white font-bold">
                    Subscribe
                  </h1>
                  <form className="flex space-x-2">
                    <input
                      className="w-full bg-transparent border-b border-gray-400 focus:outline-none text-white text-lg py-1"
                      type="text"
                      placeholder="Enter Your Email"
                    />
                    <button className="btn bg-white text-[] px-4 py-2 rounded-lg hover:bg-opacity-80 transition duration-300">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <hr />
              <div>
                <h1 className=" text-white text-xl font-bold max-lg:text-center pb-3">
                  Team Member
                </h1>
                <div className="flex flex-wrap gap-4  rounded-b-lg max-lg:justify-center">
                  <img
                    src="https://themexriver.com/wp/choicy/wp-content/uploads/2024/01/f2-team-1.webp"
                    className="rounded-xl w-20 "
                    alt="img"
                  />

                  <img
                    src="https://themexriver.com/wp/choicy/wp-content/uploads/2024/01/f2-team-2.webp"
                    className="rounded-xl w-20 "
                    alt="img"
                  />

                  <img
                    src="https://themexriver.com/wp/choicy/wp-content/uploads/2024/01/f2-team-3.webp"
                    className="rounded-xl w-20 "
                    alt="img"
                  />

                  <img
                    src="https://themexriver.com/wp/choicy/wp-content/uploads/2024/01/f2-team-4.webp"
                    className="rounded-xl w-20 "
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
        <p className="text-white text-center lg:hidden py-3 border-t ">
          © 2024 Nexus Weaver. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;

import { SiIconfinder } from "react-icons/si";
import Container from "../../Components/Shared/Container";

import { useLoaderData } from "react-router-dom";
import PaymentModal from "./PaymentModal";

const DonationDetails = () => {
  const campaignsData = useLoaderData();
  const {
    status,
    pet_name,
    pet_image,
    maximum_donation_amount,
    short_description,
    long_description,
    lastDate,
    createdAt,
    donated_amount,
  } = campaignsData;

  return (
    <Container>
      <div className="py-10 ">
        <div className="w-full">
          <img className="w-full h-[600px]" src={pet_image} alt="" />
          <p className="pt-10">{""}</p>
        </div>
        <div className="">
          <div className=" mx-5 space-y-2 ">
            <h3 className="text-5xl text-center pb-3 font-medium">
              Donation Campaign for {pet_name}{" "}
            </h3>

            <div className="flex flex-col lg:flex-row justify-between">
              <div className="  shadow p-5 space-y-3 ">
                <p>
                  {" "}
                  <span className="font-bold text-[#279c46]">
                    Maximum Donation Amout :
                  </span>{" "}
                  $ {maximum_donation_amount}
                </p>
                <p>
                  {" "}
                  <span className="font-bold text-[#279c46]">
                    Donated amount : ${" "}
                  </span>
                  {donated_amount}
                </p>
              </div>
              <div className="p-5 space-y-3">
                <p>
                  {" "}
                  <span className="font-bold text-[#279c46]">
                    Start Campaign Date :{" "}
                  </span>
                  {createdAt}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Last Date of Donation : </span>
                  {lastDate && lastDate}
                </p>
              </div>
            </div>
            <p className="py-5">{short_description && short_description}</p>
            {/* <div className="flex items-center gap-8 py-5">
                            <span className="text-4xl"><BiFastForward></BiFastForward></span>
                            <p><span className="text-green-500 font-semibold">Available </span>The Book is available For you</p>
                        </div> */}
            {status === true ? (
              <div className="flex justify-center items-center gap-2 p-2 rounded-md bg-[#279c46] hover:animate-pulse font-semibold text-white cursor-pointer">
                <SiIconfinder></SiIconfinder> <span>{PaymentModal()}</span>
              </div>
            ) : (
              <button
                disabled
                className=" gap-2 p-2 w-full rounded-md bg-gray-300  font-semibold text-white cursor-pointer"
              >
                <span> Pause</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className=" space-y-5 p-5  mb-20">
        <p>{long_description && long_description}</p>
      </div>
    </Container>
  );
};

export default DonationDetails;

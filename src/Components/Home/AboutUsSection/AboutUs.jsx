/* eslint-disable react/no-unescaped-entities */


import Title from "../../Shared/Title";
import AdoptMessage from "./AdoptMessage";
import PetCare from "./PetCare";
import Support from "./Support";

const AboutUs = () => {
  return (
    <div className="bg-white pb-10">
      <div>
        <Title
          heading={"About Us"}
          subHeading={"Our, works, Supports and Facilities"}
        />
      </div>
      <PetCare />
      <Support />
      <AdoptMessage/>

     
    </div>
  );
};

export default AboutUs;

/* eslint-disable react/no-unescaped-entities */

import Title from "../../Shared/Title";

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
    </div>
  );
};

export default AboutUs;

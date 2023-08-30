import react from "react";

const Hero = () => {
  return (
    <div className="h-[90vh] flex items-center just">
      <div className="mx-auto w-[60%] flex justify-center items-center flex-col">
        <h2 className="text-7xl flex font-bold items-center justify-center text-[#fff]">
          Open Payments at the
        </h2>
        <h2 className="text-7xl flex font-bold items-center justify-center text-[#fff]">
          Speed of Light
        </h2>
        <p className="text-base my-6">
          Unlock Groundbreaking New Payment Experiences
        </p>
        <div className="flex gap-2 ">
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-[#ffffff] w-[335px] p-3 border-2"
          />
          <button className="px-6 py-3 bg-[#310E93] text-[#ffffff]">
            Join Our waitlist
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;

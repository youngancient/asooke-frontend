import { FaArrowRightLong } from "react-icons/fa6";

export const AfterHero = () => {
  return (
    <section className="py-20 px-5 w-full bg-[#56BD61] flex items-center justify-center ">
      <div className="w-[95%] flex justify-between items-center md:flex-row flex-col">
        <div className="md:w-[30%]">
          <h3 className="font-bold text-4xl">Heading</h3>
          <p className="mt-10 text-2xl">
            Small details about the aso-wbi Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat.
          </p>

          <div className="mt-5">
            <button className="px-4 py-2 flex items-center text-black font-bold rounded-full bg-white">
              Start Now
              <span className="ml-2">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>

        <div className="md:w-[70%] flex md:flex-row flex-col px-5 mt-10 md:mt-0">
          <div className="md:w-[50%]">
            <img className="w-[48px]" src="/assets/icon2.png" alt="" />
            <h3 className="font-bold text-2xl">Feature 1</h3>
            <p className="mt-10 text-xl">
              Small details about the aso-wbi Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat.
            </p>
          </div>

          <div className="md:w-[50%] mt-5 md:mt-0">
            <img className="w-[48px]" src="/assets/icon2.png" alt="" />
            <h3 className="font-bold text-2xl">Feature 1</h3>
            <p className="mt-10 text-xl">
              Small details about the aso-wbi Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

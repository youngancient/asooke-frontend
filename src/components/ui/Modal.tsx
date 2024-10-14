import { IoClose } from "react-icons/io5";
export const Modal = () => {
  return (
    <div className="fixed top-0 left-0 inset-0 bg-black  h-full w-full z-10 bg-opacity-60 backdrop-blur-sm flex items-center justify-center ">
      <div className="px-5 py-10 bg-[#161622] w-[600px] max-w-[95%] rounded-lg">
        {/* modal top */}

        <div className="w-full flex items-center justify-between">
          <div></div>

          <div>
            <img
              className="w-[200px]"
              src="/assets/aso-ebi-green.png"
              alt="Green Logo"
            />
          </div>

          <div className="text-3xl text-white cursor-pointer">
            <span>
              <IoClose />
            </span>
          </div>
        </div>

        {/* modal title and description */}

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center">
            Choose Your Role
          </h3>
          <p className="mt-2 text-center text-[#645D5D] text-xl">
            How do you want to start your journey with us?
          </p>
        </div>

        {/* modal body */}

        <div className="w-full mt-10">
          <div className="w-full flex items-center">
            <div>
              <img className="w-[50px]" src="/assets/avatar.png" alt="" />
            </div>

            <div className="ml-5">
              <h3 className="text-2xl font-bold text-white">Buyer</h3>
            </div>
          </div>
          <div className="w-full flex items-center mt-4">
            <div>
              <img className="w-[50px]" src="/assets/avatar.png" alt="" />
            </div>

            <div className="ml-5">
              <h3 className="text-2xl font-bold text-white">Seller</h3>
            </div>
          </div>

          <div className="w-full flex items-center mt-4">
            <div>
              <img className="w-[50px]" src="/assets/avatar.png" alt="" />
            </div>

            <div className="ml-5">
              <h3 className="text-2xl font-bold text-white">Designer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

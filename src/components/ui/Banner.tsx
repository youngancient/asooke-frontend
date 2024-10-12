const Banner = () => {
  return (
    <div className="bg-green-600 p-6 md:p-8 md:py-12 rounded-lg flex flex-col relative">
      <img
        src="/assets/banner.png"
        alt="NFT Symbol"
        className="w-48 md:w-64 mb-4 absolute top-5 right-3 -rotate-12 transition-all duration-300 ease-in-out"
      />
      <div className="flex-1">
        <h2 className="text-xl md:text-2xl font-bold">
          Discover more at the marketplace
        </h2>
        <button className="mt-4 bg-white text-black px-6 py-2 rounded-lg">
          Discover Now
        </button>
      </div>
    </div>
  );
};

export default Banner;

// const Banner = () => {
//     return (
//       <div className="bg-green-600 p-8 md:py-12 rounded-lg flex flex-col relative">
//         <img
//           src="/assets/banner.png"
//           alt="NFT Symbol"
//           className="w-80 mb-4 absolute -top-10 right-3"
//         />
//         <div>
//           <h2 className="text-2xl font-bold">Discover more at the marketplace</h2>
//           <button className="mt-4 bg-white text-black px-6 py-2 rounded-lg">
//             Discover Now
//           </button>
//         </div>
//       </div>
//     );
//   };

//   export default Banner;

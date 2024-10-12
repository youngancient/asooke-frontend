import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBox, FaRegClock } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-[#14161F] md:min-w-[250px] min-h-screen flex flex-col py-4 md:py-8">
      <div className="text-white mb-6 font-bold text-2xl md:mx-6">ASO-EBI</div>
      <ul className="text-gray-400 flex flex-col w-full items-start md:mx-6">
        <li className="mb-4 cursor-pointer hover:text-white transition flex items-center">
          <FaTachometerAlt className="mr-2" />
          <Link to=".">
            <span className="text-lg">Dashboard</span>
          </Link>
        </li>
        <li className="mb-4 cursor-pointer hover:text-white transition flex items-center">
          <FaBox className="mr-2" />
          <Link to="/orders">
            <span className="text-lg">Orders</span>
          </Link>
        </li>
        <li className="mb-4 cursor-pointer hover:text-white transition flex items-center">
          <FaRegClock className="mr-2" />
          <Link to=".">
            <span className="text-lg">Active Bids</span>
          </Link>
        </li>
      </ul>
      <div className="mt-auto flex justify-center mx-2">
        <button className="bg-red-600 text-white py-2 rounded-md w-full hover:bg-red-700 transition">
          <div className="flex items-center justify-center">Logout</div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

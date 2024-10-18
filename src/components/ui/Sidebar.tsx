import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBox, FaRegClock } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-[#2D2D3E] md:min-w-[250px] min-h-screen flex flex-col py-4 md:py-8">
      <div className="text-white mb-6 font-bold text-2xl md:mx-6">
        <Link to="/">
          <img
            src="/assets/aso-ebi-green.png"
            alt="AsoEbi"
            className="w-56 h-10"
          />
        </Link>
      </div>
      <ul className="text-gray-400 flex flex-col w-full items-start md:mx-6">
        <li className="mb-4 cursor-pointer hover:text-white transition flex items-center">
          <FaTachometerAlt className="mr-2" />
          <Link to="/dashboard">
            <span className="text-lg">Dashboard</span>
          </Link>
        </li>
        <li className="mb-4 cursor-pointer hover:text-white transition flex items-center">
          <FaBox className="mr-2" />
          <Link to=".">
            <span className="text-lg">Orders</span>
          </Link>
        </li>
        <li className="mb-4 cursor-pointer hover:text-white transition flex items-center">
          <FaBox className="mr-2" />
          <Link to="/sellers">
            <span className="text-lg">Sellers</span>
          </Link>
        </li>
        <li className="mb-4 cursor-pointer hover:text-white transition flex items-center">
          <FaBox className="mr-2" />
          <Link to="/designers">
            <span className="text-lg">Designer</span>
          </Link>
        </li>
        <li className="mb-4 cursor-pointer hover:text-white transition flex items-center">
          <FaRegClock className="mr-2" />
          <Link to=".">
            <span className="text-lg">Active Bids</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

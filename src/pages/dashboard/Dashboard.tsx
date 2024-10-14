import { Link, useNavigate } from "react-router-dom";
import Banner from "../../components/ui/Banner";
import { NFTCard } from "../../components/ui/NFTCard";
import SearchBtn from "../../components/ui/Search";
import ThemeToggle from "../../components/ui/ThemeToggle";
import Sidebar from "../../components/ui/Sidebar";
import { FaShoppingCart } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import Stat from "../../components/ui/Stats";
import { useAppKitAccount } from "@reown/appkit/react";
import { useAppKit } from "@reown/appkit/react";
import { formatAddress } from "../../utils/helper";
import { Button } from "../../components/ui/Button";

function Dashboard() {
  const { address, isConnected } = useAppKitAccount();
  const { open } = useAppKit();
  const navigate = useNavigate();

  const handleConnect = () => {
    open({ view: "Connect" });
  };

  const handleAccount = () => {
    open({ view: "Account" });
  };

  if (!isConnected) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#1E1E2D] text-white">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg max-w-md w-full text-center">
          <h2 className="text-xl font-bold mb-4">
            Connect your wallet to continue to the dashboard
          </h2>
          <div className="flex flex-col items-center gap-4 p-4 bg-gray-900 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold text-white">
              Ready to connect your wallet?
            </h2>
            <div className="flex gap-4">
              <Button
                text="Connect Wallet"
                onClick={handleConnect}
                className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-sm rounded-md shadow-md hover:shadow-lg transform transition-transform hover:scale-105"
              />
              <Button
                text="Go back"
                onClick={() => navigate("/")}
                className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white font-semibold text-sm rounded-md shadow-md hover:shadow-lg transform transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full min-h-screen bg-[#1E1E2D]">
      <div className="hidden md:block h-screen">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto h-screen">
        <div className="flex justify-between items-center mx-4 md:mx-12 py-2 md:py-4">
          <div className="flex items-center">
            <SearchBtn />
          </div>

          <div className="flex gap-2 items-center">
            <button
              onClick={handleAccount}
              className="p-2 space-x-2 text-white bg-gray-700 rounded-full cursor-pointer w-fit"
            >
              {formatAddress(address ?? "")}
            </button>
            <ThemeToggle />
          </div>
        </div>

        <div className="mx-4 md:mx-12 flex flex-col md:flex-row gap-4 mt-2 md:mt-6">
          <div className="flex-1">
            <Banner />
          </div>
          <div className="flex-1 flex flex-col h-auto justify-between">
            <div className="bg-white rounded-lg shadow-md p-4 flex-1 mb-4">
              <Stat icon={FaShoppingCart} title="Total Orders" number="10" />
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 flex-1">
              <Stat icon={FaClipboardList} title="Active Bids" number="5" />
            </div>
          </div>
        </div>

        <div className="md:mx-8 mt-8">
          <div className="flex justify-between items-center mx-4 md:mx-12 my-6">
            <h2 className="text-2xl font-bold text-white">
              Trending Materials
            </h2>
            <Link to={"/"} className="text-sm text-gray-400 cursor-pointer">
              See all
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            <NFTCard image="/assets/image 4.png" />
            <NFTCard image="/assets/image 10.png" />
            <NFTCard image="/assets/image 9.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

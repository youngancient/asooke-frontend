import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import Sidebar from "../../../components/ui/Sidebar";
import { formatAddress } from "../../../utils/helper";

const Sellers = () => {
  const { address, isConnected } = useAppKitAccount();
  const { open } = useAppKit();

  const handleAccount = () => {
    open({ view: "Account" });
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-100">
        <Sidebar />
      </div>

      <div className="flex-1 p-6">
        <div className="flex">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Sellers</h1>
          </div>

          <button
            onClick={handleAccount}
            className="p-2 space-x-2 text-white bg-gray-700 rounded-full cursor-pointer w-fit"
          >
            {formatAddress(address ?? "")}
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-4">Sellers Page</h1>
        <p className="mb-2">
          Your Wallet Address: {isConnected ? address : "Not Connected"}
        </p>
      </div>
    </div>
  );
};

export default Sellers;

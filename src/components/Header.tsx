import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { Button } from "./ui/Button";
import { formatAddress } from "../utils/helper";
import { useEffect } from "react";
type ModalProps = {
  setOpenModal: () => void;
  openModal?: Boolean;
};

const Header = ({ setOpenModal }: ModalProps) => {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  const handleButtonClick = () => {
    open();
    // setOpenModal();
  };

  useEffect(() => {
    if (isConnected) {
      setOpenModal();
    }
  }, [isConnected]);

  return (
    <header className="w-full p-4 bg-[#1B201C] flex items-center justify-between py-">
      <div>
        <img className="w-[150px]" src="/assets/aso-ebi.png" alt="" />
        {/* <h3 className="text-white text-xl font-bold">Aso Ebi</h3> */}
      </div>

      <div>
        <Button
          text={isConnected ? formatAddress(address ?? "") : "Connect Wallet"}
          onClick={handleButtonClick}
        />
      </div>
    </header>
  );
};

export default Header;

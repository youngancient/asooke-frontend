import { Button } from "./ui/Button";

const Header = () => {
  return (
    <header className="w-full p-4 bg-[#1B201C] flex items-center justify-between py-">
      <div>
        <h3 className="text-white text-xl font-bold">Aso Ebi</h3>
      </div>

      <div>
        <Button text="Connect Wallet" onClick={() => {}} />
      </div>
    </header>
  );
};

export default Header;

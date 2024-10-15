import { useCallback, useEffect, useState } from "react";
import { useMarketPlaceContract } from "../useContracts";
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";
import { liskSepoliaNetwork } from "../../connection";
import { toast } from "react-toastify";

interface IUser {
  displayName: string;
  roleType: number;
  isRegistered: boolean;
}
export const useUser = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const { address } = useAppKitAccount();
  const readOnlyMarketPlaceContract = useMarketPlaceContract();
  const fetchUser = useCallback(async () => {
    if (!readOnlyMarketPlaceContract) return;
    if (!address) return;
    try {
      const _user = await readOnlyMarketPlaceContract.users(address);
      setUser(_user);
    } catch (error) {
      console.log(error);
    }
  }, [readOnlyMarketPlaceContract]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return { user };
};

export const useRegister = () => {
  const { address } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();

  const [isLoading, setIsLoading] = useState(false);

  const marketPlaceContract = useMarketPlaceContract(true);
  // const errorDecoder = ErrorDecoder.create()
  const registerUser = useCallback(
    async (displayName: string, roleType: Number) => {
      if (!marketPlaceContract) {
        toast.error("Contract not found");
        return;
      }
      if (!address) {
        toast.error("Connect your wallet!");
        return;
      }
      if (Number(chainId) !== liskSepoliaNetwork.chainId) {
        toast.error("You are not connected to the right network");
        return;
      }
      try {
        setIsLoading(true);
        const estimatedGas = await marketPlaceContract.registerUser.estimateGas(
          { displayName, roleType }
        );
        // construct transaction
        const tx = await marketPlaceContract.registerUser(
          { displayName, roleType },
          {
            gasLimit: (estimatedGas * BigInt(120)) / BigInt(100),
          }
        );
        const reciept = await tx.wait();
        if (reciept.status === 1) {
          toast.success("User Registration successful");
          return;
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [marketPlaceContract, address]
  );
  return { registerUser, isLoading };
};

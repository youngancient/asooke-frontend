import { useCallback, useEffect, useState } from "react";
import { useMarketPlaceContract } from "../useContracts";
import { useAppKitAccount } from "@reown/appkit/react";

interface IUser{
  displayName : string;
  roleType : number;
  isRegistered : boolean;
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

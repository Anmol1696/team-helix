import { 
  ConnectWallet, 
  useAddress,
  useBalance,
  useContract,
  Web3Button
} from "@thirdweb-dev/react";
//import { useState } from "react";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";
import "./styles/Home.css";

export default function Home() {
  
  // Set contract address, user address, and amount to stake state variables
  const stakingContractAddress = "0xd4c624766f4e006Dbe924D24C92A8d9927534C30";
  const address = useAddress();
  // const [amountToStake, setAmountToStake] = useState(0);

  // Set the staking contract to be used
  const { contract: staking, isLoading: isStakingLoading } = useContract(
    stakingContractAddress,
    "custom"
  );

  const { data: stakingTokenBalance, isLoading: isBalanceLoading} = useBalance(NATIVE_TOKEN_ADDRESS);

  if (!isBalanceLoading) {
    console.log("Showing eth balance of: " + stakingTokenBalance);
  }
  if (!isStakingLoading) {
    console.log("Connected to contract ABI: " + staking?.abi)
  }

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to l2staking!
        </h1>
        <p className="description">
          Try staking some ETH!
        </p>
        <label>
        Amount of ETH to stake: <input name="stakingAmount" type="number"/>
          </label>
        <div className="stake">
          {address ? (
          <Web3Button
            contractAddress="0xd4c624766f4e006Dbe924D24C92A8d9927534C30"
            action={(contract) => console.log(contract)} //contract.depositTransaction(address, value, gasLimit, false, )}
          >
            Stake
          </Web3Button>) : (
            <ConnectWallet />
          )}
        </div>
      </main>
    </div>
  );
}

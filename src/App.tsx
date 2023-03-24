import { 
  ConnectWallet, 
  useAddress,
  useBalance,
  useContract,
  Web3Button
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useState } from "react";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";
import "./styles/Home.css";

export default function Home() {
  
  // Set contract address, user address, and amount to stake state variables
  const stakingContractAddress = "0xd4c624766f4e006Dbe924D24C92A8d9927534C30";
  const address = useAddress();
  const [amountToStake, setAmountToStake] = useState<string>("");

  // Set the staking contract to be used
  const { contract: staking, isLoading: isStakingLoading } = useContract(
    stakingContractAddress,
    "custom"
  );

  // Get token balances. TODO: Get staked token balance
  const { data: stakingTokenBalance, isLoading: isBalanceLoading} 
    = useBalance(NATIVE_TOKEN_ADDRESS);

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

        <div>
          <ConnectWallet />
        </div>

        <div className={"stakeContainer"}>
        <label>
        Amount of ETH to stake:
          <input
            className="textbox"
            type="number"
            value={amountToStake}
            onChange={(e) => setAmountToStake(e.target.value)}
          />
          </label>
        </div>
        <Web3Button
          className = "stake"
          contractAddress={stakingContractAddress}
          action={
            async (contract) => { 
              await contract.call(
                "depositTransaction",
                address,
                ethers.utils.parseEther(amountToStake),
                50000,
                false,
                ethers.constants.HashZero,
                );
              alert("Staking successful!");
            }}
        >
          Stake
        </Web3Button>
        <div className="grid" id="center">
          <button className="card">
            <h2>ETH balance</h2>
            <p>{stakingTokenBalance?.displayValue}</p>
          </button>
        </div>
      </main>
    </div>
  );
}

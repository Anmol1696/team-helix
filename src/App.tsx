import { 
  ConnectWallet, 
  useAddress,
  useBalance,
  useSigner,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useState } from "react";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";
import "./styles/Home.css";

export default function Home() {
  
  // Set contract address, user address, and amount to stake state variables
  const stakingContractAddress = "0x3D5568dBc683B199Bef5E329Ae88d52AfdDb8564";
  const address = useAddress();
  const [amountToStake, setAmountToStake] = useState<string>("");
  const provider = ethers.getDefaultProvider();
  const abi = [
    "function depositTransaction(address to, uint256 value, uint64 gasLimit, bool isCreation, bytes data) payable returns ()"
  ]
  const signer = useSigner();
  const contract = new ethers.Contract(stakingContractAddress, abi, signer);

  // Get token balances. TODO: Get staked token balance
  const { data: stakingTokenBalance, isLoading: isBalanceLoading} 
    = useBalance(NATIVE_TOKEN_ADDRESS);

  if (!isBalanceLoading) {
    console.log("Showing eth balance of: " + stakingTokenBalance?.displayValue);
  }
  console.log("Using contract address: " + stakingContractAddress);

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to l2staking!
        </h1>
        <p className="description">
          Stake some ETH!
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
        <div className = "stake">
          <button onClick=
            {() => contract.depositTransaction(
                address,
                ethers.utils.parseEther(amountToStake),
                50000,
                false,
                ethers.constants.HashZero,
              )
            }
            >
              Stake
        </button> 
        </div>
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

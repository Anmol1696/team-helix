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
import useStakedBalance from "./useStakedBalance";

export default function Home() {
  
  // Set constants incl. contract address, user address, and amount to stake state variables
  const stakingContractAddress = "0x3D5568dBc683B199Bef5E329Ae88d52AfdDb8564";
  const address = useAddress();
  const [amountToStake, setAmountToStake] = useState<string>("");
  var safeAddress = address ? address : "";
  const localBalance = useStakedBalance(safeAddress);
  const abi = [
    "function depositTransaction(address to, uint256 value, uint64 gasLimit, bool isCreation, bytes data) payable returns ()"
  ]
  const signer = useSigner();
  const contract = new ethers.Contract(stakingContractAddress, abi, signer);

  // Set options for the contract call
  const gasLimit = 155000;
  let value = ethers.utils.parseEther('0');
  if (amountToStake) {
    value = ethers.utils.parseEther(amountToStake);
  }
  const options = {
    value: value,
    gasLimit: gasLimit,
  }

  // Get token balances. TODO: Get staked token balance
  const { data: stakingTokenBalance, isLoading: isBalanceLoading} 
    = useBalance(NATIVE_TOKEN_ADDRESS);
  
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          L2 Staking
        </h1>
        <p className="description">
          Stake some ETH! Connect to Goerli to stake ETH on L2.
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
                gasLimit,
                false,
                ethers.constants.HashZero,
                options
              )
            }
            >
              Stake
        </button> 
        </div>
        <div className="grid" id="center">
          <button className="card">
            <h2>Current chain balance</h2>
            <p>{isBalanceLoading ? 0 : stakingTokenBalance?.displayValue} {stakingTokenBalance?.name}</p>
          </button>
        </div>
        <div className="grid" id="center">
          <button className="card">
            <h2>L2 Staked Balance</h2>
            <p>{localBalance} Ether</p>
          </button>
        </div>
      </main>
    </div>
  );
}
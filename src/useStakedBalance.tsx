import { useCallback, useEffect, useRef, useState } from 'react';
import { ethers } from 'ethers';

const localHostProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

export default function useStakedBalance(address: string) {
  const [balance, setBalance] = useState(0);
  const prevBalanceRef = useRef(0);
  console.log(address);
  const fetchBalance = useCallback(async () => {
    const rawBalance = await localHostProvider.getBalance(address);
    const value = parseFloat(ethers.utils.formatEther(rawBalance));

    if (value !== prevBalanceRef.current) {
      prevBalanceRef.current = value;
      setBalance(value);
    }
  }, [address]);

  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  useEffect(() => {
    localHostProvider.on('block', fetchBalance);

    return () => {
        localHostProvider.off('block', fetchBalance);
    };
  }, [fetchBalance]);

  return balance;
}
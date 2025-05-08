"use client";

import AirdropForm from "./AirdropForm";
import { useAccount } from "wagmi";

export default function HomeContent() {
  const { isConnected } = useAccount();

  return (
    <div>
      {!isConnected ? (
        <div>Please connect your wallet...</div>
      ) : (
        <div>
          <AirdropForm />
        </div>
      )}
    </div>
  );
}

import { useContract, useNFTs } from "@thirdweb-dev/react";
import { AppShell } from "components/layout/app-shell";
import { Navbar } from "components/marketplace/Navbar/Navbar";
import React from "react";
import Container from "../../components/marketplace/Container/Container";
import NFTGrid from "../../components/marketplace/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../../const/contractAddresses";

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);
  const arr = {}
  return (
    <Container maxWidth="lg">
      {/* <AppShell ecosystem="evm" children={NFT}></AppShell> */}
      <Navbar></Navbar>
      <h1>Buy NFTs</h1>
      <p>Browse which NFTs are available from the collection.</p>
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={
          "Looks like there are no NFTs in this collection. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
        }
      />
    </Container>
  );
}

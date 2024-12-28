import NftCard from "@/registry/components/solui/nft-card";

export default function PriorityModalDemo() {
  return (
    <>
      <NftCard
        nftImage="/registry/nft/nft.svg"
        name="#SoliXel 9962"
        collectionName="SOL NFTs"
        cost="2.4"
        currency="/registry/nft/nft-sol.svg"
      />
    </>
  );
}

export const formatWalletAddress = (walletAddress, length) =>
  `${walletAddress.slice(0, 6)}...${walletAddress.slice(
    42 - (length || 7),
    42
  )}`;

# NFT Staking & Marketplace DApp

> **Note:** This is a modified public version of a live client project, released for demonstration purposes. Proprietary business logic and sensitive data have been removed.

A modern Web3 DApp built with React, Vite, and Ethereum technologies, featuring NFT staking, a marketplace, raffles, and leaderboards.

## 🛠 Tech Stack

- **Core:** React 18, Vite, Redux Toolkit, React Router v6
- **Web3:** Web3.js, Wagmi, RainbowKit
- **UI:** Material-UI (MUI), JSS, Emotion

## ✨ Features

- **NFT Staking:** Earn rewards by staking NFTs.
- **Marketplace:** Buy/Sell NFTs securely.
- **Raffles:** Buy tickets and win prizes.
- **Leaderboard:** Track top stakers.
- **Wallet Auth:** Seamless login via MetaMask/RainbowKit.
- **Responsive:** Optimized for all devices.

## 🚀 Quick Start

### Prerequisites

- Node.js (v16+)
- Wallet Extension (e.g., MetaMask)

### Installation

1. **Clone & Install**

   ```bash
   git clone https://github.com/HelloMyNameIsSeth/Staking-Marketplace-Dapp-public.git
   cd Staking-Marketplace-Dapp-public
   npm install
   ```

2. **Configure Environment**

   ```bash
   cp .env.example .env
   ```

   *Edit `.env` with your API keys and endpoints.*

3. **Run Locally**

   ```bash
   npm run dev
   ```

   Access at `http://localhost:5173`

## 📂 Structure

- `src/components/`: Reusable UI components (Banner, Header, NftList).
- `src/pages/`: Main views (Stake, Marketplace, Leaderboard).
- `src/slices/`: Redux state management (User, Cart, NFT Collection).
- `src/services/`: API and Web3 integration.
- `src/config/`: App and HTTP configuration.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

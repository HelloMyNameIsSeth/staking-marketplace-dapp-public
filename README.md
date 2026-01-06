# Your Project - NFT Staking & Marketplace DApp

A modern Web3 decentralized application (DApp) built with React, Vite, and Web3 technologies. This platform enables users to stake NFTs, trade on a marketplace, participate in raffles, and view leaderboards.

## Features

- **NFT Staking** - Stake your NFTs to earn rewards
- **Marketplace** - Buy and sell NFTs with an intuitive interface
- **Raffle System** - Participate in NFT raffles and purchase raffle tickets
- **Leaderboard** - Track staking statistics and compete with other users
- **My Bag** - Manage your staked and unstaked NFTs
- **MetaMask Integration** - Seamless Web3 wallet connection
- **Multi-language Support** - i18n support for international users
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MetaMask browser extension (for Web3 interactions)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nft-dapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your configuration:
   ```
   VITE_APP_ENV=dev
   VITE_API_URL_PROD=https://your-api-domain.com/api/
   VITE_API_URL_DEV=https://dev-api-domain.com/api/
   VITE_API_KEY=your_api_key_here
   VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
   ```

## Initial Setup

After cloning this template, refer to [SETUP_CHECKLIST.md](SETUP_CHECKLIST.md) for a complete list of items you need to customize:

- API endpoints and credentials
- Admin wallet addresses
- Branding (colors, logos, titles)
- Website links and content
- Favicon and images

See the checklist for critical items that must be changed before deployment.

## Development

### Start Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Banner/
│   ├── Header/
│   ├── WalletConnect/
│   ├── NftList/
│   ├── Loader/
│   └── ...
├── pages/              # Page components (routes)
│   ├── Stake/
│   ├── Marketplace/
│   ├── Leaderboard/
│   ├── RaffleProducts/
│   └── ...
├── slices/             # Redux state slices
│   ├── user.slice.jsx
│   ├── cart.slice.jsx
│   ├── nftCollection.slice.jsx
│   └── ...
├── services/           # API and utility services
│   ├── metamask.service.jsx
│   ├── localStorage.service.js
│   └── ...
├── config/             # Configuration files
│   ├── http-common.js
│   ├── app.config.js
│   └── index.js
├── constants/          # App constants
├── data/               # Static data files
├── Helpers/            # Helper functions
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── assets/             # Images, fonts, styles
```

## Key Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **React Router v6** - Client-side routing
- **Material-UI (MUI)** - UI component library
- **Web3.js** - Ethereum blockchain interaction
- **wagmi** - React hooks for Web3
- **RainbowKit** - Wallet connection library
- **Axios** - HTTP client
- **i18next** - Internationalization
- **JSS** - CSS-in-JS styling

## Security & Environment Variables

**Important:** Never commit sensitive information to version control.

- `.env` - Your local environment variables (gitignored)
- `.env.example` - Template for environment variables
- API keys and secrets should only exist in `.env`
- Always use `import.meta.env.VITE_*` to access environment variables

## Web3 Features

### MetaMask Integration
The app uses `wagmi` and `@rainbow-me/rainbowkit` for Web3 wallet connections:
- Automatic wallet detection
- Multi-chain support
- User signature authentication

### API Communication
HTTP requests are configured in `src/config/http-common.js`:
- Automatic authorization token injection
- Configurable base URLs for dev/prod environments
- Error handling middleware

## State Management

Redux Toolkit is used for global state management with the following slices:
- **user** - User authentication and profile
- **cart** - Shopping cart items
- **nftCollection** - NFT data and collections
- **orders** - Order history and details
- **products** - Marketplace products
- **raffles** - Raffle participation and tickets

## Styling

The project uses multiple styling approaches:
- **Material-UI (MUI)** - Component library
- **JSS** - CSS-in-JS with `@mui/styles`
- **CSS Modules** - Scoped styling
- **Emotion** - CSS-in-JS library

## Deployment

The app is configured for deployment to Google App Engine:
- See `app.yaml` for App Engine configuration
- Build process: `npm run build`
- Static assets are served from `dist/assets`

## Available Routes

- `/` - Default layout/dashboard
- `/stake` - NFT staking page
- `/marketplace` - NFT marketplace
- `/marketplace/:id` - NFT details
- `/my-bag` - Your NFT collection
- `/leaderboard` - Staking leaderboard
- `/orders` - Order history
- `/products` - Product listing
- `/raffle-products` - Available raffles
- `/raffle-tickets` - Your raffle tickets
- `/how-it-works` - Instructions
- `/how-it-works-marketplace` - Marketplace guide

## Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Environment Variables Not Loading
- Ensure `.env` file exists in the root directory
- Restart the dev server after updating `.env`
- Variables must start with `VITE_` to be exposed

### MetaMask Connection Issues
- Ensure MetaMask extension is installed
- Check that you're on the correct network
- Clear browser cache and retry

## Build & Optimization

- **Bundle Analysis** - Use `npm run build` and check `dist/` folder size
- **Tree Shaking** - Unused code is automatically removed
- **Code Splitting** - Routes are automatically code-split for faster loading

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Last Updated:** January 2026
**Version:** 0.0.1

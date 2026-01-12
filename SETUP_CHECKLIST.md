# 🛠️ Setup Checklist

Quick start guide for configuring your NFT DApp.

## 1. Backend Setup (Critical)

First, ensure you have the backend running. This DApp requires the following backend service:

- **Repository:** [Marketplace Backend Public](https://github.com/HelloMyNameIsSeth/marketplace-backend-public)
- Ensure the backend is deployed and you have the API base URL ready. Not required to run the project however it is required to use the full functionality of the app.

## 2. Installation

Install project dependencies. **Note:** You must use `--legacy-peer-deps` due to some dependency conflicts.

```bash
npm install --legacy-peer-deps
```

## 3. Environment Configuration

Copy the example environment file and update it with your credentials:

```bash
cp .env.example .env
```

**Required Variables in `.env`:**

- `VITE_WALLET_CONNECT_PROJECT_ID`: **(Required)** Get a free Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/).
- `VITE_API_URL_PROD` / `VITE_API_URL_DEV`: Your backend API URLs.
- `VITE_API_KEY`: API key from your backend.
- `VITE_GOOGLE_CLIENT_ID`: For Google OAuth.
- `VITE_APP_ENV`: Set to `dev` or `prod`.

## 4. Running the Application

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## 5. Essential Customization

Update these files to match your project branding and logic:

- **Admin Wallets:** `src/data/adminWallets.js` (Add your team's wallet addresses).
- **Page Metadata:** `index.html` (Title, description).
- **Website Links:** `src/App.jsx` (Update external links in `PageLoad` components).
- **Branding:**
  - `public/favicon.png` (Project icon).
  - `src/assets/image/` (Banner images).
  - `src/assets/theme/index.js` (Colors and typography).

## 6. Deployment Check

Before deploying to production:

- [ ] Backend is live and accessible.
- [ ] `.env` variables are correctly set for production.
- [ ] Admin wallets are updated.
- [ ] Build passes: `npm run build`.

## 7. File Reference

| File | Purpose |
| --- | --- |
| `.env` | API keys & endpoints |
| `src/data/adminWallets.js` | Admin access control |
| `src/App.jsx` | Navigation links |
| `src/assets/theme/` | Styling and Colors |

# Setup Checklist - Things to Change When Using This Template

Use this checklist when you pull this project to set up your own NFT DApp. Go through each item and update with your specific values.

## CRITICAL (Must Do)

- [ ] **API Endpoints** - Update [.env](.env)
  ```
  VITE_API_URL_PROD=https://YOUR_PRODUCTION_API.com/api/
  VITE_API_URL_DEV=https://YOUR_DEV_API.com/api/
  ```
  Replace with your actual API domain

- [ ] **API Key** - Update [.env](.env)
  ```
  VITE_API_KEY=your_actual_api_key_here
  ```
  Get this from your backend/API provider

- [ ] **Google Client ID** - Update [.env](.env)
  ```
  VITE_GOOGLE_CLIENT_ID=your_actual_google_client_id
  ```
  Get this from Google Cloud Console if using Google OAuth

- [ ] **Admin Wallet Addresses** - Update [src/data/adminWallets.js](src/data/adminWallets.js)
  ```javascript
  export const adminWallets = [
    "0xyourWalletAddress1",
    "0xyourWalletAddress2",
    "0xyourWalletAddress3",
  ];
  ```
  Replace with your team's Ethereum wallet addresses

## IMPORTANT (Should Do)

- [ ] **Page Title** - Update [index.html](index.html) line 22
  ```html
  <title>Your Project Name - NFT Marketplace</title>
  ```

- [ ] **Website Links** - Update [src/App.jsx](src/App.jsx) around line 103-110
  ```jsx
  // Change these URLs to your actual website
  element={<PageLoad link={"https://your-website.com/"} />}
  element={<PageLoad link={"https://your-website.com/portal/history"} />}
  element={<PageLoad link={"https://your-website.com/#roadmap"} />}
  ```

- [ ] **Favicon** - Replace [public/favicon.png](public/favicon.png)
  - Add your project logo/icon as `favicon.png` in the public folder

- [ ] **Banner Image** - Check and replace banner image in [src/assets/image/](src/assets/image/)
  - Update any project-specific images

- [ ] **Project Name References** - Search for and update:
  - [ ] [package.json](package.json) - Already set to `"nft-dapp"`, update if you want a specific name
  - [ ] README.md - Update the main title if you want a specific project name
  - [ ] Any documentation references

## NICE TO HAVE (Can Do)

- [ ] **Theme Colors** - Update [src/assets/theme/index.js](src/assets/theme/index.js)
  - Customize primary/secondary colors
  - Update typography settings
  - Modify component styling

- [ ] **Global Styles** - Update [src/assets/styles/globalStyles.js](src/assets/styles/globalStyles.js)
  - Customize fonts, colors, spacing
  - Update CSS variables

- [ ] **Metadata** - Update [index.html](index.html) meta tags (lines 3-20)
  ```html
  <meta name="description" content="Your project description">
  <meta name="theme-color" content="your-color">
  ```

- [ ] **Static Data** - Review and update:
  - [ ] [src/data/headerMenu.json](src/data/headerMenu.json) - Navigation menu items
  - [ ] [src/data/menu.json](src/data/menu.json) - Additional menu items
  - [ ] [src/data/tabList.json](src/data/tabList.json) - Tab labels

- [ ] **Landing Page Content** - Update [src/pages/HowItWorks/index.jsx](src/pages/HowItWorks/index.jsx)
  - Replace placeholder content with your information

- [ ] **Marketplace Guide** - Update [src/pages/HowItWorksMarketplace/index.jsx](src/pages/HowItWorksMarketplace/index.jsx)
  - Update the website URL: `https://yourwebsite.com`
  - Update instructions/guide content

## OPTIONAL (Nice Polish)

- [ ] **Logo/Branding**
  - [ ] Update logo in Header component
  - [ ] Add your project colors to CSS
  - [ ] Update app name throughout

- [ ] **Social Links** - Check [src/components/SocialMedia/index.jsx](src/components/SocialMedia/index.jsx)
  - Update NFT collection address (currently has example address)
  - Update OpenSea, LooksRare, and Gem URLs to your collection

- [ ] **Empty States**
  - [ ] Check Loader component for styling
  - [ ] Update any placeholder messages

- [ ] **Error Messages**
  - [ ] Review toast notifications
  - [ ] Customize error messages to match your brand

## SECURITY CHECKLIST

- [ ] **Never commit `.env` file** - Already in [.gitignore](.gitignore)
- [ ] **Use `.env.example`** - Share with team, never the actual `.env`
- [ ] **Verify API Key security** - Ensure it's environment-variable-based, not hardcoded
- [ ] **Check admin wallets** - Make sure they're only trusted addresses
- [ ] **Review environment settings** - Confirm `VITE_APP_ENV` is correct (dev/prod)

## BEFORE DEPLOYING

- [ ] All `.env` variables are set and correct
- [ ] Admin wallets are correct
- [ ] API endpoints are production URLs (not dev)
- [ ] No hardcoded secrets in code
- [ ] Favicon and branding updated
- [ ] Page titles and metadata correct
- [ ] Website links point to correct domains
- [ ] Test with real wallet connection
- [ ] Build succeeds: `npm run build`
- [ ] No console errors in browser

## FILE-BY-FILE QUICK REFERENCE

| File | What to Change | Why |
|------|---|---|
| [.env](.env) | API endpoints, keys | Critical for functionality |
| [index.html](index.html) | Title, meta tags, favicon | Browser display & SEO |
| [src/App.jsx](src/App.jsx) | Website URLs in PageLoad | User navigation |
| [src/data/adminWallets.js](src/data/adminWallets.js) | Admin wallet addresses | Admin access control |
| [src/assets/theme/index.js](src/assets/theme/index.js) | Colors, typography | Branding |
| [src/pages/HowItWorks/index.jsx](src/pages/HowItWorks/index.jsx) | Instructions content | User guidance |
| [src/pages/HowItWorksMarketplace/index.jsx](src/pages/HowItWorksMarketplace/index.jsx) | Marketplace guide, URLs | User guidance |
| [public/favicon.png](public/favicon.png) | Logo image | Branding |
| [package.json](package.json) | Project name (optional) | npm package name |
| [README.md](README.md) | Project title, description | Documentation |

## COMMON ISSUES & SOLUTIONS

**Issue:** Environment variables not loading
- Solution: Restart dev server after editing `.env`

**Issue:** API calls failing
- Solution: Check `VITE_API_URL_*` endpoints are correct

**Issue:** Admin routes not accessible
- Solution: Verify your wallet address is in `adminWallets.js`

**Issue:** Website links not working
- Solution: Confirm URLs in `src/App.jsx` are accessible

**Issue:** Styling looks off**
- Solution: Check theme colors in `src/assets/theme/index.js`

---

## SETUP COMPLETE CONFIRMATION

When you've gone through this checklist, you should have:
- [ ] Your own API connected
- [ ] Your wallet(s) as admin
- [ ] Your branding and colors
- [ ] Your website links
- [ ] Your content/instructions
- [ ] Everything tested locally

**Ready to deploy!**

---
**Last Updated:** January 2026
**Template Version:** 1.0

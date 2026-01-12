import React from "react";
import { Provider } from "react-redux";
import "@rainbow-me/rainbowkit/styles.css";
import "@/assets/css/App.module.css";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import {
  DefaultLayout,
  Stake,
  Marketplace,
  NftDetails,
  Leaderboard,
  Orders,
  Products,
  HowItWorks,
  PageLoad,
  MyBag,
  Transfer,
  RaffleProducts,
  RaffleTickets,
  RaffleEntries,
  RaffleTicketDetails,
  HowItWorksMarketplace,
  MarketplaceItemDetails,
} from "@/pages";
import GlobalStyles from "@/assets/styles/globalStyles";
import { ROUTE_CLIENT } from "./constants/route.constants";
import { useTheme } from "@emotion/react";
import store from "./store";
import Jss from "@/Jss";
import "react-confirm-alert/src/react-confirm-alert.css";
import "react-toastify/dist/ReactToastify.css";
import { isAdminWallet } from "@/utils/isAdminWallet.js";
import { ToastContainer } from "react-toastify";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { WagmiConfig, configureChains, createClient } from "wagmi";

//************************************

const ProtectedAdminRoute = ({ store, redirectPath = "/Marketplace" }) => {
  const user = store.getState().user.user;
  if (!user || !user || !isAdminWallet(user)) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

const ProtectedUserRoute = ({ store, redirectPath = "/Marketplace" }) => {
  const user = store.getState().user.user;
  if (!user || !user.owner) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

const { chains, provider } = configureChains([mainnet], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "Your App Name",
  projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const App = () => {
  const theme = useTheme();
  return (
    <Provider store={store}>
      <Jss>
        <GlobalStyles />
        <ToastContainer pauseOnHover={false} />
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme({
              accentColor: "#A031F7",
              accentColorForeground: "white",
            })}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Routes>
                <Route
                  path={ROUTE_CLIENT.MAIN_PAGE}
                  element={<DefaultLayout />}
                >
                  <Route index element={<Stake />} />
                  <Route path={ROUTE_CLIENT.STAKE} element={<Stake />} />
                  <Route
                    path={ROUTE_CLIENT.HOME}
                    element={<PageLoad link={"https://yourwebsite.io/"} />}
                  />
                  <Route
                    path={ROUTE_CLIENT.HISTORY}
                    element={
                      <PageLoad
                        link={"https://yourwebsite.io/portal/history"}
                      />
                    }
                  />
                  <Route
                    path={ROUTE_CLIENT.ROADMAP}
                    element={
                      <PageLoad link={"https://yourwebsite.io/#roadmap"} />
                    }
                  />
                  <Route
                    path={ROUTE_CLIENT.MARKETPLACE}
                    element={<Marketplace />}
                  />
                  <Route
                    path={ROUTE_CLIENT.RaffleTickets}
                    element={<RaffleTickets />}
                  />
                  <Route
                    path={ROUTE_CLIENT.NFTDETAILS}
                    element={<NftDetails />}
                  />
                  <Route
                    path={ROUTE_CLIENT.LEADERBOARD}
                    element={<Leaderboard />}
                  />
                  <Route element={<ProtectedAdminRoute store={store} />}>
                    <Route
                      path={ROUTE_CLIENT.Products}
                      element={<Products />}
                    />
                    <Route
                      path={ROUTE_CLIENT.RaffleProducts}
                      element={<RaffleProducts />}
                    />
                  </Route>
                  <Route
                    path={ROUTE_CLIENT.HOWITWORKS}
                    element={<HowItWorks />}
                  />
                  <Route
                    path={ROUTE_CLIENT.HOWITWORKSMARKETPLACE}
                    element={<HowItWorksMarketplace />}
                  />
                  <Route
                    path={ROUTE_CLIENT.RaffleTicketDetails}
                    element={<RaffleTicketDetails />}
                  />
                  <Route
                    path={ROUTE_CLIENT.MarketplaceItemDetails}
                    element={<MarketplaceItemDetails />}
                  />

                  <Route element={<ProtectedUserRoute store={store} />}>
                    <Route
                      path={ROUTE_CLIENT.TRANSFER}
                      element={<Transfer />}
                    />
                    <Route
                      path={ROUTE_CLIENT.RaffleEntries}
                      element={<RaffleEntries />}
                    />
                    <Route path={ROUTE_CLIENT.MYBAG} element={<MyBag />} />
                    <Route path={ROUTE_CLIENT.Orders} element={<Orders />} />
                  </Route>
                </Route>
              </Routes>
            </LocalizationProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </Jss>
    </Provider>
  );
};

export default App;

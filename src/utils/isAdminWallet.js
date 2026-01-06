import { adminWallets } from "@/data/adminWallets.js";

export const isAdminWallet = (user) => {
  return user && adminWallets.includes(user.owner);
};

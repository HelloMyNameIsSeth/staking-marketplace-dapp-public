// *************************************************************

const ACCESS_TOKEN = "access_token";
const USER_DATA = "user_data";
const METAMASK_SIGNATURE = "metamask_signature";

// *************************************************************

class LocalStorageService {
  addUserLocalCarts = (data) => {
    localStorage.setItem("cart_items", JSON.stringify(data));
  };

  deleteItemUserCart = (cartItem) => {
    const cart = JSON.parse(localStorage.getItem("cart_items"))
      ? JSON.parse(localStorage.getItem("cart_items"))
      : [];
    const filteredCart = cart.filter((item) => item._id !== cartItem._id);
    console.log({ filteredCart, cart });
    localStorage.setItem("cart_items", JSON.stringify(filteredCart));

    return filteredCart;
  };

  getUserLocalCarts = () => {
    return localStorage.getItem("cart_items");
  };

  clearUserLocalCarts = () => {
    localStorage.removeItem("cart_items");
  };

  destroy = () => {
    localStorage.removeItem("cart_items");
  };

  addUserSignatureToken = (signatureToken) => {
    localStorage.setItem("signature_token", signatureToken);
  };
}

//   **************************************************************

export default new LocalStorageService();

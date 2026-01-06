// *************************************************************

const ACCESS_TOKEN = "access_token";
const USER_DATA = "user_data";
const METAMASK_SIGNATURE = "metamask_signature";

// *************************************************************

class SessionStorageService {
  saveMetamaskSignature(signature) {
    sessionStorage.setItem(METAMASK_SIGNATURE, signature);
  }
  deleteMetamaskSignature() {
    sessionStorage.removeItem(METAMASK_SIGNATURE);
  }

  getMetamaskSignature() {
    var signature = sessionStorage.getItem(METAMASK_SIGNATURE);
    return signature ? JSON.parse(signature) : "";
  }
}

//   **************************************************************

export default new SessionStorageService();

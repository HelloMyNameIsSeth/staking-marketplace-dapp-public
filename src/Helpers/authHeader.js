import { SessionStorageService } from "@/services";

// *********************************************************

export default function authHeader() {
  let auth = SessionStorageService.getMetamaskSignature();
  if (user && user.accessToken) {
    return {
      "x-access-token": auth.signature,
      Authorization: "Bearer " + auth.signature,
    };
  }
  return {};
}

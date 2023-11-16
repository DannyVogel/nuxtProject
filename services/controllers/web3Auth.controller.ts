import { WALLET_ADAPTERS } from "@web3auth/base";

// import { inject } from "vue";

// const web3auth = inject("web3auth");
// const provider = inject("provider");

export default class Web3AuthController {
  static async connect(web3auth, provider) {
    provider.value = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
      loginProvider: "google",
    });
    console.log(provider.value);
    if (web3auth.connected) {
      await this.getWid();
      await this.getUser();
    }
  }

  static async disconnect(web3auth) {
    return await web3auth.logout();
  }

  static async getUser() {
    const userInfo = await web3auth.getUserInfo();
    return userInfo;
  }

  static async setWid(wid: string) {}

  static async getWid(): Promise<string | null | undefined> {
    if (!provider) return null;

    const wid: string | null | undefined = await provider.request({
      method: "eth_private_key",
    });
    if (wid) console.log(wid);
  }
}

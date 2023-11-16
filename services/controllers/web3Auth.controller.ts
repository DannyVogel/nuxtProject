import { WALLET_ADAPTERS } from "@web3auth/base";

// import { inject } from "vue";

// const web3auth = inject("web3auth");
// const provider = inject("provider");

export default class Web3AuthController {
  static async connect(web3auth, provider) {
    provider.value = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
      loginProvider: "google",
    });
    console.log("connect provider", provider.value);
    console.log("web3auth connected", web3auth.connected);
    if (web3auth.connected) {
      await this.getWid(provider.value);
      await this.getUser(web3auth);
    }
  }

  static async disconnect(web3auth) {
    return await web3auth.logout();
  }

  static async getUser(web3auth) {
    const userInfo = await web3auth.getUserInfo();
    return userInfo;
  }

  static async setWid(wid: string) {}

  static async getWid(provider): Promise<string | null | undefined> {
    console.log("provider", provider, "provider.value", provider.value);
    if (!provider.value) return null;

    const wid: string | null | undefined = await provider.value.request({
      method: "eth_private_key",
    });
    if (wid) console.log(wid);
  }
}

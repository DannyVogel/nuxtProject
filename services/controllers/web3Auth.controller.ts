import { WALLET_ADAPTERS } from "@web3auth/base";

// import { inject } from "vue";

// const web3auth = inject("web3auth");
// const provider = inject("provider");
export default class Web3AuthController {
  static async connect() {
    const nuxtApp = useNuxtApp();
    nuxtApp.$provider.value = await nuxtApp.$web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
      loginProvider: "google",
    });
    console.log("connect provider", nuxtApp.$provider);
    console.log("web3auth connected", nuxtApp.$web3auth.connected);
    if (nuxtApp.$web3auth.connected) {
      await this.getWid();
      await this.getUser();
    }
  }

  static async disconnect() {
    const nuxtApp = useNuxtApp();
    return await nuxtApp.$web3auth.logout();
  }

  static async getUser() {
    const nuxtApp = useNuxtApp();
    const userInfo = await nuxtApp.$web3auth.getUserInfo();
    return userInfo;
  }

  static async setWid(wid: string) {}

  static async getWid(): Promise<string | null | undefined> {
    const nuxtApp = useNuxtApp();
    console.log("provider", nuxtApp.$provider, "nuxtApp.$provider", nuxtApp.$provider.value);
    if (!nuxtApp.$provider.value) return null;

    const wid: string | null | undefined = await nuxtApp.$provider.value.request({
      method: "eth_private_key",
    });
    if (wid) console.log(wid);
  }
}

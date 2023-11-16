// ~/plugins/web3auth.js

import { ref } from "vue";
import { Web3AuthNoModal } from "@web3auth/no-modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { CHAIN_NAMESPACES, type IProvider } from "@web3auth/base";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  if (!process.client) return;
  const provider = ref<IProvider | null>(null);

  const chainConfig = {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x89",
    rpcTarget: "https://rpc.ankr.com/polygon",
    displayName: "Polygon Mainnet",
    blockExplorer: "https://polygon.etherscan.io",
    ticker: "MATIC",
    tickerName: "Polygon",
  };

  // Initialize within setup()
  const web3auth = new Web3AuthNoModal({
    clientId:
      "BAk98waKQnfCnZRGY164QlKIrLRPfM6vYfe2LM7J7kO8rJV3wqz4WZsC9y5WVBjtiOsY2SJj6WD5z3uoFwWY7dw", // Get your Client ID from the Web3Auth Dashboard
    web3AuthNetwork: "sapphire_devnet", // Web3Auth Network
    chainConfig: chainConfig,
  });

  const privateKeyProvider = new EthereumPrivateKeyProvider({
    config: { chainConfig },
  });
  const openloginAdapter = new OpenloginAdapter({
    privateKeyProvider: privateKeyProvider,
    adapterSettings: {
      network: "sapphire_mainnet",
      uxMode: "popup",
      whiteLabel: {
        appName: "Your app Name",
        logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
        logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
        defaultLanguage: "en",
      },
    },
  });
  web3auth.configureAdapter(openloginAdapter);

  const init = async () => {
    try {
      await web3auth.init();
      provider.value = web3auth.provider;
      console.log("provider", provider.value);
    } catch (error) {
      console.error(error);
    }
  };
  init();
  nuxtApp.provide("web3auth", web3auth);
  nuxtApp.provide("provider", provider);
});

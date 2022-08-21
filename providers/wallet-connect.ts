import QRCode from "qrcode";
import { WalletConnectProvider } from "@elrondnetwork/erdjs-wallet-connect-provider";

const bridgeUrl = "https://bridge.walletconnect.org";

async function openModal(connectorUri: string) {
  // const svg = await QRCode.toString(connectorUri, { type: "svg" });

  // $("#MyWalletConnectQRContainer").html(svg);
  // $("#MyWalletConnectModal").modal("show");
}

function closeModal() {
  // $("#MyWalletConnectModal").modal("hide");
}

export default class WalletConnect {
  provider: WalletConnectProvider;

  constructor() {
    this.provider = new WalletConnectProvider(bridgeUrl, this.prepareCallbacks());
  }

  prepareCallbacks() {
    const self = this;

    return {
      async onClientLogin() {
        closeModal();
        const address = await self.provider.getAddress();
        // eslint-disable-next-line no-alert
        alert(`onClientLogin(), address: ${address}`);
      },
      async onClientLogout() {
        // eslint-disable-next-line no-alert
        alert("onClientLogout()");
      },
    };
  }

  async login() {
    await this.provider.init();
    const connectorUri = await this.provider.login();
    await openModal(connectorUri);
  }

  async logout() {
    await this.provider.init();
    await this.provider.logout();
  }
}

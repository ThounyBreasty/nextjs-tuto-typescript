import { ExtensionProvider } from "@elrondnetwork/erdjs-extension-provider";
import { Transaction } from "@elrondnetwork/erdjs";

// eslint-disable-next-line import/prefer-default-export
export class Extension {
  provider: ExtensionProvider;

  constructor() {
    this.provider = ExtensionProvider.getInstance();
  }

  async login() {
    await this.provider.init();
    const address = await this.provider.login();

    // eslint-disable-next-line no-alert
    alert(`Address: ${address}`);
  }

  async logout() {
    await this.provider.init();
    await this.provider.logout();
  }
}

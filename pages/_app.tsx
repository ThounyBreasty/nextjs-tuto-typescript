import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ApiNetworkProvider } from "@elrondnetwork/erdjs-network-providers";
import "../styles/global.scss";

async function getNetworkConfig() {
  const networkProvider = new ApiNetworkProvider("https://devnet-api.elrond.com");
  const networkConfig = await networkProvider.getNetworkConfig();
  console.log(networkConfig);
}

export default function App({ Component, pageProps }: AppProps) {
  getNetworkConfig();
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

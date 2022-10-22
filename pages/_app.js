import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
import '../styles/app.css'
/**
 * The chain ID 5 represents the Goerli Test Network 
 * The `injected` connector is a web3 connection method used by Metamask
 */
const supportedChainIds = [5]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
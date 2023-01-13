import { Goerli } from '@usedapp/core';

export const ROUTER_ADDRESS = '0xFe2C0f41440A2F81CeEa510A2A70b5eFA339c39B'; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: 'https://eth-goerli.g.alchemy.com/v2/DSyYrvCPIHnGYrKV3M8Uw3HI5bzRZ8HA',
  },
};
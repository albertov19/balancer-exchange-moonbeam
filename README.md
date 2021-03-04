# Balancer Exchange for Moonbeam

This is forked from the original [balancer-exchange repository](https://github.com/balancer-labs/balancer-exchange). It was adapted so it works with Moonbase Alpha and a Moonbeam Standalone Node

## Getting Started

Copy the .env.example file:

```
cp .env.example .env
```

Double check the data on the file and modify accordingly (port for standalone for example). Configure supported network (by default was set to Moonbase Alpha)

```
# Supported Network ID (e.g. mainnet = 1, rinkeby = 4, kovan = 42)
REACT_APP_SUPPORTED_NETWORK_ID="1287"
```

Depending on the Network you selected you need to rename the `allPublicPools*.json` file located in `./src` to the one of the network you are trying to run. (Once Moonbeam supports TheGraph and there is a Balancer SubGraph running, this should not be necessary)

Install packages:

```
yarn install
```

Build and/or run locally

```
yarn build
yarn start
```

## Adding Custom Tokens to the Default List

If you want to deploy your own ERC-20 Tokens you can do so. You need to modify the following files located in the `./node_modules/@balancer-labs/assets/generated/dex` - In there, modify the file in accordance to the network you want to add the ERC20 tokens to, following the same structure as for other tokens there.

Also, add the tokens to the `listed.tokenlist.json` and `vetted.tokenlist.json` files (it is not used in this repo but it might be used in other balancer repos)

## Adding your Custom Pools

While TheGraph is not supported, we work with the `allPublicPools` JSON file described before. Add the pools you deploy to that file and restart the front end.

----


Have fun :) 

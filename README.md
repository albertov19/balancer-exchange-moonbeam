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

Build and/or run locally

```
yarn build
yarn start
```


Have fun :) 

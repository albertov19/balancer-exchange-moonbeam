import registry from '@balancer-labs/assets/generated/dex/registry.homestead.json';
import registryKovan from '@balancer-labs/assets/generated/dex/registry.kovan.json';
import registryMoonbase from '@balancer-labs/assets/generated/dex/registry.moonbase.json';
import registryStandalone from '@balancer-labs/assets/generated/dex/registry.standalone.json';
import { getSupportedChainName } from '../provider/connectors';

function getContracts(chainName: string) {
    if (chainName === 'mainnet') {
        return {
            bFactory: '0x9424B1412450D0f8Fc2255FAf6046b98213B76Bd',
            proxy: '0x3E66B66Fd1d0b02fDa6C811Da9E0547970DB2f21',
            weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            multicall: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
            sorMulticall: '0x514053aCEC7177e277B947b1EBb5C08AB4C4580E',
        };
    }
    if (chainName === 'kovan') {
        return {
            bFactory: '0x8f7F78080219d4066A8036ccD30D588B416a40DB',
            proxy: '0x2641f150669739986CDa3ED6860DeD44BC3Cda5d',
            weth: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
            multicall: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
            sorMulticall: '0x71c7f1086aFca7Aa1B0D4d73cfa77979d10D3210',
        };
    }
    if (chainName === 'moonbase') {
        return {
            bFactory: '0x7B1144AE2EDbC6bA7F33BAc98F2F2fC190eA8477',
            proxy: '0x910A314Ea2d1d92055bE95DF6e32a66DC305ca1B',
            weth: '0x930B233d616c3Be70f274A679c37a08a1803c3D5',
            multicall: '0x1163ff0064ad9203E0a4D36e04bF12816154BdbB',
            sorMulticall: '0xaF6e0B7e2df9819FAF54064cb7Eb93d224ab00A8',
        };
    }
    if (chainName === 'standalone') {
        return {
            bFactory: '0xC2Bf5F29a4384b1aB0C063e1c666f02121B6084a',
            proxy: '0xfE5D3c52F7ee9aa32a69b96Bfbb088Ba0bCd8EfC',
            weth: '0xBb0CC0fb3e0c06725c67167501f850B4900D6DB5',
            multicall: '0x92496871560a01551E1B4fD04540D7A519D5C19e',
            sorMulticall: '0x63A1519eE99d1121780FFfa1726Ed2eCc6d1611B',
        };
    }
    return {};
}

function getAssets(chainName: string) {
    if (chainName === 'mainnet') {
        return registry;
    }
    if (chainName === 'kovan') {
        return registryKovan;
    }
    if (chainName === 'moonbase') {
        return registryMoonbase;
    }
    if (chainName === 'standalone') {
        return registryStandalone;
    }
    return {
        tokens: {},
        untrusted: [],
    };
}

const chainName = getSupportedChainName();
const contracts = getContracts(chainName);
const assets = getAssets(chainName);

export { contracts, assets };

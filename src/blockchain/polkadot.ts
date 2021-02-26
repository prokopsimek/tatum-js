import axios from 'axios';
import {TATUM_API_URL} from '../constants';
import {PolkadotAccount, PolkadotTransaction, TransactionHash} from '../model';
import {PolkadotBlock} from '../model/response/polkadot/PolkadotBlock';

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/PolkadotBroadcast" target="_blank">Tatum API documentation</a>
 */
export const polkadotBroadcast = async (txData: string, signatureId?: string): Promise<TransactionHash> => {
    return (await axios.post(`${process.env.TATUM_API_URL || TATUM_API_URL}/v3/polkadot/broadcast`,
        {txData, signatureId},
        {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/PolkadotGetCurrentBlock" target="_blank">Tatum API documentation</a>
 */
export const polkadotGetCurrentBlock = async (): Promise<{ testnet: boolean, blockNumber: number }> => {
    return (await axios.get(`${process.env.TATUM_API_URL || TATUM_API_URL}/v3/polkadot/current`, {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/PolkadotGetMetadata" target="_blank">Tatum API documentation</a>
 */
export const polkadotGetMetadata = async (): Promise<{ data: string }> => {
    return (await axios.get(`${process.env.TATUM_API_URL || TATUM_API_URL}/v3/polkadot/metadata`, {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/PolkadotGetAccountNonce" target="_blank">Tatum API documentation</a>
 */
export const polkadotGetNonce = async (address: string): Promise<number> => {
    return (await axios.get(`${process.env.TATUM_API_URL || TATUM_API_URL}/v3/polkadot/${address}/nonce`, {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/PolkadotGetRuntimeVersion" target="_blank">Tatum API documentation</a>
 */
export const polkadotGetRuntimeVersion = async (): Promise<any> => {
    return (await axios.get(`${process.env.TATUM_API_URL || TATUM_API_URL}/v3/polkadot/runtime`, {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/PolkadotGetBlockHash" target="_blank">Tatum API documentation</a>
 */
export const polkadotGetBlockHash = async (number: number): Promise<{ blockHash: string }> => {
    return (await axios.get(`${process.env.TATUM_API_URL || TATUM_API_URL}/v3/polkadot/block/${number}/hash`, {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/PolkadotGetBlock" target="_blank">Tatum API documentation</a>
 */
export const polkadotGetBlock = async (hash: string): Promise<PolkadotBlock> => {
    return (await axios.get(`${process.env.TATUM_API_URL || TATUM_API_URL}/v3/polkadot/block/${hash}`, {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/PolkadotGetTransaction" target="_blank">Tatum API documentation</a>
 */
export const polkadotGetTransaction = async (hash: string): Promise<PolkadotTransaction> => {
    return (await axios.get(`${process.env.TATUM_API_URL || TATUM_API_URL}/v3/polkadot/transaction/${hash}`, {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/PolkadotGetAccount" target="_blank">Tatum API documentation</a>
 */
export const polkadotGetAccount = async (address: string): Promise<PolkadotAccount> => {
    return (await axios.get(`${process.env.TATUM_API_URL || TATUM_API_URL}/v3/polkadot/account/${address}`, {headers: {'x-api-key': process.env.TATUM_API_KEY}})).data;
};

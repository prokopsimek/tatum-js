import {Keyring} from '@polkadot/api';
import {TypeRegistry} from '@polkadot/types';
import {cryptoWaitReady} from '@polkadot/util-crypto';
import {
    createSignedTx,
    createSigningPayload,
    methods,
    POLKADOT_SS58_FORMAT,
    WESTEND_SS58_FORMAT
} from '@substrate/txwrapper';
import {
    polkadotBroadcast,
    polkadotGetBlockHash,
    polkadotGetCurrentBlock,
    polkadotGetMetadata,
    polkadotGetNonce,
    polkadotGetRuntimeVersion
} from '../blockchain';
import {DOT_DERIVATION_URI} from '../constants';
import {TransferPolkadot} from '../model';

export const sendPolkadotTransaction = async (testnet: boolean, body: TransferPolkadot) => {
    const tx = await preparePolkadotSignedTransaction(testnet, body);
    return polkadotBroadcast(tx as unknown as string);
};

export const preparePolkadotSignedTransaction = async (testnet: boolean, body: TransferPolkadot) => {
    const registry = new TypeRegistry();
    await cryptoWaitReady();
    const keypair = new Keyring({type: 'sr25519', ss58Format: testnet ? WESTEND_SS58_FORMAT : POLKADOT_SS58_FORMAT});
    const pair = keypair.addFromUri(body.mnemonic + DOT_DERIVATION_URI + '/' + body.index);
    const {blockNumber} = await polkadotGetCurrentBlock();
    const {blockHash} = await polkadotGetBlockHash(blockNumber);
    const {blockHash: genesisHash} = await polkadotGetBlockHash(0);
    const {data: metadataRpc} = await polkadotGetMetadata();
    const nonce = await polkadotGetNonce(pair.address);
    const {specVersion, transactionVersion} = await polkadotGetRuntimeVersion();

    const unsigned = methods.balances.transferKeepAlive(
        {
            value: body.amount,
            dest: body.to
        },
        {
            address: pair.address,
            blockHash,
            blockNumber,
            genesisHash,
            metadataRpc,
            nonce,
            specVersion,
            transactionVersion,
            validityPeriod: 240
        },
        {metadataRpc, registry}
    );
    const signingPayload = createSigningPayload(unsigned, {registry});
    const {signature} = registry
        .createType('ExtrinsicPayload', signingPayload, {
            version: transactionVersion,
        })
        .sign(pair);
    return createSignedTx(unsigned, signature, {registry, metadataRpc});
};

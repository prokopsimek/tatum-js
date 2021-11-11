import { ClassType } from 'class-transformer/ClassTransformer'
import Web3 from 'web3'
import { Currency, listing } from '@tatumio/tatum-core'
import {
  helperBroadcastTx as celoBroadcast,
  helperGetWeb3Client as getCeloClient,
  helperPrepareSCCall as celoHelperPrepareSCCall,
} from '@tatumio/tatum-celo'
import {
  helperBroadcastTx as oneBroadcast,
  helperGetWeb3Client as prepareOneClient,
  helperPrepareSCCall as oneHelperPrepareSCCall,
} from '@tatumio/tatum-one'
import {
  helperBroadcastTx as ethBroadcast,
  helperGetWeb3Client as getClient,
  helperPrepareSCCall as ethHelperPrepareSCCall,
} from '@tatumio/tatum-eth'
import {
  helperBroadcastTx as bscBroadcast,
  helperGetWeb3Client as getBscClient,
  helperPrepareSCCall as bscHelperPrepareSCCall,
} from '@tatumio/tatum-bsc'
import {
  helperBroadcastTx as polygonBroadcast,
  helperGetWeb3Client as preparePolygonClient,
  helperPrepareSCCall as polygonHelperPrepareSCCall,
} from '@tatumio/tatum-polygon'
import { helperBroadcastTx as tronBroadcast } from '@tatumio/tatum-tron'

export const helperBroadcastTx = async (chain: Currency, txData: string, signatureId?: string) => {
  switch (chain) {
    case Currency.CELO:
      return await celoBroadcast(txData, signatureId)
    case Currency.ONE:
      return await oneBroadcast(txData, signatureId)
    case Currency.ETH:
      return await ethBroadcast(txData, signatureId)
    case Currency.BSC:
      return await bscBroadcast(txData, signatureId)
    case Currency.MATIC:
      return await polygonBroadcast(txData, signatureId)
    case Currency.TRON:
      return await tronBroadcast(txData, signatureId)
    default:
      throw new Error('Unsupported chain')
  }
}

export const helperGetWeb3Client = (testnet: boolean, chain: Currency, provider?: string): Web3 => {
  switch (chain) {
    case Currency.CELO:
      return getCeloClient(provider)
    case Currency.ONE:
      return prepareOneClient(testnet, provider)
    case Currency.ETH:
      return getClient(provider)
    case Currency.BSC:
      return getBscClient(provider)
    case Currency.MATIC:
      return preparePolygonClient(testnet, provider)
    default:
      throw new Error('Unsupported chain')
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const helperPrepareSCCall = async (
  testnet: boolean,
  body: any,
  clazz: ClassType<object>,
  methodName: string,
  params: any[],
  methodSig?: string,
  provider?: string,
  abi: any[] = listing.abi
) => {
  switch (body.chain) {
    case Currency.CELO:
      return await celoHelperPrepareSCCall(body, methodName, params, provider, abi)
    case Currency.ONE:
      return await oneHelperPrepareSCCall(body, methodName, params, provider, abi)
    case Currency.ETH:
      return await ethHelperPrepareSCCall(body, methodName, params, provider, abi)
    case Currency.BSC:
      return await bscHelperPrepareSCCall(body, methodName, params, provider, abi)
    case Currency.MATIC:
      return await polygonHelperPrepareSCCall(body, methodName, params, provider, abi)
    default:
      throw new Error('Unsupported combination of inputs.')
  }
}
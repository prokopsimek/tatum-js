export type AuctionFn =
    'deployAuction'
    | 'prepareDeployAuction'
    | 'prepareAuctionUpdateFee'
    | 'prepareAuctionUpdateFeeRecipient'
    | 'prepareAuctionApproveNftTransfer'
    | 'prepareAuctionApproveErc20Transfer'
    | 'prepareAuctionCreate'
    | 'prepareAuctionBid'
    | 'prepareAuctionCancel'
    | 'prepareAuctionSettle'
    | 'sendAuctionUpdateFee'
    | 'sendAuctionUpdateFeeRecipient'
    | 'sendAuctionApproveNftTransfer'
    | 'sendAuctionApproveErc20Transfer'
    | 'sendAuctionCreate'
    | 'sendAuctionBid'
    | 'sendAuctionCancel'
    | 'sendAuctionSettle'

export type NFTFn = 'mintNFT'
    | 'deployNFT'
    | 'createNFT'
    | 'mintNFTWithUri'
    | 'mintMultipleNFTWithUri'
    | 'burnNFT'
    | 'updateCashbackForAuthorNFT'
    | 'transferNFT'

export type CustodialWalletFn =
    'generateCustodialWallet'
    | 'prepareCustodialWallet'
    | 'sendCustodialWallet'
    | 'prepareTransferFromCustodialWallet'
    | 'sendTransferFromCustodialWallet'
    | 'prepareBatchTransferFromCustodialWallet'
    | 'sendBatchTransferFromCustodialWallet'
    | 'prepareApproveFromCustodialWallet'
    | 'sendApproveFromCustodialWallet'
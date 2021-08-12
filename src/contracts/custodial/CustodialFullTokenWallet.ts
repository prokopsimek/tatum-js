export const abi = [
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'previousOwner',
                'type': 'address'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'OwnershipTransferred',
        'type': 'event'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256[]',
                'name': '',
                'type': 'uint256[]'
            },
            {
                'internalType': 'uint256[]',
                'name': '',
                'type': 'uint256[]'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC1155BatchReceived',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC1155Received',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC721Received',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'owner',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'tokenAddress',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'contractType',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'recipient',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': 'tokenId',
                'type': 'uint256'
            }
        ],
        'name': 'transfer',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'stateMutability': 'payable',
        'type': 'receive'
    }
];
export const bytecode = '0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b6109688061007d6000396000f3fe6080604052600436106100745760003560e01c8063bc197c811161004e578063bc197c81146100ef578063f23a6e611461010f578063f2881e211461012f578063f2fde38b146101425761007b565b8063150b7a0214610080578063715018a6146100b65780638da5cb5b146100cd5761007b565b3661007b57005b600080fd5b34801561008c57600080fd5b506100a061009b36600461065d565b610162565b6040516100ad919061082b565b60405180910390f35b3480156100c257600080fd5b506100cb610172565b005b3480156100d957600080fd5b506100e2610204565b6040516100ad9190610793565b3480156100fb57600080fd5b506100a061010a3660046105b7565b610213565b34801561011b57600080fd5b506100a061012a3660046106c3565b610224565b6100cb61013d366004610726565b610235565b34801561014e57600080fd5b506100cb61015d366004610596565b6103c9565b630a85bd0160e11b949350505050565b61017a610489565b6001600160a01b031661018b610204565b6001600160a01b0316146101ba5760405162461bcd60e51b81526004016101b1906108bd565b60405180910390fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b63bc197c8160e01b95945050505050565b63f23a6e6160e01b95945050505050565b836102c05760405163a9059cbb60e01b81526001600160a01b0386169063a9059cbb906102689086908690600401610812565b602060405180830381600087803b15801561028257600080fd5b505af1158015610296573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ba9190610773565b506103c2565b836001141561033057604051635c46a7ef60e11b81526001600160a01b0386169063b88d4fde906102f9903090879086906004016107a7565b600060405180830381600087803b15801561031357600080fd5b505af1158015610327573d6000803e3d6000fd5b505050506103c2565b836002141561036b57604051637921219560e11b81526001600160a01b0386169063f242432a906102f99030908790869088906004016107da565b83600314156103aa576040516001600160a01b0384169083156108fc029084906000818181858888f193505050501580156102ba573d6000803e3d6000fd5b60405162461bcd60e51b81526004016101b190610840565b5050505050565b6103d1610489565b6001600160a01b03166103e2610204565b6001600160a01b0316146104085760405162461bcd60e51b81526004016101b1906108bd565b6001600160a01b03811661042e5760405162461bcd60e51b81526004016101b190610877565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b80356001600160a01b03811681146104a457600080fd5b919050565b600082601f8301126104b9578081fd5b8135602067ffffffffffffffff8211156104d5576104d561091c565b8082026104e38282016108f2565b8381528281019086840183880185018910156104fd578687fd5b8693505b8584101561051f578035835260019390930192918401918401610501565b50979650505050505050565b600082601f83011261053b578081fd5b813567ffffffffffffffff8111156105555761055561091c565b610568601f8201601f19166020016108f2565b81815284602083860101111561057c578283fd5b816020850160208301379081016020019190915292915050565b6000602082840312156105a7578081fd5b6105b08261048d565b9392505050565b600080600080600060a086880312156105ce578081fd5b6105d78661048d565b94506105e56020870161048d565b9350604086013567ffffffffffffffff80821115610601578283fd5b61060d89838a016104a9565b94506060880135915080821115610622578283fd5b61062e89838a016104a9565b93506080880135915080821115610643578283fd5b506106508882890161052b565b9150509295509295909350565b60008060008060808587031215610672578384fd5b61067b8561048d565b93506106896020860161048d565b925060408501359150606085013567ffffffffffffffff8111156106ab578182fd5b6106b78782880161052b565b91505092959194509250565b600080600080600060a086880312156106da578081fd5b6106e38661048d565b94506106f16020870161048d565b93506040860135925060608601359150608086013567ffffffffffffffff81111561071a578182fd5b6106508882890161052b565b600080600080600060a0868803121561073d578081fd5b6107468661048d565b94506020860135935061075b6040870161048d565b94979396509394606081013594506080013592915050565b600060208284031215610784578081fd5b815180151581146105b0578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260806060820181905260009082015260a00190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c00190565b6001600160a01b03929092168252602082015260400190565b6001600160e01b031991909116815260200190565b60208082526019908201527f556e737570706f7274656420636f6e7472616374207479706500000000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60405181810167ffffffffffffffff811182821017156109145761091461091c565b604052919050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220d26a01f3274be57e53dadfa73d20d148495a943a82744f0c549d2411759ffa9864736f6c63430008000033';
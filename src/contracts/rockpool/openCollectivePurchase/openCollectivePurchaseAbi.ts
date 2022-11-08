export const openCollectivePurchaseContractAbi = [
  {
    inputs: [
      { internalType: 'uint256', name: '_fee', type: 'uint256' },
      { internalType: 'address payable', name: '_vault', type: 'address' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'uint256', name: '_listingId', type: 'uint256' }],
    name: 'Acquired',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: '_type', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: '_fractionalizer', type: 'address' }
    ],
    name: 'AddFractionalizer',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: '_listingId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: '_buyer', type: 'address' },
      { indexed: false, internalType: 'uint256', name: '_amount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: '_fractionsCount', type: 'uint256' }
    ],
    name: 'Claim',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: '_listingId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: '_buyer', type: 'address' },
      { indexed: false, internalType: 'uint256', name: '_amount', type: 'uint256' }
    ],
    name: 'Join',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: '_listingId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: '_buyer', type: 'address' },
      { indexed: false, internalType: 'uint256', name: '_amount', type: 'uint256' }
    ],
    name: 'Leave',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: '_listingId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: '_creator', type: 'address' }
    ],
    name: 'Listed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: '_listingId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: '_seller', type: 'address' },
      { indexed: false, internalType: 'uint256', name: '_netAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: '_feeAmount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: '_creatorFeeAmount', type: 'uint256' }
    ],
    name: 'Payout',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'uint256', name: '_listingId', type: 'uint256' }],
    name: 'Relisted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: '_listingId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: '_fee', type: 'uint256' }
    ],
    name: 'UpdateCreatorFee',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint256', name: '_fee', type: 'uint256' }],
    name: 'UpdateFee',
    type: 'event'
  },
  {
    inputs: [],
    name: 'FRACTIONS_COUNT',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'FRACTIONS_DECIMALS',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_listingId', type: 'uint256' },
      { internalType: 'uint256', name: '_minReservePrice', type: 'uint256' }
    ],
    name: 'acquire',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: '_type', type: 'bytes32' },
      { internalType: 'address', name: '_fractionalizer', type: 'address' }
    ],
    name: 'addFractionalizer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_listingId', type: 'uint256' },
      { internalType: 'address', name: '_buyer', type: 'address' }
    ],
    name: 'buyerFractionsCount',
    outputs: [{ internalType: 'uint256', name: '_fractionsCount', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_listingId', type: 'uint256' },
      { internalType: 'address', name: '_buyer', type: 'address' }
    ],
    name: 'buyers',
    outputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_listingId', type: 'uint256' },
      { internalType: 'address payable', name: '_buyer', type: 'address' }
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'creators',
    outputs: [
      { internalType: 'address payable', name: 'creator', type: 'address' },
      { internalType: 'uint256', name: 'fee', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'fee',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_listingId', type: 'uint256' },
      { internalType: 'uint256', name: '_minReservePrice', type: 'uint256' },
      { internalType: 'address payable', name: '_to', type: 'address' },
      { internalType: 'bytes', name: '_data', type: 'bytes' }
    ],
    name: 'flashAcquire',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    name: 'fractionalizers',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_listingId', type: 'uint256' },
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
      { internalType: 'uint256', name: '_maxReservePrice', type: 'uint256' }
    ],
    name: 'join',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_listingId', type: 'uint256' }],
    name: 'leave',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '_collection', type: 'address' },
      { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
      { internalType: 'bool', name: '_listed', type: 'bool' },
      { internalType: 'uint256', name: '_fee', type: 'uint256' },
      { internalType: 'address', name: '_paymentToken', type: 'address' },
      { internalType: 'uint256', name: '_priceMultiplier', type: 'uint256' },
      { internalType: 'bytes', name: '_extra', type: 'bytes' }
    ],
    name: 'list',
    outputs: [{ internalType: 'uint256', name: '_listingId', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'listingCount',
    outputs: [{ internalType: 'uint256', name: '_count', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'listings',
    outputs: [
      { internalType: 'enum OpenCollectivePurchase.State', name: 'state', type: 'uint8' },
      { internalType: 'address payable', name: 'seller', type: 'address' },
      { internalType: 'address', name: 'collection', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'bool', name: 'listed', type: 'bool' },
      { internalType: 'address', name: 'paymentToken', type: 'address' },
      { internalType: 'uint256', name: 'reservePrice', type: 'uint256' },
      { internalType: 'uint256', name: 'priceMultiplier', type: 'uint256' },
      { internalType: 'bytes', name: 'extra', type: 'bytes' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'fractionsCount', type: 'uint256' },
      { internalType: 'address', name: 'fractions', type: 'address' },
      { internalType: 'uint256', name: 'fee', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'bytes', name: '', type: 'bytes' }
    ],
    name: 'onERC721Received',
    outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_listingId', type: 'uint256' }],
    name: 'payout',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '_token', type: 'address' },
      { internalType: 'address payable', name: '_to', type: 'address' }
    ],
    name: 'recoverLostFunds',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '_collection', type: 'address' },
      { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
      { internalType: 'address', name: '_to', type: 'address' }
    ],
    name: 'recoverLostItem',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_listingId', type: 'uint256' }],
    name: 'relist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_listingId', type: 'uint256' },
      { internalType: 'address payable[]', name: '_buyers', type: 'address[]' }
    ],
    name: 'relistPayoutAndClaim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [{ internalType: 'uint256', name: '_listingId', type: 'uint256' }],
    name: 'sellerPayout',
    outputs: [
      { internalType: 'uint256', name: '_netAmount', type: 'uint256' },
      { internalType: 'uint256', name: '_feeAmount', type: 'uint256' },
      { internalType: 'uint256', name: '_creatorFeeAmount', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_listingId', type: 'uint256' },
      { internalType: 'uint256', name: '_fee', type: 'uint256' }
    ],
    name: 'setCreatorFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_fee', type: 'uint256' }],
    name: 'setFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_listingId', type: 'uint256' }],
    name: 'status',
    outputs: [{ internalType: 'string', name: '_status', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'vault',
    outputs: [{ internalType: 'address payable', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  }
]

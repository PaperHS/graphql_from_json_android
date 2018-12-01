query accountByAddress(address: String!, addressType: String!){
  accountByAddress(address: $address, addressType: $addressType) {
    address
    addressType
    alias
    accountBasicInfo {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
    }
    group {
      description
      id
      name
    }
  }
}

query assetByAccount(address: String!, addressType: String!, assetId: String!){
  assetByAccount(address: $address, addressType: $addressType, assetId: $assetId) {
    accountAddress
    addressType
    assetId
    balance
    assetType {
      decimals
      id
      logo
      name
      symbol
      price {
        fiat
        symbol
        value
      }
    }
    transactions {
      data {
        addressType
        hash
        note
        accountingState {
          isSettled
          payableOrReceivable
        }
        relatedTransactions {
          hash
          note
        }
        tags {
          id
          name
          type
        }
        transactionBasicInfo {
          blockHash
          blockHeight
          fromAddress
          gasLimit
          gasPrice
          gasUsed
          hash
          priceInUsd
          time
          toAddress
          total
          txType
        }
      }
      page {
        cursor
        next
        total
      }
    }
  }
}

query assetsByAccount(address: String!, addressType: String!){
  assetsByAccount(address: $address, addressType: $addressType) {
    assets {
      accountAddress
      addressType
      assetId
      balance
      assetType {
        decimals
        id
        logo
        name
        symbol
        price {
          fiat
          symbol
          value
        }
      }
      transactions {
        data {
          addressType
          hash
          note
          accountingState {
            isSettled
            payableOrReceivable
          }
          relatedTransactions {
            hash
            note
          }
          tags {
            id
            name
            type
          }
          transactionBasicInfo {
            blockHash
            blockHeight
            fromAddress
            gasLimit
            gasPrice
            gasUsed
            hash
            priceInUsd
            time
            toAddress
            total
            txType
          }
        }
        page {
          cursor
          next
          total
        }
      }
    }
  }
}

query insightForAsset(address: String!, addressType: String!, assetId: String!){
  insightForAsset(address: $address, addressType: $addressType, assetId: $assetId) {
    account {
      address
      addressType
      alias
      accountBasicInfo {
        address
        balance
        isContract
        numberTxsReceived
        numberTxsSent
        priceInUsd
        pubKey
        totalAmountReceived
        totalAmountSent
      }
      group {
        description
        id
        name
      }
    }
    assetType {
      decimals
      id
      logo
      name
      symbol
      price {
        fiat
        symbol
        value
      }
    }
    topRecipients {
      value
    }
    topSenders {
      value
    }
    topTags {
      value
    }
  }
}

query myAccountGroups{
  myAccountGroups {
    data {
      description
      id
      name
    }
    page {
      cursor
      next
      total
    }
  }
}

query myAccounts{
  myAccounts {
    data {
      address
      addressType
      alias
      accountBasicInfo {
        address
        balance
        isContract
        numberTxsReceived
        numberTxsSent
        priceInUsd
        pubKey
        totalAmountReceived
        totalAmountSent
      }
      group {
        description
        id
        name
      }
    }
    page {
      cursor
      next
      total
    }
  }
}

query myContacts{
  myContacts {
    data {
      address
      addressType
      alias
      accountBasicInfo {
        address
        balance
        isContract
        numberTxsReceived
        numberTxsSent
        priceInUsd
        pubKey
        totalAmountReceived
        totalAmountSent
      }
      group {
        description
        id
        name
      }
    }
    page {
      cursor
      next
      total
    }
  }
}

query summaryForAccount(address: String!, addressType: String!){
  summaryForAccount(address: $address, addressType: $addressType) {
    amountUnsettledPayables
    amountUnsettledReceivables
    numberUnsettledPayables
    numberUnsettledReceivables
    account {
      address
      addressType
      alias
      accountBasicInfo {
        address
        balance
        isContract
        numberTxsReceived
        numberTxsSent
        priceInUsd
        pubKey
        totalAmountReceived
        totalAmountSent
      }
      group {
        description
        id
        name
      }
    }
    assetType {
      decimals
      id
      logo
      name
      symbol
      price {
        fiat
        symbol
        value
      }
    }
  }
}

query summaryForAsset(address: String!, addressType: String!, assetId: String!){
  summaryForAsset(address: $address, addressType: $addressType, assetId: $assetId) {
    amountUnsettledPayables
    amountUnsettledReceivables
    numberUnsettledPayables
    numberUnsettledReceivables
    account {
      address
      addressType
      alias
      accountBasicInfo {
        address
        balance
        isContract
        numberTxsReceived
        numberTxsSent
        priceInUsd
        pubKey
        totalAmountReceived
        totalAmountSent
      }
      group {
        description
        id
        name
      }
    }
    assetType {
      decimals
      id
      logo
      name
      symbol
      price {
        fiat
        symbol
        value
      }
    }
  }
}

query transactionByHash(addressType: String!, hash: String!){
  transactionByHash(addressType: $addressType, hash: $hash) {
    addressType
    hash
    note
    accountingState {
      isSettled
      payableOrReceivable
    }
    relatedTransactions {
      hash
      note
    }
    tags {
      id
      name
      type
    }
    transactionBasicInfo {
      blockHash
      blockHeight
      fromAddress
      gasLimit
      gasPrice
      gasUsed
      hash
      priceInUsd
      time
      toAddress
      total
      txType
    }
  }
}

query transactionTags{
  transactionTags {
    data {
      id
      name
      type
    }
    page {
      cursor
      next
      total
    }
  }
}

query transactionsByAsset(address: String!, addressType: String!, assetId: String!){
  transactionsByAsset(address: $address, addressType: $addressType, assetId: $assetId) {
    data {
      addressType
      hash
      note
      accountingState {
        isSettled
        payableOrReceivable
      }
      relatedTransactions {
        hash
        note
      }
      tags {
        id
        name
        type
      }
      transactionBasicInfo {
        blockHash
        blockHeight
        fromAddress
        gasLimit
        gasPrice
        gasUsed
        hash
        priceInUsd
        time
        toAddress
        total
        txType
      }
    }
    page {
      cursor
      next
      total
    }
  }
}

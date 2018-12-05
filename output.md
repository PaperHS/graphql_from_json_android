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
          txType
          fromAddress
          gasLimit
          gasPrice
          gasUsed
          blockHeight
          priceInUsd
          time
          toAddress
          total
          hash
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
      txType
      fromAddress
      gasLimit
      gasPrice
      gasUsed
      blockHeight
      priceInUsd
      time
      toAddress
      total
      hash
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
        txType
        fromAddress
        gasLimit
        gasPrice
        gasUsed
        blockHeight
        priceInUsd
        time
        toAddress
        total
        hash
      }
    }
    page {
      cursor
      next
      total
    }
  }
}

mutation addAccount(accountGroup: String!, address: String!, alias: String!)mutation {
  addAccount(accountGroup: $accountGroup, address: $address, alias: $alias) {
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

mutation addAccountGroup(name: String!)mutation {
  addAccountGroup(name: $name) {
    description
    id
    name
  }
}

mutation addTagToTransaction(tagId: String!, transactionHash: String!)mutation {
  addTagToTransaction(tagId: $tagId, transactionHash: $transactionHash)
}

mutation createTag(name: String!)mutation {
  createTag(name: $name) {
    id
    name
    type
  }
}

mutation removeAccount(address: String!)mutation {
  removeAccount(address: $address)
}

mutation removeAccountGroup(id: String!)mutation {
  removeAccountGroup(id: $id)
}

mutation removeTag(id: String!)mutation {
  removeTag(id: $id)
}

mutation removeTagFromTransaction(transactionHash: String!)mutation {
  removeTagFromTransaction(transactionHash: $transactionHash)
}

mutation updateAccountAlias(address: String!, alias: String!)mutation {
  updateAccountAlias(address: $address, alias: $alias) {
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

mutation updateAccountGroup(accountGroup: String!, address: String!)mutation {
  updateAccountGroup(accountGroup: $accountGroup, address: $address) {
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

mutation updateAccountingState(hash: String!, isSettled: Boolean!, payableOrReceivable: Int!)mutation {
  updateAccountingState(hash: $hash, isSettled: $isSettled, payableOrReceivable: $payableOrReceivable) {
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
      txType
      fromAddress
      gasLimit
      gasPrice
      gasUsed
      blockHeight
      priceInUsd
      time
      toAddress
      total
      hash
    }
  }
}

mutation updateDescriptionToAccountGroup(description: String!, id: String!)mutation {
  updateDescriptionToAccountGroup(description: $description, id: $id) {
    description
    id
    name
  }
}

mutation updateNameToAccountGroup(id: String!, name: String!)mutation {
  updateNameToAccountGroup(id: $id, name: $name) {
    description
    id
    name
  }
}

mutation updateNoteToTransaction(hash: String!)mutation {
  updateNoteToTransaction(hash: $hash) {
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
      txType
      fromAddress
      gasLimit
      gasPrice
      gasUsed
      blockHeight
      priceInUsd
      time
      toAddress
      total
      hash
    }
  }
}

mutation updateRelatedTransaction(hash: String!, relatedTransactions: STRING!)mutation {
  updateRelatedTransaction(hash: $hash, relatedTransactions: $relatedTransactions) {
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
      txType
      fromAddress
      gasLimit
      gasPrice
      gasUsed
      blockHeight
      priceInUsd
      time
      toAddress
      total
      hash
    }
  }
}

mutation updateTag(id: String!, name: String!)mutation {
  updateTag(id: $id, name: $name) {
    id
    name
    type
  }
}

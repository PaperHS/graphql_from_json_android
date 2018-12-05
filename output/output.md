#### accountByAddress

```graphql
query accountByAddress($address: String!, $addressType: String!){
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


```
#### assetByAccount

```graphql
query assetByAccount($address: String!, $addressType: String!, $assetId: String!){
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


```
#### assetsByAccount

```graphql
query assetsByAccount($address: String!, $addressType: String!){
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


```
#### insightForAsset

```graphql
query insightForAsset($address: String!, $addressType: String!, $assetId: String!, $filter: Filter){
  insightForAsset(address: $address, addressType: $addressType, assetId: $assetId, filter: $filter) {
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


```
#### myAccountGroups

```graphql
query myAccountGroups($paging: PageInput){
  myAccountGroups(paging: $paging) {
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


```
#### myAccounts

```graphql
query myAccounts($paging: PageInput){
  myAccounts(paging: $paging) {
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


```
#### myContacts

```graphql
query myContacts($paging: PageInput){
  myContacts(paging: $paging) {
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


```
#### summaryForAccount

```graphql
query summaryForAccount($address: String!, $addressType: String!){
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


```
#### summaryForAsset

```graphql
query summaryForAsset($address: String!, $addressType: String!, $assetId: String!){
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


```
#### transactionByHash

```graphql
query transactionByHash($addressType: String!, $hash: String!){
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


```
#### transactionTags

```graphql
query transactionTags($paging: PageInput){
  transactionTags(paging: $paging) {
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


```
#### transactionsByAsset

```graphql
query transactionsByAsset($address: String!, $addressType: String!, $assetId: String!, $filter: Filter, $paging: PageInput){
  transactionsByAsset(address: $address, addressType: $addressType, assetId: $assetId, filter: $filter, paging: $paging) {
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


```
#### addAccount

```graphql
mutation addAccount($accountGroup: String!, $address: String!, $addressType: String, $alias: String!){
  addAccount(accountGroup: $accountGroup, address: $address, addressType: $addressType, alias: $alias) {
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


```
#### addAccountGroup

```graphql
mutation addAccountGroup($description: String, $name: String!){
  addAccountGroup(description: $description, name: $name) {
    description
    id
    name
  }
}


```
#### addTagToTransaction

```graphql
mutation addTagToTransaction($tagId: String!, $transactionHash: String!){
  addTagToTransaction(tagId: $tagId, transactionHash: $transactionHash)
}


```
#### createTag

```graphql
mutation createTag($name: String!){
  createTag(name: $name) {
    id
    name
    type
  }
}


```
#### removeAccount

```graphql
mutation removeAccount($address: String!){
  removeAccount(address: $address)
}


```
#### removeAccountGroup

```graphql
mutation removeAccountGroup($id: String!){
  removeAccountGroup(id: $id)
}


```
#### removeTag

```graphql
mutation removeTag($id: String!){
  removeTag(id: $id)
}


```
#### removeTagFromTransaction

```graphql
mutation removeTagFromTransaction($tagId: String, $transactionHash: String!){
  removeTagFromTransaction(tagId: $tagId, transactionHash: $transactionHash)
}


```
#### updateAccountAlias

```graphql
mutation updateAccountAlias($address: String!, $alias: String!){
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


```
#### updateAccountGroup

```graphql
mutation updateAccountGroup($accountGroup: String!, $address: String!){
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


```
#### updateAccountingState

```graphql
mutation updateAccountingState($hash: String!, $isSettled: Boolean!, $payableOrReceivable: Int!){
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


```
#### updateDescriptionToAccountGroup

```graphql
mutation updateDescriptionToAccountGroup($description: String!, $id: String!){
  updateDescriptionToAccountGroup(description: $description, id: $id) {
    description
    id
    name
  }
}


```
#### updateNameToAccountGroup

```graphql
mutation updateNameToAccountGroup($id: String!, $name: String!){
  updateNameToAccountGroup(id: $id, name: $name) {
    description
    id
    name
  }
}


```
#### updateNoteToTransaction

```graphql
mutation updateNoteToTransaction($hash: String!, $note: String){
  updateNoteToTransaction(hash: $hash, note: $note) {
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


```
#### updateRelatedTransaction

```graphql
mutation updateRelatedTransaction($hash: String!, $relatedTransactions: RelatedTransactionList!){
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


```
#### updateTag

```graphql
mutation updateTag($id: String!, $name: String!){
  updateTag(id: $id, name: $name) {
    id
    name
    type
  }
}


```
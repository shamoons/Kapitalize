# Kapitalize

Kapitalize is a Bitcoin client for node.

```js
var kapitalize = require('kapitalize')({
    user:'Macintyre, John',
    pass:'xD'
})

kapitalize.exec('getInfo', function(err, info) {
    //You know what to dooOOoo    
})
```

## Commands

All Bitcoin API commands are supported

 + addmultisigaddress
 + backupwallet
 + dumpprivkey
 + encryptwallet
 + getaccount
 + getaccountaddress
 + getaddressesbyaccount
 + getbalance
 + getblock
 + getblockcount
 + getblockhash
 + getblockcount
 + getconnectioncount
 + getdifficulty
 + getgenerate
 + gethashespersec
 + gethashespersec
 + getinfo
 + getmemorypool
 + getmemorypool
 + getmininginfo
 + getnewaddress
 + getreceivedbyaccount
 + getreceivedbyaddress
 + gettransaction
 + getwork
 + help
 + importprivkey
 + keypoolrefill
 + keypoolrefill
 + listaccounts
 + listreceivedbyaccount
 + listreceivedbyaddress
 + listsinceblock
 + listtransactions
 + move
 + sendfrom
 + sendmany
 + sendtoaddress
 + setaccount
 + setgenerate
 + settxfee
 + signmessage
 + stop
 + validateaddress
 + verifymessage
 + walletlock
 + walletpassphrase
 + walletpassphrasechange


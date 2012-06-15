# Kapitalize

`npm install kapitalize`

Kapitalize is a Bitcoin client for node.

```js
var kapitalize = require('kapitalize')({
    user:'Macintyre, John',
    pass:'xD'
})

kapitalize.exec('getNewAddress', function(err, address) {
    kapitalize.exec('validateAddress', address, console.log)
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

## Options

You may pass options to the initialization function or to the `set` command.

```js

var kapitalize = require('kapitalize')({
    user:'user'
})

kapitalize.set('pass', 'somn')
kapitalize.set({port:8331})

```

Available options and default values:

+ host *localhost*
+ port *8332*
+ user
+ pass

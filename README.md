# Kapitalize

`npm install kapitalize`

Kapitalize is a Bitcoin client for node.

```js
var kapitalize = require('kapitalize')()

kapitalize.auth('Macintyre, John', 'mypassword')

kapitalize.getNewAddress(function(err, address) {
    
    kapitalize.validateAddress(address, console.log)

})

```

## Methods

### .exec(command [string], <arguments>, callback [function])

Executes the given command with optional arguments. Function `callback` defaults to `console.log`.

### .set(key [string, object], value [optional])

Accepts either key & value strings or an Object containing settings, returns `this` for chainability.

### .auth(user [string], pass [string])

Generates authorization header, returns `this` for chainability

## Commands

All Bitcoin API commands are supported, in lowercase or camelcase form.

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

You may pass options to the initialization function or to the `set` method.

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

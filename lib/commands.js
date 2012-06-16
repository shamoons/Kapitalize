
var commands = module.exports.commands = [
    'addMultiSigAddress'
  , 'backupWallet'
  , 'dumpPrivKey'
  , 'encryptWallet'
  , 'getAccount'
  , 'getAccountaddress'
  , 'getAddressesByAccount'
  , 'getBalance'
  , 'getBlock'
  , 'getBlockCount'
  , 'getBlockHash'
  , 'getBlockCount'
  , 'getConnectionCount'
  , 'getDifficulty'
  , 'getGenerate'
  , 'getHashesPerSec'
  , 'getHashesPerSec'
  , 'getInfo'
  , 'getMemoryPool'
  , 'getMemoryPool'
  , 'getMiningInfo'
  , 'getNewAddress'
  , 'getReceivedByAccount'
  , 'getReceivedByAddress'
  , 'getTransaction'
  , 'getWork'
  , 'help'
  , 'importPrivKey'
  , 'keyPoolRefill'
  , 'keyPoolRefill'
  , 'listAccounts'
  , 'listReceivedByAccount'
  , 'listReceivedByAddress'
  , 'listSinceBlock'
  , 'listTransactions'
  , 'move'
  , 'sendFrom'
  , 'sendMany'
  , 'sendToAddress'
  , 'setAccount'
  , 'setGenerate'
  , 'setTxFee'
  , 'signmessage'
  , 'stop'
  , 'validateAddress'
  , 'verifyMessage'
  , 'walletLock'
  , 'walletPassphrase'
  , 'walletPassphraseChange'
]

module.exports.isCommand = function(command) {
  command = command.toLowerCase()
  for (var i=0, len=commands.length; i<len; i++) {
    if (commands[i].toLowerCase() === command) {
        return true
    }
  }
}

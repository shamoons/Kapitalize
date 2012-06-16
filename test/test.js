
var kapitalize = require('../lib/kapitalize')()
var echo = require('./echo.js')()

kapitalize.auth('user', 'pass')

var tests = {
  'getNewAddress':{
    valid:true,
    params:[]
  },
  'getAccountAddress':{
    valid:true,
    params:['user']
  },
  'getaccountaddress':{
    valid:true,
    params:['user']
  },
  'move':{
    valid:true,
    params:['fromaccount', 'toaccount', '10.0']
  },
  'getSomn':{
    params:[]
  }
}

function log(v) {
  var args = Array.prototype.slice.call(arguments, 1)
  args[0] = (v ? '\u001b[32m' : '\u001b[31m') + args[0]
  args.push('\u001b[0m', '\n')
  return console.log.apply(this, args)
}

function hasProp(a, b) {
  var hp = a.hasOwnProperty(b)
  if (!hp) log(false, 'Property not found', b)
  return hp
}

function eqArray(a, b) {
  if (a.length !== b.length) return false
  return a.every(function(val, ind) {
    return b[ind] === val
  })
}

var keys = Object.keys(tests)

;(function next() {
  
  var key = keys.shift()

  if (!key) process.exit(0)

  var test = tests[key]
   ,  args = test.params.slice()

  console.log('Testing', '[', key, args, ']', '\n')

  args.unshift(key)

  args.push(function(err, res) {

    if (err) {
      if (test.valid) {
        log(false, 'Failed', 'Method access failure')
      }else {
        log(true, 'Passed')
      }
      return next()
    }

    var headers = res.headers
     ,  result  = JSON.parse(res.data)

     console.log('[ <- Headers ]', JSON.stringify(headers))
     console.log('[ <- JSON ]', res.data, '\n')

    if (headers
      && hasProp(headers, 'host')
      && hasProp(headers, 'content-length')
      && hasProp(headers, 'authorization')) {

      if (result
        && hasProp(result, 'id')
        && hasProp(result, 'method')
        && hasProp(result, 'params')) {

          var params = result.params

          if (! eqArray(params, test.params)) { 
            log(false, 'Failed', 'Invalid JSON RPC parameters')
          }else {
            log(true, 'Passed')
          }

        }else {
          log(false, 'Failed', 'Invalid JSON RPC call', result)
        }

    }else {
      log(false, 'Failed', 'Invalid headers', headers)
    }

    return next()

  })

  kapitalize.exec.apply(kapitalize, args)

})()

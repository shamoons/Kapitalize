
var http = require('http'),
    api  = require('./commands')

function Client(options) { 

  this.opts = {
      port:  8332
    , host:  'localhost'
    , user:  'user'
    , pass:  'pass'
  }

  if (options) {
    this.set(options)
  }
  
}

Client.prototype = {

  invalid:function(command) {

    var args = Array.prototype.slice.call(arguments, 1)
    ,   fn   = args.pop()

    if (typeof fn !== 'function') {
      fn = console.log
    }

    return fn(new Error('No such command "' + command  + '"'))

  },

  send:function(command) {

    var args = Array.prototype.slice.call(arguments, 1)
    ,   fn   = args.pop()

    if (typeof fn !== 'function') {
      throw new Error('Last argument must be callback function')
    }

    var rpcData = JSON.stringify({
        id:new Date().getTime()
      , method:command.toLowerCase()
      , params:args
    })

    var opts = this.opts

    if (!opts.auth) {
      var buf = new Buffer(opts.user +':'+ opts.pass).toString('base64')
      opts.auth = 'Basic '+buf
    }

    var options = {
        host:opts.host
      , port:opts.port
      , method:'POST'
      , headers: {
            'Host':opts.host
          , 'Authorization':opts.auth
          , 'Content-Length':rpcData.length
      }
    }
    
    var req = http.request(options, function(res) {

      var data = ''

      res.setEncoding('utf8')

      res.on('data', function(chunk) {
        data += chunk
      })

      res.on('end', function() {

        try {

          data = JSON.parse(data)

          if (data.error) {
            return fn(new Error(JSON.stringify(data)))
          }

          return fn(null, data.result)

        }catch(exception) {

          var errMsg = res.statusCode !== 200
              ? 'Invalid params ' + res.statusCode
              : 'Failed to parse JSON'

          errMsg += ' : '+JSON.stringify(data)

          return fn(new Error(errMsg))

        }

      })

    })

    req.on('error', function(e) {
      return fn(e)
    })

    req.end(rpcData)

  },

  exec:function(command) {

    var func = api.isCommand(command) ? 'send' : 'invalid'
    return this[func].apply(this, arguments)

  },

  set:function(k, v) {

    var type = typeof(k)

    if (type === 'string' && this.opts.hasOwnProperty(k)) {
      this.opts[k] = v
    }else if (type === 'object') {
      for (var key in k) {
        this.set(key, k[key])
      }
    }

  }

}

module.exports = function(options) {
  return new Client(options)
}

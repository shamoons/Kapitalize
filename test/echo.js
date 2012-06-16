
var http = require('http')

module.exports = function() {

  http.createServer(function(req, res) {

    res.writeHead(200, {
      'content-type':'application/json'
    })

    var data = ''

    req.setEncoding('utf8')

    req.on('data', function(d) {
      data += d
    })

    req.on('end', function() {
      res.end(JSON.stringify({
        result:{
          headers:req.headers,
          data:data
        }}))
    })

  }).listen(8332)

}

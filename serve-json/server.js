var http = require('http')
var fs = require('fs')
var async = require('async')
var path = require('path')

var port = 3000
var jsonList = []
var server = http.createServer(function (req, res) {
  res.setHeader('Content-Type','text/html');
  // "/application/json" if I want the file to be downloaded

  async.each([
    'du.json',
    'dum.json',
    'dummy.json'
  ], function (file, cb) {
    var filePath = path.join(__dirname, 'data/' + file)
    var content = JSON.parse(fs.readFileSync(filePath))


  console.log(content);
  jsonList[jsonList.length] = content;
  
  })

 // for(x in jsonList){
      res.write(JSON.stringify(jsonList))

    //}
    jsonList = [];

  res.end()
});

server.on('listening', function () {
  console.log('Server is ready on port:', port)
})
server.listen(port, 'localhost');



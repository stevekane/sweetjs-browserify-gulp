var http = require('http')
  , ecstatic = require('ecstatic')

http.createServer(ecstatic({root: "public/dist"})).listen(1234);

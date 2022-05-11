var http = require('http');
http.createServer(function(req, res){
  var html = '<html>'
  +'<head>'
  +'<title>nodejs</title>'
  +'<link rel="stylesheet" type="text/css" href="./bootstrap/css/bootstrap.min.css" />'
  +'<script type="text/javascript" src="./bootstrap/js/bootstrap.min.js"></script>'
  +'</head>'
  +'<body>'
  +	`
    zsxrdctfvygbuinmo,.

  `
  +'</body>'
  +'</html>';
  res.writeHead(200,{'Content-Type' : 'text/html'});
  res.write(html);
  res.end();
}).listen(8888);
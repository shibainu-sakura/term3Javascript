var  express = require('express');
var index = express();
var port = 3000;

index.listen(port, function(){
 console.log('server started on port 3000');
});

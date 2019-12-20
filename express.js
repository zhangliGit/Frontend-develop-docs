const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8999, () => {
  console.log('server started prot is 8999')
})
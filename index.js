var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./businesscard.html', 'utf8');

const express = require('express')
const app = express()

var options = {
	phantomPath: '/usr/bin/phantomjs'
};

pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
	if (err) return console.log(err);
	console.log(res); // { filename: '/app/businesscard.pdf' }
});



const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
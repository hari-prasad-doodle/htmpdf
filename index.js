var fs = require('fs');
const witch = require('witch');
const phantomPath = witch('phantomjs-prebuilt', 'phantomjs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./businesscard.html', 'utf8');

const express = require('express')
const app = express()

var options = {
	phantomPath: phantomPath
};

pdf.create(html, options).toFile('./businesscard1.pdf', function(err, res) {
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
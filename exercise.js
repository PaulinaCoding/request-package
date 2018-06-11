// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err; 
       })
       .on('response', function (response) {
        console.log('Downloading image...');
        console.log('Response Status Code: ', response.statusCode,
        'Response status message:',response.statusMessage, 
        'Content type: ',response.headers['content-type']);
        console.log('Download complete.')
       })
        .pipe(fs.createWriteStream('./future.jpg'));
      

// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. What is happening here?

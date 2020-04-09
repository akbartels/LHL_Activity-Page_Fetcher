const request = require('request');
// console.log(request)
const fs = require('fs');
// console.log(fs)
const url = process.argv[2];
const writeFileName = process.argv[3];
console.log(url);
console.log(writeFileName)

request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // fs.writefile()

  if (error) {
    console.log(error)
  }
  if (response.statusCode === 200) {
    console.log("connected to site!")
    // console.log(body.length)
    fs.writeFile(writeFileName, body, (err) => {
      if (err) {
        return console.log(err)
      }

      console.log(`Download and saved ${body.length} bytes to .index.html`)
    });
  }
  
});



//node, script name, domain, index

//body.length to get bytes
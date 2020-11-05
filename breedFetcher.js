const request = require('request');

const breedRequest = function(breedName) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      process.exit();
    } else {
      if (body.length > 2) {
        // console.log(typeof body);
        // console.log('body:', body, body.length); // Print the HTML for the Google homepage.
        const data = JSON.parse(body);
        const breedDescription = (data[0]["description"]);
        console.log(breedDescription);
      } else {
        console.log(`The cat ${breedName} is not foudn in the database..`);
      }
    }
  });
};

//display description for the accepted breedname
const breedFetcher = function() {
  if (process.argv.length < 3) {
    console.log("Please provide a cat name as argument...");
    process.exit();
  } else {
    const breedName = process.argv[2];
    breedRequest(breedName);
  }
};

breedFetcher();
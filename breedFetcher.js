const request = require('request');

const fetchBreedDescription = function(breedName, returnFunction) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      return returnFunction(error, null);
    } else {
      if (body.length > 2) {
        const data = JSON.parse(body);
        const breedDescription = (data[0]["description"]);
        return returnFunction(null, breedDescription);
      } else {
        return returnFunction(null, (`The cat ${breedName} is not found in the database..`));
      }
    }
  });
};

module.exports = { fetchBreedDescription };

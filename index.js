const { fetchBreedDescription } = require('./breedFetcher');

const breedFetcher = function() {
  if (process.argv.length < 3) {
    console.log("Please provide a cat name as argument...");
    process.exit();
  } else {
    const breedName = process.argv[2];
    fetchBreedDescription(breedName, (error, description) => {
      if (error) {
        console.log('Error fetching details', error);
      } else {
        console.log(description);
      }
    });
  }
};

module.exports = { breedFetcher };
breedFetcher();
const assert = require('chai').assert;
const { fetchBreedDescription } = require('../breedFetcher');

describe('#Breed Description from The CatApi', () => {
  it('provides, via callback, breed details for the Bombay breed', (done) => {
    fetchBreedDescription('Bombay', (err, desc) => {
      const expectedDesc = "The the golden eyes and the shiny black coa of the Bopmbay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
      assert.equal(err, null);
      done();
    });
  });
  it('returns cat rahul not found', (done) => {
    fetchBreedDescription('rahul', (err, desc) => {
      const expectedDesc = "The cat rahul is not found in the database..";
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });
});
const fs = require('fs');

const breedDetailsFromFile = function(breed, cb){
 
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if(data === undefined) {
      return cb(data)
    }
    if(error) {
      throw error
    }
    cb(data)
  })
}
function getDataFromfil (data) {
  console.log(data)
}
// breedDetailsFromFile('Bombay', getDataFromfil)

module.exports = breedDetailsFromFile;


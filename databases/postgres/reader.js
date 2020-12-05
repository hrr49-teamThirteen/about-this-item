const fastcsv = require('fast-csv');

const readCSV = (readStream) => {
  const csvDataContainer = [];
  const csvStream = fastcsv
    .parse()
    .on('data', (data) => {
      csvDataContainer.push(data);
    })
    .on('end', () => {
      console.log('CSV DATA!!!', csvDataContainer);
      return csvDataContainer;
    });
  readStream.pipe(csvStream);
};

module.exports = {
  readCSV,
};

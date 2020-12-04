// Helper funciton to write data to the supplied writable stream
const writeCSV = (writeStream, lines, func, encoding, tableName, done) => {
  let i = lines;
  const write = () => {
    let canWrite = true;
    while (i > 0 && canWrite) {
      i--;
      if (i === 0) {
        // Last time!
        console.log(`${tableName} CSV COMPLETED`);
        writeStream.write(func(), encoding, done);
      } else {
        // Checks to see if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        canWrite = writeStream.write(func(), encoding);
      }
    }
    if (i > 0 && !canWrite) {
      // Had to stop early! Write some more once it drains.
      writeStream.once('drain', write);
    }
  };
  write();
};

module.exports = { writeCSV };

const writeCSV = (writeStream, lines, func, encoding, done) => {
  let i = lines;
  const write = () => {
    let canWrite = true;
    while (i > 0 && canWrite) {
      const csv = func(i);
      i--;
      if (i === 0) {
        writeStream.write(csv, encoding, done);
      } else {
        canWrite = writeStream.write(csv, encoding);
      }
    }
    if (i > 0 && !canWrite) {
      writeStream.once('drain', write);
    }
  };
  write();
};

module.exports = { writeCSV };

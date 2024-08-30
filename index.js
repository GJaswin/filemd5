const md5 = require('md5');
const fs = require('fs');

function returnHash(input) {
  return new Promise((resolve, reject) => {
    fs.readFile(input, (err, buf) => {
      if (err) {
        reject(err);
      } else {
        const hash = md5(buf);
        resolve(hash);
      }
    });
  });
}

module.exports = returnHash;
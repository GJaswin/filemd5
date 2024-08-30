# Installation

```
npm install jkhashing
```

# Calculating hash for a file

```
const rthash = require('jkhashing');

rthash('./file_path').then(hash => {
  console.log('Returned hash:', hash);
}).catch(err => {
  console.error('Error:', err);
});

```
var fs = require('fs');
var buff = new Buffer(100000);

fs.open('test_file.txt', 'r', (err, fd) => {
  if (err) {
    console.error("Got error while opening file: " + err.message);
  }
  else {
    fs.read(fd, buff, 0, 100000, null, (err, length) => {
      if (err) {
        console.error("Got error while reading file: " + err.message);
      }
      else {
        console.log(buff.toString("utf8", 0, length));
      }
    });
  }
});

// 'use strict';
// var s = 'Hello';
//
// function greet(name) {
//   console.log(s + ', ' + name + '!');
// }
//
// module.exports = greet;
//




//异步
$.getJSON('目标URL', function (data) {
  console.log;
});
console.log;

//同步
var data = getJSONSync('目标URL');


//异步读文件
'use strict';

var fs = require('fs');

fs.readFile('当前目录下的文件', 'utf-8', function (err, data) {
  if (err) {
    //出错的情况
    console.log(err);
  } else {
    //正常的情况
    console.log(data);
  }
});



//同步读文件
//writeFile()的参数依次为文件名、数据和回调函数。如果传入的数据是String，默认按UTF-8编码写入文本文件，如果传入的参数是Buffer，则写入的是二进制文件。回调函数由于只关心成功与否，因此只需要一个err参数。
'use strict';

var fs = require('fs');

var data = fs.readFileSync('当前目录文件', 'utf-8');
console.log(data);

//写文件
'use strict';

var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('ok.');
  }
});


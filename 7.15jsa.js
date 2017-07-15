// // 从文件流读取文本内容
// 'use strict';
//
// var fs = require('fs');
//
// // 打开一个流:
// var rs = fs.createReadStream('a.txt', 'utf-8');
// // 表示文件可以读取了
// rs.on('data', function (chunk) {
//   console.log('DATA:')
//   console.log(chunk);
// });
// // 表示文件结束了
// rs.on('end', function () {
//   console.log('END');
// });
// // 表示文件出错了
// rs.on('error', function (err) {
//   console.log('ERROR: ' + err);
// });
//
//
//
//
//
//
//
//
//
// // 要以流的形式写入文件，要不断调用write()方法，以end()结束
// 'use strict';
//
// var fs = require('fs');
//
// var ws1 = fs.createWriteStream('a.txt', 'utf-8');
// ws1.write('写入文本数据\n');
// ws1.write('END.');
// ws1.end();
//
// //
// var ws2 = fs.createWriteStream('a.txt');
// ws2.write(new Buffer('写入二进制数据\n', 'utf-8'));
// ws2.write(new Buffer('END.', 'utf-8'));
// ws2.end();
//
//
//
//
//
// //pipe进行了读和写两个操作，通常用于复制文件
// 'use strict';
//
// var fs = require('fs');
//
// var rs = fs.createReadStream('a.txt');
// var ws = fs.createWriteStream('b.txt');
//
// rs.pipe(ws);
// // 默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。如果我们不希望自动关闭Writable流，需要传入参数：
// readable.pipe(writable, { end: false });
//
//
//
//
//
//
//
//
// //创建一个简单的HTTP服务器
// 'use strict';
//
// // 导入http模块:
// var http = require('http');
//
// // 创建http服务器，并传入回调函数（请求、响应）
// var server = http.createServer(function (request, response) {
//   // 回调函数接收request和response对象，获得HTTP请求的method和url
//   console.log(request.method + ': ' + request.url);
//   // 将HTTP响应200写入响应, 同时设置属性
//   response.writeHead(200, {'Content-Type': 'text/html'});
//   // 将HTTP响应的HTML内容写入response
//   response.end('<h1>Hello world!</h1>');
// });
//
// // 让服务器监听8080端口:
// server.listen(8080);
//
// console.log('Server is running at http://127.0.0.1:8080/');
//
//
//
//
//
//
//
//
//
//
// //文件服务器
// 'use strict';
//
// var
//     fs = require('fs'),
//     url = require('url'),
//     path = require('path'),
//     http = require('http');
//
// var root = path.resolve(process.argv[2] || '.');
//
// console.log('Static root dir: ' + root);
//
// // 创建服务器:
// var server = http.createServer(function (request, response) {
//   // 获得URL的path
//   var pathname = url.parse(request.url).pathname;
//   // 获得对应的本地文件路径
//   var filepath = path.join(root, pathname);
//   // 获取文件状态:
//   fs.stat(filepath, function (err, stats) {
//     if (!err && stats.isFile()) {
//       // 没有出错
//       console.log('200 ' + request.url);
//       response.writeHead(200);
//       // 响应
//       fs.createReadStream(filepath).pipe(response);
//     } else {
//       // 出错了
//       console.log('404 ' + request.url);
//       response.writeHead(404);
//       response.end('404 Not Found');
//     }
//   });
// });
//
// server.listen(8080);
//
// console.log('Server is running at http://127.0.0.1:8080/');
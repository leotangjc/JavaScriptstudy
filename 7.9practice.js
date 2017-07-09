/**
 * Created by tangjiacheng on 2017/7/9.
 */
// 定义
// function abc() {
//   return '123';
// }
//
// console.log(abc())

// 传参

// function abc() {
  // var a = arguments[0];
  // var b = arguments[1];
  // var c = arguments[2];
  // var c = 0;
  // for(var a=0;a<arguments.length;a++){
  //   c = c + arguments[a];
  // }
  // return c;
// }

// console.log(abc('12',2,2,1,2,3,2,342,1,1,1,2,2));

// rest

// function abc(x,y,...rest) {
//   console.log(rest)
//   return x+y;
// }
//
// console.log(abc(1,2,3,4,2,4,2,2,3))

// 方法
// var birth = 1992;
// var a = {
//   name: 'jack',
//   birth: 1993,
//   age: function() {
//     var y = new Date().getFullYear();
//     return y - this.birth
//   }
// }
//
// console.log(a.age())

//map
// function pow(x) {
//   console.log(x);
//
//   return x * x;
//
// }
//
// var arr=[1,2,3,4,5,6,7,8,9];
// var b = arr.map(pow);
// console.log(b);



// //reduce
// var arr = [1, 3, 5, 7, 9];
//
// var a=arr.reduce(function (x, y) {
//   return x + y;
// });
//
// console.log(a);




//filter
//filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。

// var arr = [1, 2, 4, 5, 6, 9, 10, 15];
// var r = arr.filter(function (x) {
//   return x % 2 !== 0;//保留单数
// });
//
// console.log(r);

//并且它接收的是回调参数
// var arr=['A','B','C'];
// var r=arr.filter(function(element,index,self) {
//   console.log(element);
//   console.log(index);
//   console.log(self);
//   return true;
// });







//sort
//排序算法，如果用默认排序，会比较奇怪
// var arr=[110,20,2,2];
// var a = arr.sort(function(x,y) {
//   if (x<y) {
//     return -1;
//   }
//   if (x>y) {
//     return 1;
//   }
//   return 0;
// });
//
// console.log(a);




//闭包
// function count() {
//   var arr = [];
//   for (var i = 1; i <= 3; i++) {
//     arr.push((function(n) {
//       return function() {
//         return n * n;
//       }
//     })(i));
//   }
//   return arr;
// }
//
// var results = count();
// var f1=results[0];
// var f2=results[1];
// var f3=results[2];
//
// console.log(f1());
// console.log(f2());
// console.log(f3());



//箭头函数
//此参数的意思就是x和y两个参数做运算的匿名函数
// (x,y) => x*x+y*y




//this
//这个就是用于设定作用域的，可将变量在外部进行设置，如：
var a = {
  birth: 1995,
  Age: function () {
    var b = this.birth;
    var fn = () => new Date().getFullYear() - this.birth;
    return fn();
  }
};
console.log(a.Age());



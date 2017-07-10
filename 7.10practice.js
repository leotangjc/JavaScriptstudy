// //练习
// //纠错
// var today = new Date();
// if (today.getMonth() === 2 && today.getDate() === 14) {
//   alert('亲爱的，我预定了晚餐，晚上6点在餐厅见！');
// }
// //因为Date中的日期是从0~11，所以正确的二月份应该是1
//
//
// //练习
// //正则表达式
//请尝试写一个验证Email地址的正则表达式。版本一应该可以验证出类似的Email：
// var re = /^\w+[\w.]*@\w+.(org|com)$/;
// // 测试:
// var
//     i,
//     success = true,
//     should_pass = ['someone@gmail.com', 'bill.gates@microsoft.com', 'tom@voyager.org', 'bob2015@163.com'],
//     should_fail = ['test#gmail.com', 'bill@microsoft', 'bill%gates@ms.com', '@voyager.org'];
// for (i = 0; i < should_pass.length; i++) {
//   if (!re.test(should_pass[i])) {
//     alert('测试失败: ' + should_pass[i]);
//     success = false;
//     break;
//   }
// }
// for (i = 0; i < should_fail.length; i++) {
//   if (re.test(should_fail[i])) {
//     alert('测试失败: ' + should_fail[i]);
//     success = false;
//     break;
//   }
// }
// if (success) {
//   alert('测试通过!');
// }
//



//JSON
//JSON是一种超轻量级的数据交换格式
// var t = {
//   name: 't',
//   age: 22,
//   height: 1.73,
//   grade: null,
//   skills: ['JavaScript']
// };
//
//
//
// JSON.stringify(t, null, '  ');
// console.log(JSON.stringify(t, null, '  '));




// if (confirm('重新加载当前页' + location.href + '?')) {
//   location.reload();
// } else {
//   location.assign('/discuss'); // 设置一个新的URL地址
// }



//练习，在网站中运行通过，就不再添加html了
// 选择<p>JavaScript</p>:
// var js = document.getElementById('test-p');
//
// // 选择<p>Python</p>,<p>Ruby</p>,<p>Swift</p>:
// var arr = document.getElementById('test-div').getElementsByClassName('c-red')[1].children;
//
// // 选择<p>Haskell</p>:
// var haskell = document.getElementById('test-div').getElementsByClassName('c-green')[1].lastElementChild;
//
// // 测试:
// if (!js || js.innerText !== 'JavaScript') {
//   alert('选择JavaScript失败!');
// } else if (!arr || arr.length !== 3 || !arr[0] || !arr[1] || !arr[2] || arr[0].innerText !== 'Python' || arr[1].innerText !== 'Ruby' || arr[2].innerText !== 'Swift') {
//   alert('选择Python,Ruby,Swift失败!');
// } else if (!haskell || haskell.innerText !== 'Haskell') {
//   alert('选择Haskell失败!');
// } else {
//   alert('测试通过!');
// }




//练习
//更新DOM
// 获取<p>javascript</p>节点:
// var js =  document.getElementById('test-js');
//
// // 修改文本为JavaScript:
// // TODO:
// js.innerHTML = 'JavaScript';
//
// // 修改CSS为: color: #ff0000, font-weight: bold
// // TODO:
// js.style.color = '#ff0000';
// js.style.fontWeight = 'bold';



//练习
//插入DOM
var st=Array.from(document.getElementsByClassName('lang'));
var ol=document.getElementById('test-list');
st.sort((x,y)=>x.innerText>y.innerText);
for(let i=0;i<st.length;i++){
  ol.appendChild(st[i]);
}
// 测试:
;(function () {
  var
      arr, i,
      t = document.getElementById('test-list');
  if (t && t.children && t.children.length === 5) {
    arr = [];
    for (i=0; i<t.children.length; i++) {
      arr.push(t.children[i].innerText);
    }
    if (arr.toString() === ['Haskell', 'JavaScript', 'Python', 'Ruby', 'Scheme'].toString()) {
      alert('测试通过!');
    }
    else {
      alert('测试失败: ' + arr.toString());
    }
  }
  else {
    alert('测试失败!');
  }
})();




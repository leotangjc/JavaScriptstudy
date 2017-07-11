//练习1
//      $('ul.lang li'); // 选出JavaScript、Python和Lua 3个节点
//
//      $('ul.lang li:first-child'); // 仅选出JavaScript
//      $('ul.lang li:last-child'); // 仅选出Lua
//      $('ul.lang li:nth-child(2)'); // 选出第N个元素，N从1开始
//      $('ul.lang li:nth-child(even)'); //偶数
//      $('ul.lang li:nth-child(odd)'); //奇数




//        练习2
//        selected = $('div.test-selector li'); // 所有语言
//        selected = $('ul.test-lang li'); // 所有动态语言
//        selected = $('div.test-selector ul'); // 所有动态语言
//        selected = $('ol.test-lang li'); // 所有静态语言
//        selected = $('div.test-selector ol'); // 所有静态语言
//        selected = $('ul.test-lang li:nth-child(odd), ol.test-lang li:last-child'); // JavaScript，Lua，C
//        console.log(selected);


//a
//        var langs = $('ul.lang li');
//        var a = langs.filter('.dy'); // 拿到JavaScript, Python, Scheme




//b
//        j1.html('<span style="color: red">JavaScript</span>');
//        j2.text('JavaScript & ECMAScript');



//c
//        $('#test-css li.dy>span').css('background-color', '#ffd351').css('color', 'red');


//练习
//使用CSS修改指定字体高亮
//        var div = $('#test-highlight-css');
//        div.find('.js').addClass('highlight');
//        div.find('.highlight').css('backgroundColor','red');




//d
//        var ul = $('#test-div>ul');
//        ul.append('<li><span>Haskell</span></li>');

//练习
//修改DOM结构
//        var ul = $('#test-div ul');
//
//        ul.append('<li><span>Pascal</span></li>');
//        ul.append('<li><span>Lua</span></li>');
//        ul.append('<li><span>Ruby</span></li>');
//
//        var lis = $('#test-div ul li');
//
//        var arr = lis.map(function(){
//          console.log($(this).html());
//          return $(this).html();
//        }).get();
//
//        arr.sort();
//        lis.remove();
//        for(var key in arr){
//          ul.append('<li>'+arr[key]+'</li>');
//        }
//
//        // 测试:
//        ;(function () {
//          var s = $('#test-div>ul>li').map(function () {
//            return $(this).text();
//          }).get().join(',');
//          if (s === 'JavaScript,Lua,Pascal,Python,Ruby,Swift') {
//            alert('测试通过!');
//          } else {
//            alert('测试失败: ' + s);
//          }
//        })();




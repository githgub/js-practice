/*
2.数组渲染方式实现同样功能
*/
var ul;
var text;
var makeMax = false; //bool值，表示数组内元素是否超过60个；
var listData = ["1", "3", "2", "5"];
var searchArr=[];//存储查询结果数组

/*判断数组元素是否超过60个*/
function ifMakeMax() {
  //console.log(listData.length);
  if (listData.length >= 60) {
    makeMax = true;
  } else {
    makeMax = false;
  }
  return makeMax;
}
//左侧入
function leftIn2() {
  if (!ifMakeMax()) {
    if (text.value.match(/^\s*$/)) {
      alert("请输入内容");
    } else {
      for (var i = 0; i < gettextlist().length; i++) {
        listData.unshift(gettextlist()[i]);
      }
      //console.log(listData);
    }
    refreshList();
    text.value = "12";
  } else {
    alert("队列元素最多60个，已达到60个");
  }
}

//右侧入
function rightIn2() {
  if (!ifMakeMax()) {
    if (text.value.match(/^\s*$/)) {
      alert("请输入内容");
    } else {
      listData = listData.concat(gettextlist());
    }
    refreshList();
    text.value = "12";
  } else {
    alert("队列元素最多60个，已达到60个");
  }
}
//左侧出
function leftOut2() {
  if (listData.length > 0) {
    if (confirm("确认要删除：" + listData[0].toString() + "?")) {
      listData.shift();
    }
  } else {
    alert("队列已为空");
  }
  refreshList();
}
//右侧出
function rightOut2() {
  if (listData.length > 0) {
    if (
      confirm("确认要删除：" + listData[listData.length - 1].toString() + "?")
    ) {
      listData.pop();
    }
  } else {
    alert("队列已为空");
  }
  refreshList();
}

//根据数组渲染html队列内容
function refreshList() {
  var lis = ul.getElementsByTagName("li");
  while (ul.lastChild) {
    ul.removeChild(ul.lastChild); //先移除所有子元素
  }
  for (var i = 0; i < listData.length; i++) {
    var li = document.createElement("li");
    var text = document.createTextNode(listData[i].toString());
    li.appendChild(text);
    //li.style.height=String(listData[i]*5)+"px";//li的数字由高度表示
    ul.appendChild(li);
  }
}

/*
*读取textarea内的字符，并添加到一个数组中
*/
function gettextlist() {
  var textvalue = text.value;
  //console.log(textvalue);
  var s = /[\n,，、  \t]/;
  var arr = textvalue.split(s);
  //console.log(arr);
  return arr;
}
/*
 * 查询函数
 * 
*/
function search() {
  var searchData = document.getElementById("search").value;
  //console.log(searchData);
  searchArr=listData.map(function(item, index, array) {
    var pattern = new RegExp(searchData,"g");
    var searched = pattern.exec(item);
    var newItemArr = [];
    var preIndex, nextIndex;
if(searched){
  var unSearchedObj = {};
  unSearchedObj.F = item.slice(0, searched.index);
  newItemArr.push(unSearchedObj); //加入第一次匹配项之前的非匹配对象
}

    while (searched) //找到了之后再次向后查找
    {
      preIndex = searched.index;
 
      var searchedObj = {};
      searchedObj.T = searchData;
      newItemArr.push(searchedObj); //加入匹配的对象T
      
      searched = pattern.exec(item);
      if(searched){
        nextIndex =  searched.index;
        var unSearchedObj = {};
        unSearchedObj.F = item.slice(preIndex+searchData.length, nextIndex);
        newItemArr.push(unSearchedObj); //加入两个匹配项之间的非匹配对象
       // console.log("yes");
      }

    }
    var unSearchedObj = {};
    if((preIndex+searchData.length)!=(item.length)){
      unSearchedObj.F = item.slice(preIndex+searchData.length, item.length+ 1);//加入最后一个匹配项之后的非匹配项
      newItemArr.push(unSearchedObj);
    }
      
        item=newItemArr;
        return item;
        //console.log(item);
  });
  console.log(searchArr);
}

/*
*根据查询结果渲染DOM，匹配的字符用蓝色标出
*/
function refreshLiBySearch(){
  while (ul.lastChild) {
    ul.removeChild(ul.lastChild); //先移除所有子元素
  }
  console.log(searchArr);
  searchArr.forEach(function (item,index,array){
//item是一个对象数组
console.log(item);
var li=document.createElement("li");
    for(var i=0;i<item.length;i++)
    {
       console.log(item[i]);
            //item[i] 是一个对象 
      if(item[i].hasOwnProperty("T")){
       var e=document.createElement("span");
      
       var textN=document.createTextNode(item[i].T);
       e.style.color="blue";
      e.appendChild(textN);
      li.appendChild(e);
      }
      else{
        var e=document.createElement("span");
        var textN=document.createTextNode(item[i].F);
       e.appendChild(textN);
       li.appendChild(e);
      }
    }
ul.appendChild(li);
  });
}
/* 
 * 给各个按钮添加对应的事件
*/
/*写一个带参函数
可统一为按钮添加点击事件*/
function add2ClickEvent(obj, event) {
  var btn = document.getElementsByClassName(obj)[0];
  btn.addEventListener("click", event);
}
/*
*分别为每个按钮添加点击事件
*/
function add2ClickBtn1() {
  var btn1 = document.getElementById("btn1");
  btn1.addEventListener("click", leftIn2);
}
function add2ClickBtn2() {
  var btn1 = document.getElementsByClassName("btn2")[0];
  btn1.addEventListener("click", rightIn2);
}
function add2ClickBtn3() {
  var btn1 = document.getElementsByClassName("btn3")[0];
  btn1.addEventListener("click", leftOut2);
}
function add2ClickBtn4() {
  var btn1 = document.getElementsByClassName("btn4")[0];
  btn1.addEventListener("click", rightOut2);
}
/*
text按键事件
限制textarea内的文本的内容格式
*为每个输入元素可以由英文、数字、中文组成，间隔可以是回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号
*/
function textKeyEvent() {
  text.onkeyup = function() {
    var s = /^([0-9a-zA-Z\u4e00-\u9fa5]+[\n,，、  \t]*)+$/;
    text.value = s.test(text.value) ? text.value : "";
  };
}

/*
*window.onload
*/
window.onload = function() {
  ul = document.getElementById("data-list");
  text = document.getElementsByClassName("text")[0];
  textKeyEvent();
  refreshList();
  add2ClickBtn1();
  add2ClickEvent("btn2", rightIn2);
  add2ClickEvent("btn3", leftOut2);
  add2ClickEvent("btn4", rightOut2);
  //add2ClickBtn2();
  //add2ClickBtn3();
  //add2ClickBtn4();
  gettextlist();
  document.getElementById("searchBtn").onclick=function(){
    search();
    refreshLiBySearch();
  };
};

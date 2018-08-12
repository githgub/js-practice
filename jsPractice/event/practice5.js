var ul;
var text;
var makeMax=false;//bool值，表示数组内元素是否超过60个；
/*
*1.DOM操作实现
*/
/*
左侧入
firstChild之前插入
insertBefore(li,ul.firstChild)
*/
function leftIn(){
var li=document.createElement("li");
var liText=document.createTextNode(text.value);
if(/^\s+$/.test(text.value))
{
  alert("请输入数字");
}
else{
  li.appendChild(liText);
  ul.insertBefore(li,ul.firstChild);
  console.log("yes");
}

}
/*
右侧入
appendChild
*/
function rightIn(){
  var li;
  var liText;
  li=document.createElement("li");
  liText=document.createTextNode(text.value);
  if(text.value.match(/^\s*$/))
{
  alert("请输入数字");
}
else{
  li.appendChild(liText);
  ul.appendChild(li);
  console.log("yes");
}
}
/*
左侧出
删除第一个子节点firstChild
removeChild(ul.firstChild);
*/
function leftOut(){
  if(ul.getElementsByTagName("li").length>0){//判断列表是否已为空
    while(ul.firstChild.nodeType==3){//判断首个子节点是否为空节点
      ul.removeChild(ul.firstChild);
    }
   var element=ul.removeChild(ul.firstChild);
   window.confirm("确定删除"+element.innerHTML+"?");
  }
else{
  alert("列表为空");
}
}
/*
右侧出
删除第一个子节点lastChild
removeChild(ul.lastChild);
*/
function rightOut(){
  if(ul.getElementsByTagName("li").length>0){
    while(ul.lastChild.nodeType==3){
      ul.removeChild(ul.lastChild);
    }
    var element=ul.removeChild(ul.lastChild);
    window.confirm("确定删除"+element.innerHTML+"?");
  }
  else{
    alert("列表为空");
  }
}
function addClickBtn1(){
  var btn1=document.getElementById("btn1");
  btn1.addEventListener("click",leftIn);
}
function addClickBtn2(){
  var btn1=document.getElementsByClassName("btn2")[0];
  btn1.addEventListener("click",rightIn);
}
function addClickBtn3(){
  var btn1=document.getElementsByClassName("btn3")[0];
  btn1.addEventListener("click",leftOut);
}
function addClickBtn4(){
  var btn1=document.getElementsByClassName("btn4")[0];
  btn1.addEventListener("click",rightOut);
}
  

  function test(num)
 {
  var reg =new RegExp("^(\\d|[1-9]\\d|100)$");//（行首行尾匹配）分别为匹配一位数字、或两位数字（其中第一位为1-9，第二位为任意数字/d）、或者100
  if(!num.match(reg)){
   return false;
  }else{
   return true;
  }
 }

/*window.onload=function (){
   ul=document.getElementById("data-list");
  text=document.getElementsByClassName("text")[0];
  text.onkeyup=function (){
    text.value=test(text.value)?text.value:'';
  }
  addClickBtn1();
  addClickBtn2();
  addClickBtn3();
  addClickBtn4();
}*/




/*
2.数组渲染方式实现同样功能
*/
var listData=[1,3,2,5];

/*判断数组元素是否超过60个*/
function ifMakeMax(){
  console.log(listData.length);
  if(listData.length>=60){
    makeMax=true;
  }
  else{
    makeMax=false;
  }
  return makeMax;
}
//左侧入
function leftIn2(){
  if(!ifMakeMax())
  {
    if(text.value.match(/^\s*$/))
    {
      alert("请输入数字");
    }
    else{
      listData.unshift(text.value);
    }
    refreshList();
  }
  else{
    alert("队列元素最多60个，已达到60个");
  }
}

//右侧入
function rightIn2(){
  if(!ifMakeMax()){
    if(text.value.match(/^\s*$/))
    {
      alert("请输入数字");
    }
    else{
      listData.push(text.value);
    }
    refreshList();
  }
  else{
    alert("队列元素最多60个，已达到60个");
  }

}
//左侧出
function leftOut2(){
  if(listData.length>0){
    
    if(confirm("确认要删除："+listData[0].toString()+"?"))
    {
      listData.shift();
    }

  }
  else{
     alert("队列已为空");
  }
  refreshList();
}
//右侧出
function rightOut2(){
  if(listData.length>0){
    
    if(confirm("确认要删除："+listData[listData.length-1].toString()+"?"))
    {
      listData.pop();
    }

  }
  else{
     alert("队列已为空");
  }
  refreshList();
}

//根据数组渲染html队列内容
function refreshList(){
  var lis=ul.getElementsByTagName("li");
  while(ul.lastChild)
  {
    ul.removeChild(ul.lastChild);//先移除所有子元素
  }
  for(var i=0;i<listData.length;i++){
    var li=document.createElement("li");
    var text=document.createTextNode(listData[i].toString());
    li.appendChild(text);
    li.style.height=String(listData[i]*5)+"px";//li的数字由高度表示
   ul.appendChild(li);
  }
}
/* 
 * 给各个按钮添加对应的事件
*/
function add2ClickBtn1(){
  var btn1=document.getElementById("btn1");
  btn1.addEventListener("click",leftIn2);
}
function add2ClickBtn2(){
  var btn1=document.getElementsByClassName("btn2")[0];
  btn1.addEventListener("click",rightIn2);
}
function add2ClickBtn3(){
  var btn1=document.getElementsByClassName("btn3")[0];
  btn1.addEventListener("click",leftOut2);
}
function add2ClickBtn4(){
  var btn1=document.getElementsByClassName("btn4")[0];
  btn1.addEventListener("click",rightOut2);
}
function add2ClickBtn5(){
  var btn1=document.getElementsByClassName("btn5")[0];
  btn1.addEventListener("click",sortList); 
}

/*冒泡排序算法*/
function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
};

function bubbleSort(items){
  var len = items.length, i, j, stop;

  for (i = 0; i < len; i++){
    for (j = 0, stop = len-i; j < stop; j++){
      if (items[j] > items[j+1]){
        swap(items, j, j+1);
      }
    }
  }
  return items;
}

function sortList(){
  bubbleSort(listData);
  refreshList();
}

/*
*window.onload
*/
window.onload=function (){
  ul=document.getElementById("data-list");
 text=document.getElementsByClassName("text")[0];
 text.onkeyup=function (){
   text.value=test(text.value)?text.value:'';
 }
 refreshList();
 add2ClickBtn1();
 add2ClickBtn2();
 add2ClickBtn3();
 add2ClickBtn4();
 add2ClickBtn5();
}



var ul;
var text;

/*
左侧入
firstChild之前插入
insertBefore(li,ul.firstChild)
*/
function leftIn(){
var li=document.createElement("li");
var liText=document.createTextNode(text.value);
li.appendChild(liText);
ul.insertBefore(li,ul.firstChild);
console.log("yes");
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
  li.appendChild(liText);
  ul.appendChild(li);
  console.log("yes");
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
window.onload=function (){
   ul=document.getElementById("data-list");
  text=document.getElementsByClassName("text")[0];
  addClickBtn1();
  addClickBtn2();
  addClickBtn3();
  addClickBtn4();
}
/*
 * 遍历DOM树
*/
var domArr=[];
function preOrder(rootnode) {
  if (rootnode) {
    var nodeValue;
    nodeValue = rootnode;
    //console.log(nodeValue);
    domArr.push(nodeValue);
    preOrder(rootnode.firstElementChild);
    preOrder(rootnode.lastElementChild);
  }
  console.log(domArr);
}


//动画展示遍历过程
//链式调用setTimeOut函数，达到动画效果
var num=0;
function showDomArr(){
  if(num<domArr.length){
    if(num-1 >= 0) {
      domArr[num-1].style.backgroundColor = "white";
    }
    domArr[num].style.backgroundColor = "pink";
  }
  if(num==domArr.length){
      
    domArr[num-1].style.backgroundColor = "white";
}
 
  if(num<domArr.length)
  {
    setTimeout(showDomArr,500);

  }
  num++;
}


/*
 * 遍历DOM树--多叉树
 * 深度遍历 先从子节点查找，子节点找完再从兄弟节点查找
*/
var domArr=[];
function preOrder(rootnode) {
  document.getElementById("s");

  if (rootnode) {
    var childe=[];
    childe = rootnode.childElementNodes;
    var slib =[];
    var preNode=rootnode.previousElementSibling;
    var nextNode=rootnode.nextElementSibling;
    while (preNode){
      slib.push(preNode);
      preNode=rootnode.previousElementSibling;
    }
    while (nextNode){
      slib.push(nextNode);
      nextNode=rootnode.nextElementSibling;
    }
    
    slib.concat(rootnode.nextSibling);

    domArr.push(nodeValue);
    preOrder(rootnode.firstElementChild);
    preOrder(rootnode.lastElementChild);
  }
  console.log(domArr);
}

/*
window.onload
*/
window.onload = function() {
  preOrder(document.body.getElementsByTagName("div")[0]);
  document.getElementsByClassName("btnStart")[0].onclick=function(){
    num=0;
    showDomArr();
    console.log("yes");
  }
};

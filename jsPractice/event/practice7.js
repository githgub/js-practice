//用对象实现二叉树示例
var tree1 = {
  value: "-",
  left: {
    value: "+",
    left: {
      value: "a"
    },
    right: {
      value: "*",
      left: {
        value: "b"
      },
      right: {
        value: "c"
      }
    }
  },
  right: {
    value: "/",
    left: {
      value: "d"
    },
    right: {
      value: "e"
    }
  }
};

/*
*前序遍历函数(递归遍历)
*/
var orderdedArr = [];
function preOrder(tree) {
  if (tree) {
    var nodeValue;
    nodeValue = tree.value;
    orderdedArr.push(nodeValue);
    preOrder(tree.left);
    preOrder(tree.right);
  }
  return orderdedArr;
}
//非递归遍历
var preListUnRec = []; //定义保存先序遍历结果的数组
var preOrderUnRecursion = function(node) {
  if (node) {
    //判断二叉树是否为空
    var stack = [node]; //将二叉树压入栈
    while (stack.length !== 0) {
      //如果栈不为空，则循环遍历
      node = stack.pop(); //从栈中取出一个结点
      preListUnRec.push(node.value); //将取出结点的值存入数组中
      if (node.right) stack.push(node.right); //如果存在右子树，将右子树压入栈
      if (node.left) stack.push(node.left); //如果存在左子树，将左子树压入栈
    }
  }
};

var domTree = {
  value:{
    tagName: "div",
    style: "width:50%;height:50%;padding:10px;border:1px solid black"
  },
  
    left:{
      value: {
        tagName: "div",
        style: "width:100%;height:50%;border:1px solid black"
      }
    },
    right:{
      value: {
        tagName: "div",
        style: "width:100%;height:50%;border:1px solid black"
      }
    }   
};

/*
*根据树渲染DOM
*/

var parentNode;
function refreashDOM(tree){
  if (tree) {
    var nodeValue;
    nodeValue = tree.value;
    var elem;
    var tageName = nodeValue.tagName;
    var style = nodeValue.style;
    //console.log(nodeValue);
    if(tageName!="body"){
      elem = document.createElement(tageName);
      elem.style = style;
      //console.log("yes");
    }
if(elem){
  parentNode.appendChild(elem);
  parentNode=elem;
}
//console.log("parentNode:"+parentNode);
//console.log("elem:"+elem);

refreashDOM(tree.left);
refreashDOM(tree.right);//不对，不能很好的判断子节点与父节点的对应关系
  }
}
//动画展示遍历过程
/*function showDomArr(){
  preOrder(document.body);
for(var i=0;i<domArr.length;i++){
              setTimeout((function(num){return function(){
                if(num-1 >= 0) {
                  domArr[num-1].style.backgroundColor = "white";
                }
                domArr[num].style.backgroundColor = "pink";
              }
              })(i),i*1000);
}
}*/



/****以上为学习部分，以下为该任务所用到的程序*****/

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
  //console.log(domArr);
}

//动画展示遍历过程
//链式调用setTimeOut函数，达到动画效果
//用递归避免settimeout调用带参函数
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
//用闭包实现setTimeout
function ac(){
  for(var i=0;i<4;i++){
    setTimeout((function (m){
      return function (){
        console.log(m);
      }
     })(i),1000*i);
  }
}

/*
window.onload
*/
window.onload = function() {
  preOrder(document.body.getElementsByTagName("div")[0]);
  document.getElementsByClassName("btnStart")[0].onclick=function(){
    num=0;
    showDomArr();
    //console.log("yes");
    // ac();
  }
  // ac();
};

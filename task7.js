/**
 * Created by mshuang on 2017/6/9.
 */
//存放遍历出来的DOM树节点
var orderQueue = [];
//控制动画的变量
var inAnimation = false;

//用节点递归的方式实现遍历
//先序遍历
function preorder(root){
    orderQueue.push(root);
    if(root.firstElementChild!=null){
        preorder(root.firstElementChild);
    }
    if(root.lastElementChild!=null){
        preorder(root.lastElementChild);
    }
}

//中序遍历
function inorder(root){
    if(root.firstElementChild != null)
        inorder(root.firstElementChild);
    orderQueue.push(root);
    if(root.lastElementChild != null)
        inorder(root.lastElementChild);
}

//后序遍历
function postOrder(root) {
    if (root.firstElementChild != null)
        postOrder(root.firstElementChild);
    if (root.lastElementChild != null)
        postOrder(root.lastElementChild);
    orderQueue.push(root);
}

//显示遍历的过程
function render(){
    if(inAnimation){
        alert("动画运行中,wait...");
        return;
    }

    inAnimation = true;
    var i=0;
    orderQueue[i].style.backgroundColor='blue';

    //setInterval(function(),500)：每隔500毫秒调用function
    var showcolor = setInterval(function(){
        //让背景颜色变白
        i++;
        if( i>= orderQueue.length){
            clearInterval(showcolor);
            orderQueue[orderQueue.length-1].style.backgroundColor = '#fff';
            inAnimation = false;
            return;
        }
        orderQueue[i-1].style.backgroundColor = '#fff';

        orderQueue[i].style.backgroundColor = 'blue';
    },1000);
}
//获取最根部的节点
var rootNode = document.getElementById('root');

//页面加载是按钮绑定事件
window.onload = function() {
    document.getElementById("preOrder").onclick = function () {
        preorder(rootNode);
        render();
    }

    document.getElementById("inOrder").onclick = function () {
        inorder(rootNode);
        render();
    }

    document.getElementById("postOrder").onclick = function () {
        postOrder(rootNode);
        render();
    }
}


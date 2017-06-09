/**
 * Created by mshuang on 2017/6/9.
 */
//��ű���������DOM���ڵ�
var orderQueue = [];
//���ƶ����ı���
var inAnimation = false;

//�ýڵ�ݹ�ķ�ʽʵ�ֱ���
//�������
function preorder(root){
    orderQueue.push(root);
    if(root.firstElementChild!=null){
        preorder(root.firstElementChild);
    }
    if(root.lastElementChild!=null){
        preorder(root.lastElementChild);
    }
}

//�������
function inorder(root){
    if(root.firstElementChild != null)
        inorder(root.firstElementChild);
    orderQueue.push(root);
    if(root.lastElementChild != null)
        inorder(root.lastElementChild);
}

//�������
function postOrder(root) {
    if (root.firstElementChild != null)
        postOrder(root.firstElementChild);
    if (root.lastElementChild != null)
        postOrder(root.lastElementChild);
    orderQueue.push(root);
}

//��ʾ�����Ĺ���
function render(){
    if(inAnimation){
        alert("����������,wait...");
        return;
    }

    inAnimation = true;
    var i=0;
    orderQueue[i].style.backgroundColor='blue';

    //setInterval(function(),500)��ÿ��500�������function
    var showcolor = setInterval(function(){
        //�ñ�����ɫ���
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
//��ȡ������Ľڵ�
var rootNode = document.getElementById('root');

//ҳ������ǰ�ť���¼�
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


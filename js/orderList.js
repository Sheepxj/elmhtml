window.onload = function (){
    //获取显示隐藏按钮dom数组
    let showbtnArr = document.getElementsByClassName('fa-caret-down');
    //获取订单明细dom数组
    let detailArr = document.getElementsByClassName('order-details');


    for(let i=0;i<showbtnArr.length;i++){
        detailArr[i].style.display='none';
    }

    for(let i=0;i<showbtnArr.length;i++){
        showbtnArr[i].onclick = function (){
            if(detailArr[i].style.display=='none'){
                detailArr[i].style.display='block';
            }else{
                detailArr[i].style.display='none';
            }
        }
    }
}
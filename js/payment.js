window.onload = function (){
    //获取显示隐藏按钮dom对象
    let showbtn = document.getElementById('showbtn');
    //获取订单明细dom对象
    let detail = document.getElementById('detail');

    detail.style.display='none';

    showbtn.onclick = function (){
        //判断订单明细dom对象是否显示
        if(detail.style.display=='none'){
            detail.style.display='block';
        }else{
            detail.style.display='none'
        }
    }
}
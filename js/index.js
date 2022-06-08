//让顶部搜索条固定
window.onload = function (){
    document.onscroll = function (){
        //获取滚动条位置
        let s1 = document.documentElement.scrollTop;
        let s3 = document.body.scrollTop;
        let scroll = s1==0?s2:s1;
        //获取视口宽度
        let width = document.documentElement.clientWidth;
        //获取顶部固定块
        let search = document.getElementById('fixwindow')
        //判断滚动条是否到该固定的时刻
        if(scroll>width*0.12){
            search.style.position = 'fixed'
            search.style.left = '0';
            search.style.top = '0';
        }else{
            search.style.position = 'static'
        }
    }
}
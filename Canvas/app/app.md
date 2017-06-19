 

获取元素css属性
getComputedStyle(elem,null).getPropertyValue("height")
手指触摸
touchstart
手指移动
touchmove
手指移开
touchend
获取当前窗口大小变化
window.onresize

     可以判断app横屏还是竖屏

 orientation
        landscape 横屏识别 
        portrait  竖屏识别*/
  orientation
        landscape 横屏识别 
        portrait  竖屏识别*/

    @media screen and (orientation:portrait){
        .box::after{
            content: "竖屏";
        }
        .box{
            background-color: #ff0;
            width: 100%;
            height: 100px;
        }
    }

    @media screen and (orientation:landscape){
        .box::after{
            content: "横屏";
        }
        .box{
            background-color: blue;
            width: 100%;
            height: 100px;
        }
    }
电视
 @media only tv { 
             .box { 
                background: red; 
           } 
       } 

@media all and(min-width:1200px){
html {
        font-size: 20px;
    }
}

@media all and(min-width:1024px) and (max-width:1100px) {
    html {
        font-size: 20px;
    }
}
@media all and(max-width:768px) and (max-width:1023px) {
    html {
        font-size: 19px;
    }
}

@media all and(max-width:400px) and (max-width:767px) {
    html {
        font-size: 18px;
    }
}
@media all and(max-width:321px) and (max-width:399px) {
    html {
        font-size: 16.2px;
    }
}
@media all and(max-width:220px) and (max-width:320px) {
    html {
        font-size: 16.2px;
    }
}
@media all and(max-width:219px){
    html {
        font-size: 16px;
    }
}
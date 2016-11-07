<template>
  <div id="app">
      <banner></banner>
      <bd></bd>
      <ft></ft>
  </div>
</template>

<script>
/* eslint-disable no-new */
import Banner from './components/Banner'
import Bd from './components/Bd'
import Ft from './components/Ft'
export default {
  components: {Banner, Bd, Ft}
}
</script>

<style>
html body {
    margin: 0;
    padding: 0;
}
ul {
    list-style: none;
}
a:link{text-decoration:none;}
a:visited{text-decoration:none;}
a:active{text-decoration:none;}

/* 顶部banner */
.headerBanber {
    position: relative;
    width: 100%;
    text-align: center;
}
.headerBanber .headerImg {
    width: 100%;
}
.headerBanber .headerText {
    width: 80%;
    font-size: 20px;
    position: absolute;
    top: 40%;
    line-height: 44%;
    color: #fff;
    left: 10%;
    text-shadow: 2px 2px 20px rgba(0, 0, 0, 1.25);
}

/* nav */
.headerNav {
    position: relative;
    width: 100%;
    height: 44px;
    font-size: 15px;
    border-bottom: 1px solid #edeadd;
}
.headerNav .navigations {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 45px;
    line-height: 45px;
}
.headerNav .navigations .my-jifen {
    width: 49%;
    text-align: center;
    float: left;
    color: #574324
}
.headerNav .navigations .my-jifen .btn-login {
    color: #ff9000;
}
.headerNav .navigations .my-jifen .jifen {
    color: #ff9000
}
.headerNav .navigations .line {
    width: 1px;
    height: 30px;
    float: left;
    margin-top: 6px;
    border-right: 1px solid #edeadd;
}
.headerNav .navigations .add-jifen {
    width: 49%;
    text-align: center;
    float: left;
    color: #574324;
}
.icon-been {
    display: inline-block;
    margin-left: 10px;
    width: 16px;
    height: 16px;
    background: url('http://cdn7.jinxidao.com/activity/jifenlead/images/icon01.png') no-repeat;
    background-size: 100% 100%;
    margin-bottom: -2px;

}


.horizontal-line:after{content: "";height: 1px;width: 100%;position: absolute;bottom: 0;left: 0;background-color: #eae1d2;transform:scaleY(0.5);-webkit-transform:scaleY(0.5);-o-transform:scaleY(0.5);}



.item-list{padding-left: 0.375rem;position: relative;}
.item-list .item{position: relative;padding: 0.25rem 0;}
.item-list .item:last-child:after{display: none;}
.item-list .item .title{line-height: 0.7812rem;text-overflow:ellipsis;white-space: nowrap;overflow: hidden;padding-right: 2.3rem;color: #beb1a9;font-weight: normal;font-size: 0.35rem;}
.item-list .item .title .title-text{font-weight: bold;font-size: 0.4375rem;color: #604e32;}
.item-list .item .title .tips{margin-left: .1rem;}
.item-list .item .title .tips span{color: #ff9000;}
.item-list .item .info{color: #8b7a69;line-height: 0.7812rem;padding-right: 2.3rem;}
.item-list .item .info > span{width: 3.5938rem;display: inline-block;font-size: 0.38rem;}
.item-list .item .info .score-detail{overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;}
.item-list .item .info .score-detail img{width: 0.4rem;height: 0.4rem;vertical-align: -0.07rem;display: inline-block;}
.item-list .item .info .cash-detail{}
.item-list .item .btn{position: absolute;right: 0.375rem;top: 50%;transform:translateY(-50%);-webkit-transform:translateY(-50%);-o-transform:translateY(-50%);background-color: #ff9000;color: #fff;width: 1.5625rem;line-height: 0.7812rem;text-align: center;border-radius: 0.1rem;}

.icon{display: inline-block;background: url(http://cdn7.jinxidao.com/activity/jifenlead/images/sprite-icons.png);width: 0.5938rem;height: 0.5938rem;background-size: 1.7812rem 0.5938rem;vertical-align: -0.12rem;}
.icon-home{margin-left: 0.2rem;background-image: url(http://cdn7.jinxidao.com/activity/jifenlead/images/icon-home-empty.png);background-size: 100% 100%;background-color: #ff9900;width: 0.5312rem;height: 0.5312rem;vertical-align: -0.07rem;}
.icon-score{background-position: -0.65rem 0;}
.icon-cash{background-position: -1.1875rem 0;}

.footer{padding: 0.3125rem 0.375rem;}
.footer img{ width: 100%;border-radius: 0.15rem;max-height: 4.375rem;}

/*页面loading加载效果*/
.loading{position: fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: #fff;z-index: 1;background-color: #f0ede2;}
.loading .content{width: 2.5rem;height: 2.5rem;position: absolute;left: 50%;top: 50%;transform:translate(-50%,-50%);background-color: #fff;border-radius: 50%;background: url(http://cdn7.jinxidao.com/activity/jifenlead/images/loading-bg6.png);background-size: 6.8594rem  2.5rem;background-position: 0% 0;background-color: #fff;-webkit-animation: moveBg 1s linear 0s infinite;}
.loading .content:before{display: inline-block;width: 100%;height: 100%;background: url(http://cdn7.jinxidao.com/activity/jifenlead/images/loading-car1.png);background-size: 100% 100%;content: "";-webkit-animation: changeCar 0.2s linear 0s infinite;-webkit-transition:none;}

@-webkit-keyframes moveBg /* Safari 和 Chrome */
{
from {background-position: 0% 0;}
to {background-position: 100% 0;}
}

@-webkit-keyframes changeCar /* Safari 和 Chrome */
{
0% {background-image: url(http://cdn7.jinxidao.com/activity/jifenlead/images/loading-car1.png);}
50% {background-image: url(http://cdn7.jinxidao.com/activity/jifenlead/images/loading-car2.png);}
}

/*进入页面相应初始化*/
.E_PageModule{display: none;}
</style>

<template>
  <div>
    <Countdown v-for="item in list" v-bind:options="item"></Countdown>
    <div class="header E_PageModule" style="display: block;">
        <div class="banner">
            <img src="http://cdn6.jinxidao.com/group1/M00/00/8B/oYYBAFe-Tr2AOajaAADDVO6nFoo135.jpg?imageMogr2/thumbnail/640x/gravity/Center/crop/640x280|imageView2/2/interlace/1/q/85/">
            <!--<p>做任务，赚积分</p>-->
        </div>
        <div class="nav-option horizontal-line">
            <div class="col-l">我的积分<span class="count J_Link" data-href="http://m.yaochufa.com//user/login" style="color: rgb(255, 144, 0);" @click="login">登录查看</span></div>
            <div class="col-r J_Link" data-href="/index/lead?appcitycode=0">积分游乐场<i class="icon icon-home" style="background-color: rgb(255, 144, 0);"></i></div>
        </div>
    
    </div>
  </div>
</template>

<script>
import Countdown from './../../../components/Countdown'
let countList = [{second: 3, cb: function (com) { window.console.log(this) }}, {second: 1}, {second: 113}]
export default {
  components: {Countdown},
  data () {
    return {
      msg: 'Hello V3ue113112!2',
      list: countList
    }
  },
  methods: {
    login (id) {
      window.alert(1)
    },
    clickCountdown (param) {
      window.alert(2)
    }
  }
}
</script>

<style scoped>
.header{position: relative;}
.header .banner{position: relative;}
.header .banner img{width: 100%;max-height: 4.375rem;}
.header .banner p{color: white;position: absolute;top: 50%;left: 0;display: block;width: 100%;text-align: center;font-size: 0.552rem;transform:translateY(-50%);-webkit-transform:translateY(-50%);-o-transform:translateY(-50%);    text-shadow: 2px 2px 20px rgba(0, 0, 0, 1.25);}
.header .nav-option{padding: 0.2rem 0;}
.header .nav-option > div{width: 50%;display: inline-block;text-align: center;line-height: 0.7812rem;font-size: 0.3906rem;color: #574324;}
.header .nav-option .col-l{float: left;position: relative;}
.header .nav-option .col-l:after{content: "";height: 100%;width: 1px;position: absolute;right: 0;top: 0;background-color: #eae1d2;transform:scaleX(0.5);-webkit-transform:scaleX(0.5);-o-transform:scaleX(0.5);}
.header .nav-option .col-l .count{color: #ff9000;margin-left: 0.3rem;}
</style>
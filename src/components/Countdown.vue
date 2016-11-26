<template>
  <div class="countdown" @click="clickCountDown">
    <h1>倒计时模块 剩余{{ options.second }}秒</h1>
  </div>
</template>

<script>
/**
 * 传入参数: options
 * {
 *   second: 59         (倒计时剩余秒数)
 *   cb: function(){}   (倒计时倒数到0时候执行)
 * }
 */
export default {
  props: ['options'],
  data () {
    return {
    }
  },
  created () {
    console.clear()
    console.log('compoment Countdown created')
    this.options.cb = this.options.cb || (() => { console.log('默认事件：倒计时结束') })
  },
  methods: {
    clickCountDown () {
      console.log(this.options)
    }
  },
  mounted () {
    this.handle = setInterval(() => {
      if (this.options.second-- === 0) {
        // window.alert(1)
        if (typeof this.options.cb === 'function') {
          console.log(this)
          this.options.cb()
        }
      }
    }, 1000)
  },
  destroyed () {
    clearInterval(this.handle)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.countdown{
	background-color:green;
}
h1 {
  color: #B9B622;
}
</style>

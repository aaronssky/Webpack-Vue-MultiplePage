<template>
  <div class="countdown">
    <h1>倒计时模块 剩余{{ count }}秒</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 10
    }
  },
  mounted () {
    this.handle = setInterval(() => {
      this.count++
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

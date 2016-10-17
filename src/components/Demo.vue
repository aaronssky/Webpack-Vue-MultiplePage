<template>
  <div class="demo">
    <h1>demo组件222 剩余{{ count }}秒</h1>
  </div>
</template>

<script>
/*
vue2.0钩子定义 http://vuefe.cn/guide/instance.html#实例生命周期
 */
export default {
  data () {
    return {
      count: 0
    }
  },
  beforeCreate () {
    console.log('vue init')
  },
  created () {
    console.log('vue created')
  },
  beforeMount () {
    console.log('vue beforeMount')
  },
  mounted () {
    console.log('vue mounted')
    this.handle = setInterval(() => {
      if (this.count === 10) {
        // this.$destroy()
      }
      this.count++
    }, 1000)
  },
  beforeUpdate () {
    // 组件更新之前
    // console.log('vue beforeUpdate')
  },
  updated () {
    // 组件更新之前
    // console.log('vue updated')
  },
  beforeDestroy () {
    console.log('vue beforeDestroy')
  },
  destroyed () {
    console.log('vue destroyed')
    clearInterval(this.handle)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo{
	background-color:green;
}
h1 {
  color: #B9B622;
}
</style>

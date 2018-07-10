<template lang="pug">
div(ok)
  h1.red hello
</template>

<script>
export default {
  data () {
    return {
      msg: 'fesfff'
    }
  }
}
</script>

<style lang="stylus">
.red
  color red
</style>

<foo>
export default comp => {
  console.log(comp.options.data())
}
</foo>

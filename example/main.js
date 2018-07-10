import Vue from 'vue'
import Foo from './source.vue'

import('./common2.js').then(obj => {
  console.log(obj.default)
})

new Vue({
  el: '#app',
  render: h => h(Foo)
})

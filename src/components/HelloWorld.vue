<template>
  <div class="hello">
    <h1>{{ msg }} + {{ state.count }}</h1>
    
    <button @click="handleClick">log message</button>
    <br>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { reactive, ref } from '@vue/composition-api'

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup (props, self) {
    
    const state = reactive({
      count: ref(0)
    })

    function handleClick () {
      state.count++
      console.log('self', self)
    }
    return {
      handleClick,
      state
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

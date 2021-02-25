<template>
<div class="Home">
  Home
  <button @click="increase">increase</button>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { increase } from '../../store'

export default defineComponent({
  name: 'Home',
  setup () {
    return {
      increase
    }
  }
})
</script>
<style lang="postcss">
.home {
  
}
</style>
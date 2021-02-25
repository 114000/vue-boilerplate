<template>
<div class="About">
  <div class="title">About</div>
  <button class="button" @click="decrease">decrease</button>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { decrease } from '../../store'

export default defineComponent({
  name: 'About',
  setup () {
    return {
      decrease
    }
  }
})
</script>
<style lang="postcss">
.About .title {
  @apply text-green-500 text-2xl border-green-500 ml-4;
}

.About .button {
  @apply rounded bg-green-700 text-white px-4 py-2 focus:ring-4;
}
</style>
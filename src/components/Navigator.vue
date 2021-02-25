<template>
<div class="cmp-navigator">
  <router-link 
    :key="i" 
    v-for="(item, i) in items" 
    :to="item.value">
    {{ item.name }}
  </router-link>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'cmp-navigator',
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  },
  setup (props) {

    return {

    }
  }
})
</script>
<style lang="postcss">
.cmp-navigator {
  
}
</style>
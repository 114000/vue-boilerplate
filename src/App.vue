<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <navigator :items="navItems" />
  <p>count: {{ store.count }}</p>
  <router-view></router-view>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Navigator } from './components'
import { useStore } from './store'
export default defineComponent({
  name: 'App',
  components: { Navigator },
  setup () {

    return {
      store: useStore(),
      navItems: [
        { name: 'Go Home', value: '/' },
        { name: 'Go About', value: '/about' },
      ]
    }
  }
})
</script>

<style>
</style>
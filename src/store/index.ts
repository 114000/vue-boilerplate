import { createGlobalState } from '@vueuse/core'
import { reactive } from 'vue'

// simple
export const useStore = createGlobalState(() => {
  return reactive({
    count: 0
  })
})

export function increase () {
  const store = useStore()

  store.count += 1
}

export function decrease () {
  const store = useStore()

  store.count -= 1
}
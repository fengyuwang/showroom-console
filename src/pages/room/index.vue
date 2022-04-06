<template>
  <component :is="layout" v-if="layout">
    <component :is="component" v-if="component" />
  </component>
</template>

<script>
import store from '@/store/index.js'
import Events, { emitter } from '@/events/index.js'
import One from '@/layouts/rooms/one.vue'
import Two from '@/layouts/rooms/two.vue'
export default {
  data() {
    return {
      layout: undefined,
      component: undefined
    }
  },
  async created() {
    this.layout =
      store.state.roomId === 1
        ? One
        : store.state.roomId === 2
        ? Two
        : undefined
    if (this.layout === undefined) {
      uni.navigateTo({
        url: '/pages/index/index'
      })
    }
    emitter.on(Events.Room.DidClickMenu, this.didClickMenu)
  },
  unmounted() {
    emitter.off(Events.Room.DidClickMenu, this.didClickMenu)
  },
  methods: {
    didClickMenu(item) {
      this.component = item.component
    }
  }
}
</script>

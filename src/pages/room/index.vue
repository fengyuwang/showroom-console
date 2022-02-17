<template>
  <Layout>
    <component :is="items[index]" />
  </Layout>
</template>

<script>
import One from '@/components/rooms/one/contents/One.vue'
import Two from '@/components/rooms/one/contents/Two.vue'
import Three from '@/components/rooms/one/contents/Three.vue'
import Four from '@/components/rooms/one/contents/Four.vue'
import Five from '@/components/rooms/one/contents/Five.vue'
import Six from '@/components/rooms/one/contents/Six.vue'
import Layout from '@/layouts/rooms/One.vue'
import Events, { emitter } from '@/events/index.js'
import store from '@/store/index.js'
export default {
  components: {
    Layout,
    One,
    Two,
    Three,
    Four,
    Five,
    Six
  },
  data() {
    return {
      items: [One, Two, Three, Four, Five, Six],
      index: undefined
    }
  },
  mounted() {
    this.index = store.state.menuIndex
    emitter.on(Events.Room.DidClickMenu, this.didClickMenu)
  },
  unmounted() {
    emitter.off(Events.Room.DidClickMenu, this.didClickMenu)
  },
  methods: {
    didClickMenu(index) {
      this.index = index
    }
  }
}
</script>

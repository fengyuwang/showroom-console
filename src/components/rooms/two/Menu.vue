<template>
  <div class="flex flex-col relative h-full">
    <view
      v-for="(item, index) in items"
      :key="index"
      class="flex flex-col py-8 my-2 rounded-2xl text-white"
      :class="index === currentIndex ? 'highlight' : 'normal'"
      @tap="tap(index)"
    >
      <div class="flex flex-col mx-8">
        <div class="text-2xl">{{ item.title }}</div>
        <div>{{ item.subtitle }}</div>
      </div>
    </view>
  </div>
</template>

<script>
import { send } from '@/socket/index.js'
import Events, { emitter } from '@/events/index.js'
import store from '@/store/index.js'
export default {
  data() {
    return {
      items: undefined,
      currentIndex: undefined
    }
  },
  mounted() {
    emitter.on(Events.Room.Reset, this.reset)
  },
  unmounted() {
    emitter.off(Events.Room.Reset, this.reset)
  },
  created() {
    const _items = [
      {
        title: '海量片库',
        subtitle: 'Opening',
        icon: '',
        tag: 2
      },
      {
        title: '平台运营',
        subtitle: 'Platform operation',
        icon: '',
        tag: 3
      },
      {
        title: '制作团队',
        subtitle: 'Teams introduction',
        icon: '',
        tag: 4
      },
      {
        title: '会员业务',
        subtitle: 'VIP Business',
        icon: '',
        tag: 5
      },
      {
        title: '影视集群',
        subtitle: 'Films & TV Collection',
        icon: '',
        tag: 6
      },
      {
        title: '大芒计划',
        subtitle: 'Damang Project',
        icon: '',
        tag: 7
      },
      {
        title: '小芒电商',
        subtitle: 'Mang shop',
        icon: '',
        tag: 8
      },
      {
        title: '青芒计划',
        subtitle: 'Qingmang Plan',
        icon: '',
        tag: 9
      },
      {
        title: '实景娱乐',
        subtitle: 'M-City',
        icon: '',
        tag: 7
      },
      {
        title: '艺人',
        subtitle: 'Actors',
        icon: '',
        tag: 10
      }
    ]
    this.items = _items
    store.state.menuIndex = this.currentIndex
  },
  methods: {
    tap(index) {
      if (index === this.currentIndex) return
      this.currentIndex = index
      emitter.emit(Events.Room.DidClickMenu, this.currentIndex)
      store.state.menuIndex = this.currentIndex
      if (index >= 0) {
        store.state.currentItem = this.items[index]
        const data = {
          type: 'opt',
          room_id: store.state.roomId,
          page_id: store.state.currentItem.tag,
          operation_id: 0
        }
        send(JSON.stringify(data))
      } else {
        store.state.currentItem = undefined
      }
    },
    reset() {
      this.tap(undefined)
    }
  }
}
</script>
<style scoped>
.normal {
  @apply bg-rooms-cell-default opacity-30;
}
.highlight {
  @apply bg-gradient-to-r from-rooms-cell-from to-rooms-cell-to;
}
</style>

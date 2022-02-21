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
  created() {
    const _items = [
      {
        title: '大事记',
        subtitle: 'Timeline',
        icon: '',
        tag: 1
      },
      {
        title: '发展态势',
        subtitle: 'Development Trend',
        icon: '',
        tag: 2
      },
      {
        title: '全球数据',
        subtitle: 'Global Data',
        icon: '',
        tag: 3
      },
      {
        title: '荣誉奖项',
        subtitle: 'Honorary Award',
        icon: '',
        tag: 4
      },
      {
        title: '用户画像',
        subtitle: 'MangoTV User',
        icon: '',
        tag: 5
      },
      {
        title: '芒果超媒构成',
        subtitle: 'MangoTV Media Constitute',
        icon: '',
        tag: 6
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
      const data = {
        type: 'opt',
        room_id: '1',
        page_id: this.items[index].tag,
        operation_id: 0
      }
      send(JSON.stringify(data))
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

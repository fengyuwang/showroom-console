<template>
  <div class="absolute w-2/5 top-4 bottom-10 flex flex-col">
    <div class="flex gap-1">
      <view
        v-for="item in items"
        :key="item.tag"
        class="text-xs relative w-18 h-10 -mb-1 z-10 rounded-t-xl border-primary border-t-4 border-l-4 border-r-4 flex items-center justify-center"
        :class="
          tag === item.tag
            ? ['bg-background', 'text-primary']
            : ['bg-primary', 'text-white']
        "
        @tap="tap(item)"
      >
        {{ item.title }}
      </view>
    </div>
    <view
      class="relative flex-grow flex flex-col justify-center bg-background rounded-b-xl rounded-r-xl border-primary border-4"
    >
      <div class="flex justify-center item-center overflow-hidden">
        <Control />
      </div>
    </view>
  </div>
</template>

<script>
import { send } from '@/socket/index.js'
import store from '@/store/index.js'
import Control from '@/components/foundation/Control.vue'
export default {
  components: {
    Control
  },
  data() {
    return {
      tag: undefined,
      payload: undefined,
      items: [
        {
          title: '默认',
          tag: 0
        },
        {
          title: '开拓朋友圈',
          tag: 1
        },
        {
          title: '丰富的权益',
          tag: 2
        },
        {
          title: '极致的内容',
          tag: 3
        }
      ]
    }
  },
  created() {
    this.tap(this.items[0])
  },
  methods: {
    tap(item) {
      const data = {
        type: 'opt',
        room_id: store.state.roomId,
        page_id: store.state.currentItem.tag,
        data: {
          planet: item.tag
        }
      }
      send(JSON.stringify(data))
      this.tag = item.tag
      this.payload = {
        data: {
          planet: item.tag
        }
      }
    }
  }
}
</script>

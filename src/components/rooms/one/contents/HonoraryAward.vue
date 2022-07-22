<template>
  <view
    class="absolute w-2/5 top-4 bottom-10 flex flex-col justify-center bg-background rounded-xl border-primary border-4"
  >
    <div class="flex flex-col overflow-y-scroll">
      <view
        v-for="(row, index) in rows"
        :key="index"
        class="flex justify-center align-center p-5 m-2 rounded-lg"
        :class="
          currentIndex == index
            ? 'bg-primary text-white'
            : 'bg-white text-primary'
        "
        @tap="tap(index)"
      >
        {{ row }}
      </view>
    </div>
  </view>
</template>

<script>
import { send } from '@/socket/index.js'
import store from '@/store/index.js'
export default {
  data() {
    return {
      rows: [
        '世界媒体500强',
        '综合实力企业20强',
        '湖南省省长质量奖',
        '超媒文化企业30强',
        '软件百强企业',
        '荣誉墙'
      ],
      currentIndex: undefined
    }
  },
  methods: {
    tap(index) {
      if (this.currentIndex === index) {
        return
      }
      this.currentIndex = index
      const data = {
        type: 'opt',
        room_id: store.state.roomId,
        page_id: store.state.currentItem.tag,
        operation_id: 0,
        data: {
          tex: this.currentIndex
        }
      }
      send(JSON.stringify(data))
    }
  }
}
</script>

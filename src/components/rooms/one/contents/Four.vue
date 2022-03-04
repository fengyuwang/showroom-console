<template>
  <view
    class="absolute w-2/5 top-4 bottom-10 flex flex-col justify-between bg-background rounded-xl border-primary border-4"
  >
    <div class="flex flex-col mx-8 mt-8 z-10 text-primary text-xl">
      <div>Honorary Award</div>
    </div>
    <div class="flex flex-col">
      <view
        v-for="(row, index) in rows"
        :key="index"
        class="flex justify-center align-center p-5 m-2 rounded-lg text-xl"
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
    <div class="flex flex-col items-end mx-8 mb-8 z-10 text-primary text-3xl">
      <div>荣誉奖项</div>
    </div>
  </view>
</template>

<script>
import { send } from '@/socket/index.js'
export default {
  data() {
    return {
      rows: [
        '世界媒体500强',
        '综合实力企业20强',
        '湖南省省长质量奖',
        '超媒文化企业30强',
        '软件百强企业'
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
        room_id: 1,
        page_id: 4,
        operation_id: 0,
        data: {
          tex: this.currentIndex + 1
        }
      }
      send(JSON.stringify(data))
    }
  }
}
</script>

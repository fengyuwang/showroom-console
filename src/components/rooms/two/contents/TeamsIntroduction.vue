<template>
  <view
    class="absolute w-2/5 top-4 bottom-10 flex flex-col justify-center bg-background rounded-xl border-primary border-4"
  >
    <div class="flex justify-center item-center overflow-hidden">
      <Control />
    </div>
    <div class="flex items-center justify-center">
      <button
        class="w-60px h-60px flex items-center justify-center"
        @click="toggle"
      >
        <image
          v-if="isPaused"
          src="@/assets/images/scaffold/icon-play.png"
          class="w-30px h-30px"
          alt=""
        />
        <image
          v-else
          src="@/assets/images/scaffold/icon-pause.png"
          class="w-30px h-30px"
          alt=""
        />
      </button>
    </div>
  </view>
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
      isPaused: false
    }
  },
  methods: {
    toggle() {
      this.isPaused = !this.isPaused
      const data = {
        type: 'opt',
        room_id: store.state.roomId,
        page_id: store.state.currentItem.tag,
        pause: this.isPaused ? 1 : 0
      }
      send(JSON.stringify(data))
    }
  }
}
</script>

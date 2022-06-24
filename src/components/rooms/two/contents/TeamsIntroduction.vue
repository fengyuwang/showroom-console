<template>
  <div class="absolute w-2/5 top-4 bottom-10 flex flex-col">
    <div class="flex gap-1">
      <view
        v-for="item in items"
        :key="item.tag"
        class="relative w-24 h-14 -mb-1 z-10 rounded-t-xl border-primary border-t-4 border-l-4 border-r-4 flex items-center justify-center"
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
      isPaused: false,
      tag: undefined,
      payload: undefined,
      items: [
        {
          title: '默认',
          tag: -1
        },
        {
          title: '节目团队',
          tag: 0
        },
        {
          title: '影视制作',
          tag: 1
        },
        {
          title: '新芒工作室',
          tag: 2
        }
      ]
    }
  },
  methods: {
    toggle() {
      this.isPaused = !this.isPaused
      const data = {
        type: 'opt',
        room_id: store.state.roomId,
        page_id: store.state.currentItem.tag,
        data: {
          pause: this.isPaused ? 1 : 0
        }
      }
      send(JSON.stringify(data))
    },
    tap(item) {
      const data = {
        type: 'opt',
        room_id: store.state.roomId,
        page_id: store.state.currentItem.tag,
        data: {
          team: item.tag
        }
      }
      send(JSON.stringify(data))
      this.tag = item.tag
      this.payload = {
        data: {
          team: item.tag
        }
      }
    }
  }
}
</script>

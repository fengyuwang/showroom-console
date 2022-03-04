<template>
  <div class="absolute flex inset-0 bg-black">
    <Aside>
      <div class="flex flex-col ml-10">
        <image
          src="@/assets/images/control/control-play.png"
          class="w-50px h-50px hover:bg-white hover:rounded-full"
          @tap="play"
        />
        <span class="text-primary ml-1">宣传片</span>
      </div>

      <image
        src="@/assets/images/scaffold/aside-back.png"
        class="w-20px h-34px mb-12 ml-12"
        @tap="tap"
      />
    </Aside>
    <div class="relative flex flex-col flex-grow">
      <Header />
      <main class="relative flex flex-grow h-0">
        <view class="w-1/2 overflow-y-auto">
          <Menu />
        </view>
        <view class="w-1/2 overflow-hidden flex items-center justify-center">
          <slot />
        </view>
      </main>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'
import Menu from '@/components/rooms/one/Menu.vue'
import { send } from '@/socket/index.js'
import store from '@/store/index.js'
export default {
  components: {
    Menu,
    Header,
    Aside
  },
  methods: {
    play() {
      const data = {
        type: 'opt',
        room_id: store.state.roomId,
        page_id: 1
      }
      send(JSON.stringify(data))
    },
    tap() {
      uni.showModal({
        title: '是否确认返回',
        content: '返回屏幕选择入口后，当前屏幕会回到初始状态。',
        showCancel: true,
        success: function (res) {
          if (res.confirm) {
            const data = {
              type: 'opt',
              room_id: store.state.roomId,
              page_id: 0
            }
            send(JSON.stringify(data))
            uni.navigateBack()
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col ml-10">
      <image
        src="@/assets/images/control/control-play.png"
        class="w-36px h-36px ml-2 hover:bg-white hover:rounded-full"
        @tap="tap"
      />
      <span class="text-primary ml-1">宣传片</span>
    </div>
    <div class="flex flex-col ml-10">
      <image
        src="@/assets/images/scaffold/home.png"
        class="w-30px h-30px ml-3 hover:bg-white hover:rounded-full"
        @tap="home"
      />
      <span class="text-primary ml-3">首页</span>
    </div>
  </div>
</template>

<script>
import { send } from '@/socket/index.js'
import store from '@/store/index.js'
import Events, { emitter } from '@/events/index.js'
export default {
  methods: {
    tap() {
      emitter.emit(Events.Room.DidClickAside)
    },
    home() {
      const data = {
        type: 'opt',
        room_id: store.state.roomId,
        page_id: 0
      }
      send(JSON.stringify(data))
      emitter.emit(Events.Room.Reset)
    }
  }
}
</script>

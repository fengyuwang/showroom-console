<template>
  <div class="flex flex-col ml-10">
    <image
      src="@/assets/images/control/control-play.png"
      class="w-50px h-50px hover:bg-white hover:rounded-full"
      @tap="tap"
    />
    <span class="text-primary ml-1">宣传片</span>
  </div>
</template>

<script>
import Events, { emitter } from '@/events/index.js'
export default {
  methods: {
    tap() {
      emitter.emit(Events.Room.DidClickAside)
    }
  }
}
</script>

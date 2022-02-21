<template>
  <view
    class="absolute w-2/5 top-4 bottom-10 flex flex-col justify-between bg-background rounded-xl border-primary border-4"
  >
    <div class="flex flex-col mx-8 mt-8 z-10 text-primary text-xl">
      <div>Honorary Award</div>
    </div>
    <div class="flex justify-center item-center">
      <Control />
    </div>
    <div class="flex flex-col items-end mx-8 mb-8 z-10 text-primary text-3xl">
      <div>荣誉奖项</div>
    </div>
  </view>
</template>

<script>
import Control from '@/components/foundation/Control.vue'
export default {
  components: {
    Control
  }
}
</script>

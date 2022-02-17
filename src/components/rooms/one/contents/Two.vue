<template>
  <view
    class="absolute w-2/5 top-4 bottom-10 flex flex-col justify-between bg-background rounded-xl border-primary border-4"
  >
    <div class="flex flex-col mx-8 mt-8 z-10 text-primary text-xl">
      <div>MangoTV</div>
      <div>Media Constitute</div>
    </div>
    <div class="flex justify-center item-center">
      <Control />
    </div>
    <div class="flex flex-col items-end mx-8 mb-8 z-10 text-primary text-xl">
      <div>芒果</div>
      <div>超媒构成</div>
    </div>
  </view>
</template>

<script>
import Control from '@/components/uikit/Control.vue'
export default {
  components: {
    Control
  }
}
</script>

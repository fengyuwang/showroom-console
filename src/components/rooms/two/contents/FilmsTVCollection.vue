<template>
  <view
    class="absolute w-2/5 top-4 bottom-10 flex flex-col justify-center bg-background rounded-xl border-primary border-4"
  >
    <div class="flex justify-center item-center overflow-hidden">
      <Control />
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

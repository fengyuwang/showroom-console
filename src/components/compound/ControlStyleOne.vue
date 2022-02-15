<template>
  <view class="relative px-6 h-10/12 flex items-center justify-center">
    <image
      class="absolute inset-0 w-full h-full"
      src="@/assets/images/control/control-style-one-background.png"
    />
    <Control />
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

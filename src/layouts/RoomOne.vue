<template>
  <Scaffold>
    <main class="relative flex flex-grow h-0">
      <view class="w-1/2 overflow-y-auto">
        <RoomOneMenuVue />
      </view>
      <view class="w-1/2 overflow-hidden flex items-center justify-center">
        <slot />
      </view>
    </main>
  </Scaffold>
</template>

<script>
import RoomOneMenuVue from '@/components/compound/RoomOneMenu.vue'
import Scaffold from '@/components/layout/Scaffold.vue'
export default {
  components: {
    RoomOneMenuVue,
    Scaffold
  }
}
</script>

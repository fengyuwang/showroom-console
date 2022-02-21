<template>
  <Scaffold>
    <main class="relative flex flex-grow h-0">
      <view class="w-1/2 overflow-y-auto">
        <Menu />
      </view>
      <view class="w-1/2 overflow-hidden flex items-center justify-center">
        <slot />
      </view>
    </main>
  </Scaffold>
</template>

<script>
import Menu from '@/components/rooms/one/Menu.vue'
import Scaffold from '@/components/Scaffold.vue'
export default {
  components: {
    Menu,
    Scaffold
  }
}
</script>

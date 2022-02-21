<template>
  <div class="absolute flex inset-0 bg-black">
    <Aside />
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

export default {
  components: {
    Menu,
    Header,
    Aside
  }
}
</script>

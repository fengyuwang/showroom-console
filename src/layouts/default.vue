<template>
  <div class="absolute flex inset-0 bg-black">
    <Aside />
    <div class="relative flex flex-col flex-grow">
      <Header />
      <main
        class="relative flex-grow bg-gray-4 overflow-y-auto overflow-x-hidden"
      >
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'

export default {
  components: {
    Header,
    Aside
  }
}
</script>

<template>
  <div class="absolute flex inset-0 bg-black">
    <Aside />
    <div class="relative flex flex-col flex-grow">
      <Header />
      <slot></slot>
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

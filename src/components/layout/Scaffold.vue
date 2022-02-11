<template>
  <div class="absolute flex flex-col inset-0">
    <Header />
    <div class="relative flex flex-grow">
      <Aside />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Aside from '@/components/layout/Aside.vue'

export default {
  components: {
    Header,
    Aside
  }
}
</script>

<template>
  <div class="absolute inset-0">
    <Header />
    <div class="absolute inset-x-0 bottom-0 overflow-hidden">
      <Aside />
      <div class="absolute inset-0 left-21">
        <slot></slot>
      </div>
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

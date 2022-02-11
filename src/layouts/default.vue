<template>
  <Scaffold>
    <main
      class="relative flex-grow bg-gray-4 overflow-y-auto overflow-x-hidden"
    >
      <router-view />
    </main>
  </Scaffold>
</template>

<script>
import Scaffold from '@/components/layout/Scaffold.vue'
export default {
  components: {
    Scaffold
  }
}
</script>

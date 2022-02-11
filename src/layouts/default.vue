<template>
  <Scaffold>
    <Aside />
    <main
      class="absolute inset-y-0 left-52 xl:left-84 right-0 bg-gray-4 overflow-y-auto overflow-x-hidden"
    >
      <router-view />
    </main>
  </Scaffold>
</template>

<script>
import Scaffold from '@/components/layout/Scaffold.vue'
import Aside from '@/components/layout/Aside.vue'
export default {
  components: {
    Scaffold,
    Aside
  }
}
</script>

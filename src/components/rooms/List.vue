<template>
  <div class="flex flex-col p-4 absolute w-full">
    <view
      v-for="item in items"
      :key="item.tag"
      class="flex flex-col my-2 items-center py-10 rounded-xl text-white normal hover:highlight"
      @tap="tap(item)"
    >
      <div class="text-2xl">{{ item.title }}</div>
      <div class="mt-4">{{ item.subtitle }}</div>
    </view>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import store from '@/store/index.js'
export default {
  data() {
    return {
      items: undefined,
      currentIndex: undefined
    }
  },
  created() {
    const _items = [
      {
        title: '一号厅',
        subtitle: 'Hall No.1',
        tag: 1
      },
      {
        title: '二号厅',
        subtitle: 'Hall No.2',
        tag: 2
      }
    ]
    this.items = _items
  },
  methods: {
    tap(item) {
      store.state.roomId = item.tag
      uni.navigateTo({
        url: '/pages/room/index'
      })
    }
  }
}
</script>
<style scoped>
.normal {
  @apply bg-rooms-cell-default;
}

.highlight {
  @apply bg-gradient-to-r from-rooms-cell-from to-rooms-cell-to;
}
</style>

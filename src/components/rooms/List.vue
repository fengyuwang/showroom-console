<template>
  <div class="flex flex-col p-4 absolute w-full">
    <view
      v-for="(item, index) in items"
      :key="index"
      class="flex flex-col my-2 items-center py-10 rounded-xl text-white normal hover:highlight"
      @tap="tap"
    >
      <div class="text-4xl">{{ item.title }}</div>
      <div class="mt-4">{{ item.subtitle }}</div>
    </view>
  </div>
</template>

<script>
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
        subtitle: 'Hall No.1'
      },
      {
        title: '二号厅',
        subtitle: 'Hall No.2'
      },
      {
        title: '三号厅',
        subtitle: 'Hall No.3'
      }
    ]
    this.items = _items
  },
  methods: {
    tap() {
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

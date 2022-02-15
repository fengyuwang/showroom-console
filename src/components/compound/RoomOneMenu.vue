<template>
  <view class="relative h-full">
    <view
      v-for="(item, index) in items"
      :key="index"
      class="flex items-center justify-center"
    >
      <image class="w-420px h-120px" :src="item.highlightImage" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      items: undefined
    }
  },
  created() {
    const _items = []
    for (let i = 0; i < 10; i++) {
      _items.push({
        normalImage: `/public/images/roomOne/room_0_menu_0.png`,
        highlightImage: `/public/images/roomOne/room_0_menu_highlight_0.png`
      })
    }
    this.items = _items
  }
}
</script>

<style></style>

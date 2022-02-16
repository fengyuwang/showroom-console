<template>
  <view class="relative h-full">
    <view
      v-for="(item, index) in items"
      :key="index"
      class="flex items-center justify-center"
      @touchstart="touchstart(index)"
      @touchend="touchend"
      @touchcancel="touchcancel"
    >
      <image
        class="w-423px h-113px"
        :src="index == currentIndex ? item.highlightImage : item.normalImage"
      />
    </view>
  </view>
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
    const _items = []
    for (let i = 0; i < 6; i++) {
      _items.push({
        normalImage: `/static/images/roomOne/${i}.png`,
        highlightImage: `/static/images/roomOne/${i}_h.png`
      })
    }
    this.items = _items
  },
  methods: {
    touchstart(index) {
      this.currentIndex = index
    },
    touchend() {
      this.currentIndex = undefined
    },
    touchcancel() {
      this.currentIndex = undefined
    }
  }
}
</script>

<style></style>

<template>
  <DefaultLayout>
    <view class="flex flex-col p-4 absolute w-full">
      <view
        v-for="(item, index) in items"
        :key="index"
        @touchstart="touchstart(index)"
        @touchend="touchend"
        @touchcancel="touchcancel"
      >
        <image
          mode="fixHeight"
          class="w-full"
          :src="index == currentIndex ? item.highlightImage : item.normalImage"
        />
      </view>
    </view>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/default.vue'
export default {
  components: {
    DefaultLayout
  },
  data() {
    return {
      items: undefined,
      currentIndex: undefined
    }
  },
  created() {
    const _items = []
    for (let i = 0; i < 3; i++) {
      _items.push({
        normalImage: `/static/images/roomSelect/room_option_${i}_normal.png`,
        highlightImage: `/static/images/roomSelect/room_option_${i}_highlight.png`
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

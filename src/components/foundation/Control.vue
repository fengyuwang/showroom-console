<template>
  <view
    class="relative inline-block"
    @touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend"
    @touchcancel="touchcancel"
  >
    <image
      class="w-344px h-344px"
      src="@/assets/images/control/control-background.png"
    />
    <view class="absolute inset-0">
      <view v-for="(button, index) in buttons" :key="index">
        <template v-if="index == currentIndex">
          <image
            src="@/assets/images/control/control-arrow-background.png"
            :class="button.backgroundClass"
          />
          <image
            src="@/assets/images/control/control-arrow.png"
            :class="button.class"
          />
        </template>
        <image
          v-else
          src="@/assets/images/control/control-arrow-disable.png"
          :class="button.class"
        />
      </view>
      <view class="absolute right-122px bottom-122px" @click="clickTest">
        <image
          class="w-100px h-100px"
          src="@/assets/images/control/control-center-play-disable.png"
        />
      </view>
    </view>
  </view>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      buttons: [
        {
          class: 'absolute left-70px top-152px w-40px h-40px',
          backgroundClass:
            'absolute top-106px left-8px w-190px h-134px transform rotate-270'
        },
        {
          class:
            'absolute right-70px top-152px w-40px h-40px transform rotate-180',
          backgroundClass:
            'absolute top-106px right-12px w-190px h-134px transform rotate-90'
        },
        {
          class:
            'absolute left-152px top-70px w-40px h-40px transform rotate-90',
          backgroundClass:
            'absolute top-38px left-75px w-190px h-134px transform'
        },
        {
          class:
            'absolute right-152px top-238px w-40px h-40px transform rotate-270',
          backgroundClass:
            'absolute top-173px left-75px w-190px h-134px transform rotate-180'
        }
      ],
      currentIndex: undefined
    }
  },
  methods: {
    touchstart(e) {
      const touch = _.first(e.touches)
      this._startTouch = touch
    },
    touchmove(e) {
      const touch = _.first(e.touches)
      const offsetX = touch.clientX - this._startTouch.clientX
      const offsetY = touch.clientY - this._startTouch.clientY
      if (Math.max(Math.abs(offsetX), Math.abs(offsetY)) <= 20) return
      if (Math.abs(offsetX) < Math.abs(offsetY)) {
        this.currentIndex = offsetY > 0 ? 3 : 2
      } else {
        this.currentIndex = offsetX > 0 ? 1 : 0
      }
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

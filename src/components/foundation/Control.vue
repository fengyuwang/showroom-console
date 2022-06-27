<template>
  <view
    class="p-20"
    @touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend"
    @touchcancel="touchcancel"
  >
    <div class="relative inline-block">
      <image
        class="w-344px h-344px"
        src="@/assets/images/control/control-background.png"
      />
      <div class="absolute inset-0">
        <div v-for="(button, index) in buttons" :key="index">
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
            @click="onClick(index)"
          />
        </div>
        <div class="absolute right-122px bottom-122px">
          <image
            v-if="currentIndex == 4"
            class="w-100px h-100px"
            src="@/assets/images/control/control-center-play.png"
          />
          <image
            v-else
            class="w-100px h-100px"
            src="@/assets/images/control/control-center-play-disable.png"
            @click="onClick(4)"
          />
        </div>
      </div>
    </div>
  </view>
</template>

<script>
import _ from 'lodash'
import { send } from '@/socket/index.js'
import store from '@/store/index.js'
export default {
  props: {
    payload: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      buttons: [
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
        },
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
        this.currentIndex = offsetY > 0 ? 1 : 0
      } else {
        this.currentIndex = offsetX > 0 ? 3 : 2
      }
    },
    touchend() {
      if (this.currentIndex === undefined) {
        return
      }
      const data = Object.assign(
        {},
        {
          type: 'opt',
          room_id: store.state.roomId,
          page_id: store.state.currentItem.tag,
          operation_id:
            this.currentIndex !== undefined ? this.currentIndex + 1 : 5
        },
        this.payload
      )
      send(JSON.stringify(data))
      this.currentIndex = undefined
    },
    touchcancel() {
      this.currentIndex = undefined
    },
    onClick(index) {
      this.currentIndex = index
      setTimeout(() => {
        this.touchend()
      }, 100)
    }
  }
}
</script>

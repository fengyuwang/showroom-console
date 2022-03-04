<template>
  <div
    class="absolute top-4 bottom-10 w-2/5 flex flex-col bg-background rounded-xl border-primary border-4"
  >
    <div class="flex flex-col mx-8 mt-8 z-10 text-primary">
      <div class="text-xl">大事记</div>
      <div>Timeline</div>
    </div>
    <div class="mx-8 mt-4 mb-10 overflow-scroll flex flex-wrap">
      <view
        v-for="year in years"
        :key="year"
        :class="year == current ? 'selected' : 'normal'"
        @tap="tap(year)"
      >
        {{ year }}
      </view>
    </div>
  </div>
</template>

<script>
import { send } from '@/socket/index.js'
export default {
  data() {
    return {
      years: [],
      current: undefined
    }
  },
  created() {
    const _years = [
      1949, 1970, 1993, 1996, 1997, 1999, 2000, 2001, 2002, 2004, 2005, 2006,
      2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
      2019, 2020, 2021
    ]
    this.years = _years.reverse()
  },
  methods: {
    tap(year) {
      if (this.current === year) return
      this.current = year
      const data = {
        type: 'opt',
        room_id: 1,
        page_id: 1,
        operation_id: 0,
        data: {
          year: this.current
        }
      }
      send(JSON.stringify(data))
    }
  }
}
</script>
<style scoped>
.selected {
  @apply px-4 py-2 mx-3 my-4 rounded-md bg-primary text-white border-gray-50 border-1;
}
.normal {
  @apply px-4 py-2 mx-3 my-4 rounded-md bg-white text-primary border-primary border-1;
}
</style>

<script>
import Timeline from './contents/Timeline.vue'
import DevelopmentTrend from './contents/DevelopmentTrend.vue'
import GlobalData from './contents/GlobalData.vue'
import HonoraryAward from './contents/HonoraryAward.vue'
import MangoTVUser from './contents/MangoTVUser.vue'
import MangoTVMediaConstitute from './contents/MangoTVMediaConstitute.vue'

import Menu from '../Menu.vue'
export default {
  extends: Menu,
  data() {
    return {
      items: [
        {
          title: '大事记',
          subtitle: 'Timeline',
          icon: '',
          tag: 2,
          component: Timeline
        },
        {
          title: '发展态势',
          subtitle: 'Development Trend',
          icon: '',
          tag: 3,
          component: DevelopmentTrend
        },
        {
          title: '全球数据',
          subtitle: 'Global Data',
          icon: '',
          tag: 4,
          component: GlobalData
        },
        {
          title: '荣誉奖项',
          subtitle: 'Honorary Award',
          icon: '',
          tag: 5,
          component: HonoraryAward
        },
        {
          title: '用户画像',
          subtitle: 'MangoTV User',
          icon: '',
          tag: 6,
          component: MangoTVUser
        },
        {
          title: '芒果超媒构成',
          subtitle: 'MangoTV Media Constitute',
          icon: '',
          tag: 7,
          component: MangoTVMediaConstitute
        }
      ]
    }
  }
}
</script>

<style>
.normal {
  @apply bg-rooms-cell-default opacity-30;
}

.highlight {
  @apply bg-gradient-to-r from-rooms-cell-from to-rooms-cell-to;
}
</style>

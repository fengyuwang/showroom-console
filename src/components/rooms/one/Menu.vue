<script>
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
          component: () => import('./contents/Timeline.vue')
        },
        {
          title: '发展态势',
          subtitle: 'Development Trend',
          icon: '',
          tag: 3,
          component: () => import('./contents/DevelopmentTrend.vue')
        },
        {
          title: '全球数据',
          subtitle: 'Global Data',
          icon: '',
          tag: 4,
          component: () => import('./contents/GlobalData.vue')
        },
        {
          title: '荣誉奖项',
          subtitle: 'Honorary Award',
          icon: '',
          tag: 5,
          component: () => import('./contents/HonoraryAward.vue')
        },
        {
          title: '用户画像',
          subtitle: 'MangoTV User',
          icon: '',
          tag: 6,
          component: () => import('./contents/MangoTVUser.vue')
        },
        {
          title: '芒果超媒构成',
          subtitle: 'MangoTV Media Constitute',
          icon: '',
          tag: 7,
          component: () => import('./contents/MangoTVMediaConstitute.vue')
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

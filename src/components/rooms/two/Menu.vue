<script>
import Menu from '../Menu.vue'
export default {
  extends: Menu,
  data() {
    return {
      items: [
        {
          title: '海量片库',
          subtitle: 'Opening',
          icon: '',
          tag: 2,
          component: () => import('./contents/Opening.vue')
        },
        {
          title: '平台运营',
          subtitle: 'Platform operation',
          icon: '',
          tag: 3,
          component: () => import('./contents/PlatformOperation.vue')
        },
        {
          title: '制作团队',
          subtitle: 'Teams introduction',
          icon: '',
          tag: 4,
          component: () => import('./contents/TeamsIntroduction.vue')
        },
        {
          title: '会员业务',
          subtitle: 'VIP Business',
          icon: '',
          tag: 5,
          component: () => import('./contents/VIPBusiness.vue')
        },
        {
          title: '影视集群',
          subtitle: 'Films & TV Collection',
          icon: '',
          tag: 6,
          component: () => import('./contents/FilmsTVCollection.vue')
        },
        {
          title: '大芒计划',
          subtitle: 'Damang Project',
          icon: '',
          tag: 7,
          component: () => import('./contents/DamangProject.vue')
        },
        {
          title: '小芒电商',
          subtitle: 'Mang shop',
          icon: '',
          tag: 8,
          component: () => import('./contents/MangShop.vue')
        },
        {
          title: '青芒计划',
          subtitle: 'Qingmang Plan',
          icon: '',
          tag: 9,
          component: () => import('./contents/QingmangPlan.vue')
        },
        {
          title: '实景娱乐',
          subtitle: 'M-City',
          icon: '',
          tag: 10,
          component: () => import('./contents/MCity.vue')
        },
        {
          title: '艺人',
          subtitle: 'Actors',
          icon: '',
          tag: 11,
          component: () => import('./contents/Actors.vue')
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

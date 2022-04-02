<script>
import Opening from './contents/Opening.vue'
import PlatformOperation from './contents/PlatformOperation.vue'
import TeamsIntroduction from './contents/TeamsIntroduction.vue'
import VIPBusiness from './contents/VIPBusiness.vue'
import FilmsTVCollection from './contents/FilmsTVCollection.vue'
import DamangProject from './contents/DamangProject.vue'
import MangShop from './contents/MangShop.vue'
import QingmangPlan from './contents/QingmangPlan.vue'
import MCity from './contents/MCity.vue'
import Actors from './contents/Actors.vue'
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
          component: Opening
        },
        {
          title: '平台运营',
          subtitle: 'Platform operation',
          icon: '',
          tag: 3,
          component: PlatformOperation
        },
        {
          title: '制作团队',
          subtitle: 'Teams introduction',
          icon: '',
          tag: 4,
          component: TeamsIntroduction
        },
        {
          title: '会员业务',
          subtitle: 'VIP Business',
          icon: '',
          tag: 5,
          component: VIPBusiness
        },
        {
          title: '影视集群',
          subtitle: 'Films & TV Collection',
          icon: '',
          tag: 6,
          component: FilmsTVCollection
        },
        {
          title: '大芒计划',
          subtitle: 'Damang Project',
          icon: '',
          tag: 7,
          component: DamangProject
        },
        {
          title: '小芒电商',
          subtitle: 'Mang shop',
          icon: '',
          tag: 8,
          component: MangShop
        },
        {
          title: '青芒计划',
          subtitle: 'Qingmang Plan',
          icon: '',
          tag: 9,
          component: QingmangPlan
        },
        {
          title: '实景娱乐',
          subtitle: 'M-City',
          icon: '',
          tag: 10,
          component: MCity
        },
        {
          title: '艺人',
          subtitle: 'Actors',
          icon: '',
          tag: 11,
          component: Actors
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

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
import PlayBill from './contents/PlayBill.vue'
import BigScreen from './contents/BigScreen.vue'
import Menu from '../Menu.vue'
export default {
  extends: Menu,
  data() {
    return {
      items: [
        {
          title: '内容片库',
          subtitle: 'Opening',
          icon: '',
          tag: 0,
          component: Opening
        },
        {
          title: '内容团队',
          subtitle: 'Teams introduction',
          icon: '',
          tag: 2,
          component: TeamsIntroduction
        },
        {
          title: '平台运营',
          subtitle: 'Platform operation',
          icon: '',
          tag: 1,
          component: PlatformOperation
        },
        {
          title: '海外传播',
          subtitle: 'Oversea',
          icon: '',
          tag: 7,
          component: Opening
        },
        {
          title: '影视剧',
          subtitle: 'Films & TV Collection',
          icon: '',
          tag: 4,
          component: FilmsTVCollection
        },
        {
          title: '小芒电商',
          subtitle: 'Mang shop',
          icon: '',
          tag: 6,
          component: MangShop
        },
        {
          title: '实景娱乐',
          subtitle: 'M-City',
          icon: '',
          tag: 9,
          component: MCity
        },
        {
          title: '会员业务',
          subtitle: 'VIP Business',
          icon: '',
          tag: 3,
          component: VIPBusiness
        },

        {
          title: '大芒计划',
          subtitle: 'Damang Project',
          icon: '',
          tag: 5,
          component: DamangProject
        },

        {
          title: '智慧大屏',
          subtitle: 'BigScreen',
          icon: '',
          tag: 12,
          component: BigScreen
        },
        {
          title: '青芒计划',
          subtitle: 'Qingmang Plan',
          icon: '',
          tag: 8,
          component: QingmangPlan
        },

        {
          title: '艺人',
          subtitle: 'Actors',
          icon: '',
          tag: 10,
          component: Actors
        },
        {
          title: '海报',
          subtitle: 'PlayBill',
          icon: '',
          tag: 11,
          component: PlayBill
        }
      ]
    }
  },
  mounted() {
    this.tap(0)
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

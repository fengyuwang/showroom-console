<script>
import Room from '../room.vue'
import Video from '@/components/rooms/one/Video.vue'
import Menu from '@/components/rooms/one/Menu.vue'
import { send } from '@/socket/index.js'
import store from '@/store/index.js'
import Events, { emitter } from '@/events/index.js'
export default {
  extends: Room,
  data() {
    return {
      slot: {
        menu: Menu,
        aside: Video
      }
    }
  },
  mounted() {
    emitter.on(Events.Room.DidClickAside, this.play)
  },
  unmounted() {
    emitter.off(Events.Room.DidClickAside, this.play)
  },
  methods: {
    play() {
      const data = {
        type: 'opt',
        room_id: store.state.roomId,
        page_id: 1
      }
      send(JSON.stringify(data))
      emitter.emit(Events.Room.Reset)
    }
  }
}
</script>

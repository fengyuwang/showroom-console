<script>
import Room from '../room.vue'
import Menu from '@/components/rooms/two/Menu.vue'
export default {
  extends: Room,
  data() {
    return {
      slot: {
        menu: Menu
      }
    }
  }
}
</script>

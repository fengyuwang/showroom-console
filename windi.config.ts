import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#F84D00',
        background: '#DFD7C1',
        rooms: {
          cell: {
            from: '#FE446F',
            to: '#F74302',
            default: '#FB7032'
          }
        }
      }
    }
  }
})

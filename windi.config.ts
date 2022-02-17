import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
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
  },
  plugins: [formsPlugin]
})

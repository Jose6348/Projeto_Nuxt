// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Importando ícones MDI
import 'vuetify/styles' // Importando os estilos do Vuetify

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light', // Define o tema padrão
    },
    icons: {
      defaultSet: 'mdi', // Define o conjunto de ícones como Material Design Icons
    },
  })

  nuxtApp.vueApp.use(vuetify)
})

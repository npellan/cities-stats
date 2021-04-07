import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        background: '#ebebe3',
        color: '#4e4e4d',
      },
    },
    dark: true,
  },
});

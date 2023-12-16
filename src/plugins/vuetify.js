import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: window.matchMedia('(prefers-color-scheme: dark)').matches,
        themes: {
            dark: {
                primary: {
                    base: '#252627',
                    lighten1: '#1e1e1e',
                  },
            },
        }
    },

});

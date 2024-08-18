import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Creaer la aplicación

const app = createApp(App);

// Definir un mixin global
app.mixin({
    methods: {
      darFormatoNumero(x) {
        let arrayNumero = x.toString().split('.'),
            entero = arrayNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, "."),
            decimal = arrayNumero[1];

        if (entero == '' ) {
            entero = '0';
        }

        if (decimal != undefined || decimal != null) {
            if (decimal.length == 1) {
                decimal = decimal + '0';
            }
            return entero + ',' + decimal;
        }else{
            decimal = '00';
            return entero + ',' + decimal;
        }
        
      }
    }
  });

app.use(router).mount('#app');
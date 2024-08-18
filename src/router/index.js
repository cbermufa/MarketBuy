import { createRouter, createWebHistory } from 'vue-router';
import AppInicio from '@/views/AppInicio.vue';
import AppProductos from '@/views/AppProductos.vue';
import AppContacto from '@/views/AppContacto.vue';
import AppLicores from '@/views/AppLicores.vue';
import AppCarnes from '@/views/AppCarnes.vue';
import AppChocolates from '@/views/AppChocolates.vue';
import AppSnacks from '@/views/AppSnacks.vue';
import AppCarrito from '@/views/AppCarrito.vue';

const routes = [
  { path: '/', name: 'inicio', component: AppInicio },
  { path: '/productos', name: 'Productos', component: AppProductos },
  { path: '/productos/licores', name: 'Licores', component: AppLicores },
  { path: '/productos/chocolates', name: 'Chocolates', component: AppChocolates },
  { path: '/productos/carnes', name: 'Carnes', component: AppCarnes },
  { path: '/productos/snacks', name: 'Snacks', component: AppSnacks },
  { path: '/contacto', name: 'Contacto', component: AppContacto },
  { path: '/carrito', name: 'Carrito', component: AppCarrito }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

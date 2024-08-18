<template>
  <AppHeader />
  <main class="main-principal">
    <router-view /> <!-- Aquí se renderizan los componentes basados en la ruta -->
  </main>
    
  <AppFooter />
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppFooter, 
    AppHeader
  },
  mounted() {
    // Agregar listener para la tecla Delete cuando el componente se monta
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    // Remover listener cuando el componente se destruye
    window.removeEventListener('keydown', this.handleKeydown);
  },
  methods: {
    handleKeydown(event) {
      // Verificar si se presiona la tecla Delete
      if (event.key === 'Backspace') {
        this.$router.back(); // Ir a la página anterior
      }
    }
  }
}

</script>

<style>
:root{
  --color-background-header-footer: #012840;
  --color-background-hover: #0367A6;
  --color-app-body: #C9E2F2;
  --color-background-main: #FFFFFF;
  --box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 16px;
}
html, body, #app {
  /* height: 100%; */
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--color-app-body);
}

h1 {
    margin: 3rem;
}

header {
  background-color: var(--color-background-header-footer);
  color: white;
  /* padding: 10px 0px; */
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
}

footer {
  background-color: var(--color-background-header-footer);
    color: white;
    text-align: center;
    /* padding: 10px 0; */
}

.main-principal {
    padding: 70px 30px 10px 30px;
    width: 85%;
    margin: 0 auto;
    background-color: var(--color-background-main);
}

main{
  flex: 1;
}

p.precioProducto {
    font-weight: 600;
    /* font-size: 18px; */
}

.btnPrincipal, .inputCantidad{
  padding: 10px 5px;
    box-sizing: border-box;
    height: 35px;
    display: flex;
    align-items: center;
  
}

.btnPrincipal{
  background-color: var(--color-background-hover);
  color: #fff;
  padding: 10px 5px;
  border: none;
  /* border-radius: 5px; */
}

.btnPrincipal:hover{
  background-color: var(--color-background-header-footer);
  color: #fff;
  cursor: pointer;
}

.inputCantidad {
    text-align: center;
    width: 50px;
}

.cantidadCarrito {
    display: flex;
    justify-content: center;
}

</style>
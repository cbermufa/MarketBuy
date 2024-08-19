<template>
  <header>
    <nav>
      <div class="logo">MarketBuy</div>
      <ul @keydown="navegarConTeclado" :class="{ 'nav-active': isActive }" class="menu-centro">
        <li><router-link to="/" tabindex="0">Inicio</router-link></li>
        <li><router-link to="/productos" tabindex="0" @click="toggleMenu">Productos</router-link></li>
        <li><router-link to="/nosotros" tabindex="0" @click="toggleMenu">Nosotros</router-link></li>
        <li><router-link to="/contacto" tabindex="0" @click="toggleMenu">Contacto</router-link></li>
        <li><router-link to="/carrito" tabindex="0" @click="toggleMenu">Carrito</router-link></li>
      </ul>
      <div class="burger" @click="toggleMenu">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
    navegarConTeclado(event) {
      const links = event.currentTarget.querySelectorAll('a');
      const currentIndex = Array.from(links).indexOf(document.activeElement);

      if (event.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % links.length;
        links[nextIndex].focus();
      } else if (event.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + links.length) % links.length;
        links[prevIndex].focus();
      }
    }
  }
};
</script>

  
<style scoped>
nav {
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  background-color: var(--color-background-header-footer);
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  width: 100%;
  /* justify-content: center; */
}

nav ul li a {
  color: white;
  text-decoration: none;
  outline: none;
  padding: 5px;
  border-radius: 5px;
}

nav ul li a:focus {
  background-color: var(--color-background-hover);
}

.burger {
  display: none;
  cursor: pointer;
}

.burger div {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px;
  transition: all 0.3s ease;
}

/* Media Queries para dispositivos móviles */
@media (max-width: 768px) {
  nav {
    align-items: center;
    margin: 0 auto;
    line-height: 50px;
}

  nav ul {
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: var(--color-background-header-footer);
  }

  nav ul.nav-active {
    display: flex;
  }

  nav ul li {
    margin: 0;
    padding: 15px 0;
    text-align: center;
  }

  .burger {
    display: block;
  }
}

</style>
  
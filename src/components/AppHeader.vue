<template>
    <header>
      <nav>
        <ul @keydown="navegarConTeclado">
          <li><router-link to="/" tabindex="0">Inicio</router-link></li>
          <li><router-link to="/productos" tabindex="0">Productos</router-link></li>
          <li><router-link to="/contacto" tabindex="0">Contacto</router-link></li>
          <li><router-link to="/carrito" tabindex="0">Carrito</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    methods: {
      navegarConTeclado(event) {
        const links = event.currentTarget.querySelectorAll('a'); // Los enlaces dentro de router-link
        const currentIndex = Array.from(links).indexOf(document.activeElement); // Encuentra el enlace actualmente enfocado

        if (event.key === 'ArrowRight') {
          const nextIndex = (currentIndex + 1) % links.length; // Avanzar al siguiente enlace
          links[nextIndex].focus(); // Enfocar el siguiente
        } else if (event.key === 'ArrowLeft') {
          const prevIndex = (currentIndex - 1 + links.length) % links.length; // Retroceder al anterior enlace
          links[prevIndex].focus(); // Enfocar el anterior
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
    padding: 0;
}
  
  nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  nav ul li a {
    color: white;
    text-decoration: none;
    outline: none;
    padding: 5px;
    border-radius: 5px; 
  }

  nav ul li a:focus {
  /* outline: 2px solid #ffffff;  */
  background-color: var(--color-background-hover); /* Cambiar el color de fondo cuando está enfocado */
}
  </style>
  
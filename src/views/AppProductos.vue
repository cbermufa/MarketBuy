<template>
    <div class="productos">
      <h1>Nuestras Categorías de Productos</h1>
      <div class="categorias">
        <div class="categoria" @keydown="navegarConTeclado"  v-for="categoria in categorias" :key="categoria">
          <h2>{{ categoria }}</h2>
          <div class="productos-lista">
            <div  class="producto" v-for="producto in obtenerProductosPorCategoria(categoria)" :key="producto.id">
              <img :src="producto.imagen" :alt="producto.nombre" />
              <p>{{ producto.nombre }}</p>
            </div>
          </div>
          <router-link :to="'/productos/' + categoria.toLowerCase()" class="ver-mas" tabindex="0">Ver más</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productos: [],
        categorias: ["Licores", "Chocolates", "Carnes", "Snacks"]
      };
    },
    created() {
      fetch('/data/productos.json')
        .then(response => response.json())
        .then(data => {
          this.productos = data;
        });
    },
    methods: {
      obtenerProductosPorCategoria(categoria) {
        return this.productos.filter(producto => producto.categoria === categoria).slice(0, 4);
      },
      navegarConTeclado(event) {
        const links = event.currentTarget.querySelectorAll('a'); // Los enlaces dentro de router-link
        const currentIndex = Array.from(links).indexOf(document.activeElement); // Encuentra el enlace actualmente enfocado
        console.log(event.key, links, currentIndex);
        if (event.key === 'ArrowRight') {
          const nextIndex = (currentIndex + 1) % links.length; // Avanzar al siguiente enlace
          links[nextIndex].focus(); // Enfocar el siguiente
          console.log(nextIndex);
        } else if (event.key === 'ArrowLeft') {
          const prevIndex = (currentIndex - 1 + links.length) % links.length; // Retroceder al anterior enlace
          links[prevIndex].focus(); // Enfocar el anterior
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .productos {
    text-align: center;
    margin: 0 auto;
  }
  
  .categorias {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
    padding: 0 20px;
  }
  
  .categoria {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: left;
    box-shadow: var(--box-shadow);
  }
  
  .categoria h2 {
    border-bottom: 1px solid var(--color-background-hover);
    padding: 5px;
}
  .productos-lista {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0px;
    min-height: 350px;
  }
  
  .producto img {
    width: 100px;
    height: auto;
  }
  
  .producto {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
  
  /* .ver-mas {
    display: inline-block;
    margin-top: 10px;
    color: #007bff;
    text-decoration: none;
  } */

  .ver-mas {
    
    background: #0367A6;
    color: #fff !important;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none !important;
    outline: none;
    margin-top: 2rem !important;
    display: flex !important;
    justify-content: center;
    align-items: center;
    float: right;
}
  
.ver-mas:focus {
  background-color:var(--color-background-header-footer) /* Cambiar el color de fondo cuando está enfocado */
}
  .ver-mas:hover {
    text-decoration: underline;
  }
  </style>
  
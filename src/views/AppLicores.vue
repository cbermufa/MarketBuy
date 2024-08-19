<template>
  <div class="categoria">
    <h1>Licores Importados</h1>
    <div class="productos-lista">
      <div class="producto" v-for="producto in productosFiltrados" :key="producto.id">
        <img :src="producto.imagen" :alt="producto.nombre" />
        <p class="nombreProducto">{{ producto.nombre }}</p>
        <p class="descripcionProducto">{{ producto.descripcion }}</p>
        <p class="precioProducto">₡{{ darFormatoNumero(producto.precio)}}</p>

        <div class="cantidadCarrito">
          <input type="number" v-model.number="producto.cantidadSeleccionada" :max="producto.cantidad" min="1" class="inputCantidad"/>
          <button @click="agregarAlCarrito(producto)" tabindex="0" class="btnPrincipal">Agregar al carrito</button> 
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productos: [],
      productosFiltrados: []
    };
  },
  created() {
    fetch('/data/productos.json')
      .then(response => response.json())
      .then(data => {
         this.productos = data.map(producto => ({ ...producto, cantidadSeleccionada: 1 }));
        this.productosFiltrados = this.productos.filter(producto => producto.categoria === "Licores");
      });
  },
  methods: {
    agregarAlCarrito(producto) {
      const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      const productoEnCarrito = carrito.find(item => item.id === producto.id);

      if (productoEnCarrito) {
        productoEnCarrito.cantidadSeleccionada += producto.cantidadSeleccionada;
      } else {
        carrito.push({
          ...producto,
          cantidadSeleccionada: producto.cantidadSeleccionada
        });
      }

      localStorage.setItem('carrito', JSON.stringify(carrito));
      alert(`Has agregado ${producto.cantidadSeleccionada} ${producto.nombre} al carrito.`);
    }
  }
};
</script>

<style scoped>
.categoria {
  text-align: center;
}

.productos-lista {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  gap: 20px;
}

.producto {
    margin: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    padding: 20px;
}

.producto img {
  width: 150px;
  height: 150px;
  object-fit: contain;
}

/* Media Queries para dispositivos móviles */
@media (max-width: 1068px) {
  .productos-lista {
    grid-template-columns: repeat(4, 1fr); /* 2 columnas en pantallas medianas */
  }
}

@media (max-width: 968px) {
  .productos-lista {
    grid-template-columns: repeat(3, 1fr); /* 2 columnas en pantallas medianas */
  }
}

@media (max-width: 768px) {
  .productos-lista {
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en pantallas medianas */
  }
}

@media (max-width: 480px) {
  .productos-lista {
    grid-template-columns: 1fr; /* 1 columna en pantallas pequeñas */
  }

  .producto img {
    width: 100px; /* Reducir el tamaño de la imagen */
  }

  .producto {
    padding: 10px; /* Reducir el padding */
  }

  .cantidadCarrito {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inputCantidad {
    width: 100%; /* Ajustar el ancho del input */
    margin-bottom: 10px; /* Añadir margen inferior */
  }

  .btnPrincipal {
    width: 100%; /* Botón ocupa el 100% del ancho */
  }
}

</style>

<template>
    <h1>Carrito de Compras</h1>
    <div class="carrito">
        <div class="tituloCarrito">
            <div class="colUno"></div>
            <div class="colDos">Nombre</div>
            <div class="colTres">Cantidad</div>
            <div class="colCuatro">Precio</div>
            <div class="colCinco">Total</div>
            <div class="colSeis"></div>
        </div>
        <div v-if="carrito.length > 0">
            <div class="producto" v-for="producto in carrito" :key="producto.id">
                <div class="colUno"><img :src="producto.imagen" :alt="producto.nombre" /></div>
                <div class="colDos"><p>{{ producto.nombre }}</p></div>
                <div class="colTres"><p>{{ producto.cantidadSeleccionada }}</p></div>
                <div class="colCuatro"><p>₡{{ darFormatoNumero(producto.precio) }}</p></div>
                <div class="colCinco"><p>₡{{ darFormatoNumero(producto.precio * producto.cantidadSeleccionada) }}</p></div>
                <button @click="eliminarProducto(producto.id)" class="btnEliminar">Eliminar</button>
            </div>
            <div class="totalCarrito">
                <h3>Total del Carrito: ₡{{ darFormatoNumero(totalCarrito) }}</h3>
            </div>
            <button @click="comprar" class="btnPrincipal btnComprar">Comprar</button>
        </div>
        <div v-else>
            <p>El carrito está vacío.</p>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        carrito: []
      };
    },
    created() {
      // Cargar los productos del localStorage
      const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      this.carrito = carrito;
    },
    computed:{
        totalCarrito(){
            return this.carrito.reduce((total, producto) =>{
                return total + (producto.precio * producto.cantidadSeleccionada);
            }, 0);
        }
    },
    methods: {
        comprar() {
            if (confirm("¿Está seguro de que desea comprar estos productos?")) {
            this.actualizarStock();
            localStorage.removeItem('carrito');
            alert('Compra realizada con éxito.');
            this.$router.push('/');
            }
        },
        eliminarProducto(id) {
            this.carrito = this.carrito.filter(producto => producto.id !== id);
            localStorage.setItem('carrito', JSON.stringify(this.carrito));
        },
        actualizarStock() {
        // Actualizar el JSON con la cantidad restante
            fetch('/data/productos.json')
            .then(response => response.json())
            .then(data => {
                data.map(producto => {
                    const productoEnCarrito = this.carrito.find(item => item.id === producto.id);
                    if (productoEnCarrito) {
                        producto.cantidad -= productoEnCarrito.cantidadSeleccionada;
                    }
                    return producto;
                });
            });
        },
        
    }
  };
  </script>

<style scoped>
    .producto, .tituloCarrito {
        display: flex;
        align-items: center;
    }
    .producto .colUno img {
        width: 100px;
        height: auto;
    }

    .producto {
        border-bottom: 1px dotted #ccc;
    }

    .carrito {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding: 15px 10px;
        box-shadow: var(--box-shadow);
        border-radius: 5px;
    }

    .producto, .tituloCarrito {
        display: flex;
        align-items: center;
        flex-wrap: wrap; /* Permite que los elementos se ajusten en varias líneas */
    }

    .producto .colUno img {
        width: 100px;
        height: auto;
    }

    .producto {
        border-bottom: 1px dotted #ccc;
        padding: 10px 0;
    }

    .colUno, .colTres, .colCuatro, .colCinco {
        width: 15%;
    }

    .colDos {
        width: 30%;
    }

    .colSeis {
        width: 10%;
    }

    .tituloCarrito {
        padding: 10px;
        background: var(--color-background-hover);
        color: #fff;
        border-radius: 5px 5px 0 0;
    }

    /* Media Queries para dispositivos móviles */
    @media (max-width: 768px) {
        .colUno, .colTres, .colCuatro, .colCinco, .colDos, .colSeis {
            width: 100%; /* Cada columna ocupará el 100% del ancho */
            text-align: center; /* Centrar el texto */
        }

        .producto .colUno img {
            width: 50px; /* Reducir el tamaño de la imagen */
        }

        .btnEliminar, .btnComprar {
            width: 100%; /* Botones ocupan el 100% del ancho */
            margin-top: 10px; /* Añadir margen superior */
        }
    }

     
</style>
  
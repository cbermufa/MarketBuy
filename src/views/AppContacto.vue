<template>
  <div class="contacto">
    <h1>Contáctenos</h1>
    <div class="informacion-contacto">
      <p><strong>Dirección:</strong> Avenida Central, San José, Costa Rica</p>
      <p><strong>Teléfono:</strong> +506 1234 5678</p>
      <p><strong>Email:</strong> contacto@marketbuy.cr</p>
    </div>
    <form @submit.prevent="enviarFormulario" class="formularioContacto">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="formulario.nombre" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formulario.email" required />
      </div>
      <div class="form-group">
        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" v-model="formulario.mensaje" required></textarea>
      </div>
      <div class="form-group btn-container">
        <button type="submit" class="btnPrincipal">Enviar</button>
      </div>
    </form>
    <div class="mapa">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0000000000005!2d-84.083333!3d9.933333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e31a00000001%3A0x0000000000000000!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1sen!2s!4v0000000000000"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      formulario: {
        nombre: '',
        email: '',
        mensaje: ''
      }
    };
  },
  methods: {
    enviarFormulario() {
      alert(`Gracias por tu mensaje, ${this.formulario.nombre}. Nos pondremos en contacto contigo pronto.`);
      // Aquí puedes añadir la lógica para enviar el formulario a tu servidor
      this.formulario.nombre = '';
      this.formulario.email = '';
      this.formulario.mensaje = '';
    }
  }
};
</script>

<style scoped>

.formularioContacto {
  width: 100%; /* Ajusta el ancho al 100% del contenedor padre */
  max-width: 600px; /* Establece un ancho máximo para evitar que se extienda demasiado */
  margin: 0 auto;
  box-shadow: var(--box-shadow);
  padding: 20px;
  border-radius: 5px;
}

.contacto {
  text-align: center;
  padding: 20px;
}

.informacion-contacto {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box; /* Asegura que el padding y el borde se incluyan en el ancho total */
}

.btn-container {
  text-align: right; /* Alinea el contenido a la derecha */
}

.btnPrincipal {
  background-color: var(--color-background-hover);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
}

.btnPrincipal:hover {
  background-color:var(--color-background-header-footer);
  cursor: pointer;
}

.mapa {
  margin-top: 20px;
}

/* Media Queries para dispositivos móviles */
@media (max-width: 768px) {
  .formularioContacto {
    width: 90%; /* Ajusta el ancho al 90% del contenedor padre */
    padding: 15px; /* Ajusta el padding */
  }

  .informacion-contacto p {
    font-size: 14px; /* Ajusta el tamaño de la fuente */
  }

  .btnPrincipal {
    width: 100%; /* Botón ocupa el 100% del ancho */
    padding: 10px; /* Ajusta el padding */
  }

  .mapa iframe {
    width: 100%; /* Ajusta el ancho del mapa */
    height: 300px; /* Ajusta la altura del mapa */
  }
}

@media (max-width: 480px) {
  .formularioContacto {
    width: 100%; /* Ajusta el ancho al 100% del contenedor padre */
    padding: 10px; /* Ajusta el padding */
  }

  .informacion-contacto p {
    font-size: 12px; /* Ajusta el tamaño de la fuente */
  }

  .btnPrincipal {
    width: 100%; /* Botón ocupa el 100% del ancho */
    padding: 8px; /* Ajusta el padding */
  }

  .mapa iframe {
    width: 100%; /* Ajusta el ancho del mapa */
    height: 250px; /* Ajusta la altura del mapa */
  }
}



</style>

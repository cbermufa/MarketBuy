<template>
  <div class="quienes-somos">
    <h1>¿Quiénes Somos?</h1>
    <div class="contenido">
      <p>
        Bienvenidos a <strong>MarketBuy</strong>, su supermercado exclusivo en Costa Rica. Nos especializamos en ofrecer productos importados de la más alta calidad, seleccionados cuidadosamente para satisfacer los gustos más exigentes.
      </p>
      <p>
        Ubicados en el corazón de San José, nos enorgullece ser el destino preferido para aquellos que buscan productos únicos y exclusivos. Desde cervezas artesanales y chocolates gourmet hasta cortes de carne exclusivos y snacks premium, en MarketBuy encontrará una selección incomparable.
      </p>
      <p>
        Nuestra misión es brindar una experiencia de compra excepcional, con un enfoque en la calidad, la exclusividad y el servicio al cliente. Creemos en la importancia de ofrecer productos que no solo cumplan con los estándares más altos, sino que también enriquezcan la vida de nuestros clientes.
      </p>
      <p>
        En MarketBuy, trabajamos con proveedores de todo el mundo para traer lo mejor de cada rincón del planeta a su mesa. Ya sea que esté buscando ingredientes para una cena especial o productos de uso diario, puede confiar en que encontrará lo mejor en nuestro supermercado.
      </p>
      <p>
        Gracias por elegir MarketBuy. Esperamos poder servirle y ser parte de su día a día con nuestros productos exclusivos.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuienesSomos'
};
</script>

<style scoped>
.quienes-somos {
  text-align: center;
  padding: 20px;
}

.contenido {
    margin-bottom: 20px;
    margin: 0 auto;
    box-shadow: var(--box-shadow);
    padding: 20px 40px;
    border-radius: 5px;
}

.contenido p {
  margin-bottom: 15px;
  line-height: 1.6;
}

.imagen img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
}

/* Media Queries para dispositivos móviles */
@media (max-width: 768px) {
  .contenido p {
    font-size: 14px; /* Ajusta el tamaño de la fuente */
  }
}

@media (max-width: 480px) {
  .contenido p {
    font-size: 12px; /* Ajusta el tamaño de la fuente */
  }
}
</style>

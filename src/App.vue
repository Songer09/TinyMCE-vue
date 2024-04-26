<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Example 1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Example 2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Example 3</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Editor" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>

    <div class="container">
      <h1>Bienvenido al nuevo <span>Editor</span> de texto.</h1>
      <div class="d-flex">
        <button class="btn btn-primary principal-button ms-2" @click="handleModal">Probar Ahora</button>
        <button class="btn btn-secondary ms-2" @click="handleModalVariable"> Variables </button>
        <button class="btn btn-secondary ms-2" @click="handleModalImput"> Campos de Prueba </button>
      </div>
      <AiAssistantModal v-if="showModal" :show-modal="showModal" />
      <VariableList v-if="showModalVariable" :show-modal="showModalVariable"></VariableList>
      <ImputFields v-if="showModalImput" :show-modal="showModalImput"></ImputFields>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AiAssistantModal from './AiAssistantModal.vue';
import VariableList from './components/VariableList.vue';
import ImputFields from './components/ImputFields.vue';

const showModal = ref(false);
const showModalVariable = ref(false);
const showModalImput = ref(false);

const handleModal = () => {
  showModal.value = !showModal.value;
}
const handleModalVariable = () => {
  showModalVariable.value = !showModalVariable.value;
}
const handleModalImput = () => {
  showModalImput.value = !showModalImput.value;
}

</script>

<style scoped>
/* Custom styles */
body {
  display: flex;
  height: 100vh;
  margin: 0;
}

.container {
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 2rem;
  /* Tamaño de fuente del título */
  line-height: 1.2;
  /* Altura de línea para controlar el espaciado vertical */
  white-space: nowrap;
  /* Evitar el salto de línea */
  overflow: hidden;
  /* Ocultar cualquier texto que exceda el contenedor */
  text-overflow: ellipsis;
  /* Agregar puntos suspensivos si el texto es demasiado largo */
}
</style>
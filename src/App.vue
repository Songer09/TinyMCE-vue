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
      <VariableList v-if="showModalVariable" :show-modal="showModalVariable"></VariableList>
      <ImputFields v-if="showModalImput" :show-modal="showModalImput"></ImputFields>
    </div>
  </div>
  <main id="sample">
    <Editor api-key="2khk8q55k69tek4966h6u7yzkrojgqq3f1lsvv8z0536csk0" :init="{
      toolbar_mode: 'sliding', //sliding: Horizontal, floating: Vertical.
      plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
      toolbar: 'undo redo | blocks fontfamily fontsize | styles | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | alignleft aligncenter alignjustify alignright| checklist numlist bullist indent outdent | emoticons charmap | removeformat',
      tinycomments_mode: 'embedded',
      tinycomments_author: 'Author name',
      width: 800,
      height: 600,
      mergetags_list: [
        { value: 'First.Name', title: 'First Name' },
        { value: 'Email', title: 'Email' },
      ],
      ai_request: (request, respondWith) => {
        const assistantText = 'Ingrese su comando aquí:';
        respondWith.string(() => Promise.reject(assistantText));
      }
    }">
    </Editor>
    <div class="container">
      <div class="d-flex">
        <button class="btn btn-secondary ms-2" @click="handleModal('variable')"> Variables </button>
        <button class="btn btn-secondary ms-2" @click="handleModal('imput')"> Campos de Prueba </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import Editor from '@tinymce/tinymce-vue';
import VariableList from './components/VariableList.vue';
import ImputFields from './components/ImputFields.vue';

const showModalVariable = ref(false);
const showModalImput = ref(false);

const handleModal = (type) => {
  if (type === 'variable') {
    showModalVariable.value = !showModalVariable.value;
  } else if (type === 'imput') {
    showModalImput.value = !showModalImput.value;
  }
}
</script>

<style scoped>
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

@media (min-width: 1024px) {
  #sample {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 100%;
  }
}
</style>

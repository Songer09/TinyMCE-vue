<template>
    <div class="ai-assistant-modal">
        <input v-model="command" type="text" placeholder="Escribe un comando...">
        <textarea v-model="result" rows="10" placeholder="Resultados generados por la IA"></textarea>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const command = ref('');
const result = ref('');
</script>

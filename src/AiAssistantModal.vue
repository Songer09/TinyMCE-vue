<template>
    <div class="modal" tabindex="-1" role="dialog" v-if="showModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Título del modal</h5>
                    <button type="button" class="close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
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
                    }">>
                    </Editor>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Editor from '@tinymce/tinymce-vue';

const props = defineProps({
    showModal: {
        type: Boolean,
        required: true,
    },
});

const emit = defineEmits(['close']);

const editorConfig = {
    // tu configuración del editor aquí
};
</script>

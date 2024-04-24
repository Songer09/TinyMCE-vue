import { ref } from 'vue';

const showAiAssistantModal = ref(false);

const AiAssistantPlugin = (editor) => {
  editor.ui.registry.addButton('ai_assistant', {
    text: 'AI Assistant',
    onAction: () => {
      showAiAssistantModal.value = true;
    }
  });
};

export { AiAssistantPlugin, showAiAssistantModal };

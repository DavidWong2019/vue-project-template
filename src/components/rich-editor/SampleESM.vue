<template>
  <div>
    <editor
      api-key="API_KEY"
      :init="initOptions"
      :initial-value="content"
      v-model="richEditorData"
      tinymce-script-src="/static/js/tinymce5/tinymce.min.js"
    />
  </div>
</template>

<script>
/**
 * 富文本(base on tinymce_V5)
 * ESM版本实现
 * 参考文档：https://www.tiny.cloud/docs/integrations/vue/
 */
import EditorMCE from '@tinymce/tinymce-vue';
import { configs } from './editorConfigs';

export default {
  name: 'SampleESM',
  components: {
    editor: EditorMCE,
  },
  props: {
    content: String,
  },
  watch: {
    richEditorData(newVal) {
      console.log(newVal);
    },
  },
  data() {
    return {
      richEditorData: '',
      initOptions: configs,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>

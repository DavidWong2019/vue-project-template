<template>
  <div>
    <div id="vanilla"></div>
    <button type="primary" @click="handleClick">获取</button>
    <button type="primary" @click="handleSet">设置</button>
  </div>
</template>

<script>
/**
 * 富文本(base on tinymce_V5)
 * 原生js版本实现
 * 参考文档：http://tinymce.ax-z.cn/
 * 查阅demo4了解更多使用方法
 */
import { configs } from './editorConfigs';

export default {
  name: 'SampleVanilla',
  mounted() {
    window.tinyMCE.init({
      selector: '#vanilla',
      ...configs,
    });
  },
  methods: {
    handleClick() {
      this.getContent('vanilla');
    },
    handleSet() {
      this.setContent('vanilla');
    },
    setContent(tinyID) {
      window.tinyMCE.editors[tinyID].setContent('这是设置的内容');
    },
    getContent(tinyID) {
      const content = window.tinyMCE.editors[tinyID].getContent();
      console.log(content);
      alert(content);
    },
  },
  beforeDestroy() {
    window.tinyMCE.remove();
  },
};
</script>

<style lang="scss" scoped></style>

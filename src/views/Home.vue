<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <RichEditorV1 />
    <hr>
    <RichEditorV3 />
  </div>
</template>

<script>
// @ is an alias to /src
import RichEditorV1 from '@/components/RichEditorV1.vue';
import RichEditorV3 from '@/components/RichEditorV3.vue';

export default {
  name: 'Home',
  components: {
    RichEditorV1,
    RichEditorV3,
  },
};
</script>

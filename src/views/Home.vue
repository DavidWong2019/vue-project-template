<template>
  <div class="home">
    <SampleVanilla />
  </div>
</template>

<script>
// @ is an alias to /src
import SampleVanilla from '@/components/rich-editor/SampleVanilla.vue';

export default {
  name: 'Home',
  components: {
    SampleVanilla,
  },
};
</script>

<template>
  <div class="about">
    <SampleESM />
  </div>
</template>

<script>
// @ is an alias to /src
import SampleESM from '@/components/rich-editor/SampleESM.vue';

export default {
  name: 'Home',
  components: {
    SampleESM,
  },
};
</script>

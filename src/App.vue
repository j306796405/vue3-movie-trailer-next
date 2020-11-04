<template>
  <Header />
  <div class="layout-content">
    <RouterView />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Header from '@/components/Header/index.vue';

  export default defineComponent({
    name: 'App',
    components: {
      Header,
    },
  });
</script>

<style scoped></style>

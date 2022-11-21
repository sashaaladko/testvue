<template>
  <MainComponent />
</template>

<script lang="ts" >
import { defineComponent } from 'vue';
import MainComponent from './components/MainComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainComponent
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

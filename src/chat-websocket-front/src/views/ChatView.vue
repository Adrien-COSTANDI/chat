<script setup lang="ts">

</script>

<template>
  <h1 class="center-text">
  {{ $route.params.userName }}
  </h1>
</template>

<style scoped>
.center-text {
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

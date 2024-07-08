<script setup>
import { RouterView } from 'vue-router'
import diatas from './components/navbar/Header.vue'
import konten from './components/navbar/Konten.vue'
</script>

<template>
  <header>
    <diatas />
  </header>
  <div class="container">
    <div class="konten">
      <konten />
    </div>
    <div class="view">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Lora', serif;
}
.container {
  display: flex;
}

.konten {
  width: 250px;
  position: relative;
  border-right: 1px solid #000;
  height: 1000vh;
}
.view {
  width: 100%;
}
</style>

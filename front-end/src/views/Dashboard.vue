<script setup>
import kolomSiswa from "../components/dashboard/kolomSiswa.vue";
</script>

<template>
  <div class="container">
    <div class="search">
      <input type="text" placeholder="Cari Nama Siswa" />
    </div>
  </div>
  <div>
    <kolomSiswa />
  </div>
</template>

<style scoped>

.container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #000;
}

.search {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  text-size-adjust: 10px;
}
</style>
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="navbar">
        <div class="logo">
            <img src="../../../public/favicon.ico" alt="logo">
        </div>
        <div>
            <h1>ABSENSI SISWA SEKOLAH</h1>
        </div>
        <div class="search">
            <input type="text" placeholder="Search">
        </div>
    </div>
</template>

<style scoped>
.navbar {
    display: flex;
    align-items:center;
    justify-content:space-around;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #000;
}
</style>
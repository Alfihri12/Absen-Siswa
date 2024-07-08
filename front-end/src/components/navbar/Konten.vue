<script setup>
import { RouterLink } from 'vue-router';

</script>


<template>
    <div class="menu">
        <div class="menu-item">
            <RouterLink class="menu-item-link" to="/">Dashboard</RouterLink>
        </div>
        <div class="menu-item">
            <RouterLink class="menu-item-link" to="/about">About</RouterLink>
        </div>
        <div class="menu-item">
            <RouterLink class="menu-item-link" to="/contact">Contact</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.menu {
    display: inline-block;
    padding: 0 30px;
}

.menu-item {
    margin-right: 30px;
    width: 100%;
}

.menu-item-link {
    text-decoration: none;
    color: rgb(190, 176, 176);
    font-size: 30px;
}
</style>
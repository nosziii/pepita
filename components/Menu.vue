<script setup lang="ts">
import Menu from '../utility/menuHelper'
import { ref } from 'vue'

const menuItems = ref(Menu)

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#pepiToggleId" aria-controls="pepiToggleId" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/">PepitaTeszt</a>

    <div class="collapse navbar-collapse" id="pepiToggleId">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item" v-for="menuItem in menuItems" :key="menuItem.id">
          <NuxtLink :to="menuItem.path" class="nav-link" :target="menuItem.target">{{ menuItem.name }}</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>

</style>

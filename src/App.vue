<script setup>
import TheNavigation from './components/TheNavigation.vue'
import TheParticles from './components/TheParticles.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <TheNavigation />
  <TheParticles />
  <RouterView />
</template>

<script setup>
import { TresCanvas } from '@tresjs/core';
import InteractiveStars from './InteractiveStars.vue';
</script>

<template>
  <div class="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-white">
    <TresCanvas clear-color="#ffffff" alpha>
      <TresPerspectiveCamera :position="[0, 0, 5]" :fov="45" />
      <InteractiveStars />
    </TresCanvas>
  </div>
</template>

<style scoped>
</style>

<style scoped>
</style>

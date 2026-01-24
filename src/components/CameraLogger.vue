<script setup>
import { useTres } from '@tresjs/core';
import { shallowRef, onUnmounted } from 'vue';

const { camera } = useTres();
const lastPos = shallowRef(null);
let animationFrameId;

const logCamera = () => {
  if (camera.value) {
    const current = camera.value.position;
    const posStr = `[${current.x.toFixed(2)}, ${current.y.toFixed(2)}, ${current.z.toFixed(2)}]`;
    
    if (lastPos.value !== posStr) {
      console.log(`📸 Camera Position: ${posStr}`);
      lastPos.value = posStr;
    }
  }
  animationFrameId = requestAnimationFrame(logCamera);
};

// Start logging
requestAnimationFrame(logCamera);

onUnmounted(() => {
    cancelAnimationFrame(animationFrameId);
});
</script>

<template>
  <!-- Renderless component -->
</template>

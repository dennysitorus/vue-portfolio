<script setup>
import { onMounted, ref } from 'vue';

const particles = ref([]);

const colors = ['bg-accent-red', 'bg-accent-blue', 'bg-accent-green', 'bg-accent-yellow'];

const generateParticles = () => {
  const count = 30; // Increased count slightly for global effect
  const newParticles = [];
  for (let i = 0; i < count; i++) {
    newParticles.push({
      id: i,
      x: Math.random() * 100, // vw
      y: Math.random() * 100, // vh
      size: Math.random() * 3 + 2, // px
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 15 + 10, // Slower animation duration
      delay: Math.random() * 5,
    });
  }
  particles.value = newParticles;
};

onMounted(() => {
  generateParticles();
});
</script>

<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div 
          v-for="p in particles" 
          :key="p.id"
          class="absolute rounded-full opacity-60 animate-float"
          :class="p.color"
          :style="{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `-${p.delay}s`
          }"
      ></div>
  </div>
</template>

<style scoped>
@keyframes float {
  0% { transform: translateY(0px) translateX(0px); opacity: 0; }
  10% { opacity: 0.8; }
  50% { transform: translateY(-100px) translateX(50px); opacity: 0.4; }
  90% { opacity: 0.8; }
  100% { transform: translateY(-200px) translateX(20px); opacity: 0; }
}

.animate-float {
  animation-name: float;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>

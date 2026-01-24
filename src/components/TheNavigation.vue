<script setup>
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-white/70 border-b border-gray-100/50">
    <div class="flex items-center gap-2">
      <span class="text-xl font-semibold tracking-tight">Denny Sitorus | Awsitsoft</span>
    </div>

    <!-- Center Links (Desktop) -->
    <div class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
      <router-link :to="{ path: '/', hash: '#experience' }" class="hover:text-primary transition-colors">Experience</router-link>
      <router-link :to="{ path: '/', hash: '#projects' }" class="hover:text-primary transition-colors">Projects</router-link>
      <router-link :to="{ path: '/', hash: '#about' }" class="hover:text-primary transition-colors">About</router-link>
    </div>

    <!-- Mobile Menu Toggle (Placeholder, could be expanded to full functionality) -->
    <div class="md:hidden">
        <!-- Kept simple for now, usually requires state management for open/close drawer -->
    </div>

    <!-- Right Action -->
    <div>
      <router-link :to="{ path: '/', hash: '#contact' }" class="px-4 py-2 md:px-6 md:py-3 rounded-full bg-primary text-white text-xs md:text-sm font-medium hover:scale-105 active:scale-95 transition-transform duration-200 shadow-lg glow-sm">
        Contact Me
      </router-link>
    </div>
  </nav>
</template>

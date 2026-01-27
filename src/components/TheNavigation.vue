<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  // Prevent scrolling when menu is open
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-white/70 border-b border-gray-100/50">
    <!-- Left Side: Logo (Desktop) or Hamburger (Mobile) -->
    <div class="flex items-center gap-2">
      <!-- Desktop Logo -->
      <span class="hidden md:block text-xl font-semibold tracking-tight">Denny Sitorus | Awsitsoft</span>
      
      <!-- Mobile Hamburger -->
      <button @click="toggleMenu" class="md:hidden p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>

    <!-- Center Links (Desktop) -->
    <div class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
      <router-link :to="{ path: '/', hash: '#projects' }" class="hover:text-primary transition-colors">Projects</router-link>
      <router-link :to="{ path: '/', hash: '#experience' }" class="hover:text-primary transition-colors">Experience</router-link>
      <router-link :to="{ path: '/', hash: '#tech-stack' }" class="hover:text-primary transition-colors">Tech</router-link>
    </div>

    <!-- Right Action -->
    <div>
      <router-link :to="{ path: '/', hash: '#contact' }" class="shrink-0 whitespace-nowrap px-4 py-2 md:px-6 md:py-3 rounded-full bg-primary text-white text-xs md:text-sm font-medium hover:scale-105 active:scale-95 transition-transform duration-200 shadow-lg glow-sm">
        Contact Me
      </router-link>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMenuOpen" class="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden flex flex-col p-4 gap-2">
        <router-link @click="closeMenu" :to="{ path: '/', hash: '#projects' }" class="p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium">Projects</router-link>
        <router-link @click="closeMenu" :to="{ path: '/', hash: '#experience' }" class="p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium">Experience</router-link>
        <router-link @click="closeMenu" :to="{ path: '/', hash: '#tech-stack' }" class="p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium">Tech</router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  sub: {
    type: String,
    default: ''
  },
  theme: {
    type: String,
    default: 'dark'
  }
});
</script>

<template>
  <div class="flex flex-col items-center gap-5">
    <div v-if="sub" :class="[
      'py-2 px-4 rounded-full w-fit text-sm md:text-base text-nowrap border',
      theme === 'light' ? 'bg-gray-100 border-gray-200' : 'bg-[#282732] border-[#1c1c21]'
    ]">
      <p :class="theme === 'light' ? 'text-primary' : 'text-[#d9ecff]'">{{ sub }}</p>
    </div>

    <div :class="[
      'font-semibold md:text-6xl text-4xl text-center',
      theme === 'light' ? 'text-primary' : 'text-white'
    ]">
      {{ title }}
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles replaced by inline Tailwind */
</style>

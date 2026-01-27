
<script setup>
import { ref, onMounted } from 'vue';

const displayText = ref('');
const sentences = [
  "Enterprise backend and cloud-ready architectures.",
  "Offline-first Android apps built for real-world conditions.",
  "Production systems designed for scale, reliability, and longevity."
];
let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentSentence = sentences[sentenceIndex];
  
  if (isDeleting) {
    displayText.value = currentSentence.substring(0, charIndex - 1);
    charIndex--;
  } else {
    displayText.value = currentSentence.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 20 : 40;

  if (!isDeleting && charIndex === currentSentence.length) {
    isDeleting = true;
    typeSpeed = 3000; // Wait 3 seconds before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    sentenceIndex = (sentenceIndex + 1) % sentences.length;
    typeSpeed = 500; // Wait 0.5s before typing next
  }

  setTimeout(typeEffect, typeSpeed);
};

onMounted(() => {
  typeEffect();
});
</script>

<template>
  <section class="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
    <!-- Main Content -->
    <div class="relative z-10 text-center max-w-7xl px-4 animate-fade-in-up">
      <h1 class="font-bold tracking-tighter mb-8 leading-tight flex flex-col items-center justify-center w-full">
        <span class="text-4xl md:text-6xl lg:text-7xl md:whitespace-nowrap">Building Production-Grade</span>
        <span class="text-4xl md:text-6xl lg:text-7xl md:whitespace-nowrap mt-2 pb-2">
          <span style="background-image: linear-gradient(to right, #512BD4, #0078D4, #00C7FD); -webkit-background-clip: text; background-clip: text; color: transparent;">.NET & Android Systems</span>
        </span>
      </h1>
      
      <!-- Typing Subtitle -->
      <p class="text-lg md:text-2xl text-slate-600 font-light max-w-3xl mx-auto mb-10 leading-relaxed min-h-[3em]">
        {{ displayText }}<span class="animate-blink text-slate-800">|</span>
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4 sm:px-0">
        <router-link :to="{ path: '/', hash: '#projects' }" class="w-full sm:w-auto px-6 py-3 md:px-10 md:py-6 rounded-full bg-primary text-white font-medium text-base md:text-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
          View Work
        </router-link>
         <router-link :to="{ path: '/', hash: '#contact' }" class="w-full sm:w-auto px-6 py-3 md:px-10 md:py-6 rounded-full bg-white border border-gray-200 text-primary font-medium text-base md:text-xl hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 text-center">
          Get in Touch
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

.animate-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>



<template>
  <section class="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
    <!-- Main Content -->
    <div class="relative z-10 text-center max-w-4xl px-4 animate-fade-in-up">
      <h1 class="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
        Building Scalable <br />
        <span class="inline-block bg-gradient-to-r from-accent-blue via-accent-red to-accent-yellow bg-clip-text text-transparent mt-2">.NET Solutions</span>
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
        Crafting high-performance backend systems and elegant cloud architectures.
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
</style>

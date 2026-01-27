<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TitleHeader from './TitleHeader.vue';
import { techStackImgs } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);

onMounted(() => {
  // Animate the tech cards in the skills section
  gsap.fromTo(
    '.tech-card',
    {
      // Initial values
      y: 50, // Move the cards down by 50px
      opacity: 0, // Set the opacity to 0
    },
    {
      // Final values
      y: 0, // Move the cards back to the top
      opacity: 1, // Set the opacity to 1
      duration: 1, // Duration of the animation
      ease: 'power2.inOut', // Ease of the animation
      stagger: 0.2, // Stagger the animation by 0.2 seconds
      scrollTrigger: {
        trigger: sectionRef.value, // Trigger the animation when the user scrolls to the #skills wrapper
        start: 'top center', // Start the animation when the top of the wrapper is at the center of the screen
      },
    }
  );
});
</script>

<template>
  <section id="tech-stack" ref="sectionRef" class="py-24 min-h-screen bg-white text-primary font-sans relative">
    <div class="flex justify-center items-center px-5 md:px-10 h-full">
      <div class="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Engineering Focus & Core Capabilities"
          sub="🔧 Core Expertise"
          theme="light"
        />

        <div class="flex flex-wrap justify-center gap-5 md:gap-10 xl:gap-16 mt-16">
          <div
            v-for="(techStackIcon, index) in techStackImgs"
            :key="index"
            class="tech-card relative overflow-hidden group rounded-full xl:h-[50vh] h-72 w-full md:w-72 xl:w-80 border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div class="absolute left-0 bottom-[-50%] md:bottom-[-100%] w-full h-[120%] group-hover:bottom-0 transition-all duration-700 z-0">
              <!-- Wave Shape -->
              <div class="w-full h-12 bg-repeat-x" style="background-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='%23000000'%3E%3C/path%3E%3C/svg%3E&quot;); background-size: 200% 100%; transform: translateY(2px);"></div>
              <!-- Solid Black Body -->
              <div class="w-full h-full bg-black translate-y-[-1px]"></div>
            </div>
            <div class="flex flex-col justify-center items-center xl:gap-5 h-full overflow-hidden relative z-10 group-hover:cursor-grab">
              <div class="tech-icon-wrapper w-36 h-36 md:w-56 md:h-56">
                <img :src="techStackIcon.imgPath" alt="" />
              </div>
              <div class="px-4 w-full">
                <p class="text-lg 2xl:text-2xl pb-5 xl:pb-0 font-semibold text-white md:text-primary md:group-hover:text-white transition-colors duration-300 text-center">{{ techStackIcon.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* No internal styles needed, using Tailwind */
</style>

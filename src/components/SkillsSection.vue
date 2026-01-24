<script setup>
import { TresCanvas } from '@tresjs/core';
import { shallowRef } from 'vue';

const skills = [
  { category: 'Backend', items: ['.NET 8', 'ASP.NET Core', 'C#', 'SQL Server', 'Redis', 'Microservices'] },
  { category: 'Frontend', items: ['Vue.js', 'React', 'Tailwind CSS', 'TypeScript', 'Vite'] },
  { category: 'Cloud & DevOps', items: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'CI/CD'] }
];

const torusRef = shallowRef(null);

// Auto-rotate logic would usually go in a useLoop hook, keeping it simple for now or using props if avail
// In TresJS we can bind :rotation
</script>

<template>
  <section id="skills" class="py-24 px-4 w-full bg-black text-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
      <!-- Text Content -->
      <div class="md:w-1/2 relative z-10">
        <h2 class="text-4xl md:text-6xl font-bold mb-8">
          How I Can <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-green">Contribute</span>
        </h2>
        <p class="text-gray-400 text-lg mb-12 leading-relaxed">
          I bridge the gap between complex backend logic and beautiful frontend experiences. My expertise spans the entire development lifecycle.
        </p>

        <div class="space-y-8">
          <div v-for="skillGroup in skills" :key="skillGroup.category">
            <h3 class="text-xl font-bold mb-4 text-white border-l-4 border-primary pl-4">{{ skillGroup.category }}</h3>
            <div class="flex flex-wrap gap-3">
              <span 
                v-for="item in skillGroup.items" 
                :key="item"
                class="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/5 text-sm font-light text-gray-200"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 3D Canvas -->
      <div class="md:w-1/2 h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
        <TresCanvas clear-color="#111" window-size>
          <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 0]" />
          <TresAmbientLight :intensity="1" />
          <TresDirectionalLight :position="[10, 10, 10]" :intensity="1" />
          
          <TresMesh ref="torusRef">
            <TresTorusKnotGeometry :args="[1, 0.3, 100, 16]" />
            <TresMeshNormalMaterial />
          </TresMesh>
          <TresGridHelper />
        </TresCanvas>
        
        <div class="absolute bottom-4 right-4 bg-black/50 backdrop-blur px-4 py-2 rounded-full text-xs text-gray-400 border border-white/10">
            Interactive 3D Skill Cloud
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const experiences = ref([
  {
    id: 1,
    role: 'Senior .NET Developer',
    company: 'Tech Solutions Inc.',
    period: '2023 - Present',
    description: 'Leading the development of high-performance microservices architecture. Optimized database queries reducing load times by 40%.',
    tags: ['.NET 8', 'Azure', 'Kubernetes']
  },
  {
    id: 2,
    role: 'Software Engineer',
    company: 'Digital Innovations',
    period: '2020 - 2023',
    description: 'Developed and maintained scalable web applications using ASP.NET Core. Collaborated with cross-functional teams to deliver features on time.',
    tags: ['ASP.NET Core', 'SQL Server', 'React']
  },
  {
    id: 3,
    role: 'Junior Developer',
    company: 'StartUp Hub',
    period: '2018 - 2020',
    description: 'Assisted in building RESTful APIs and front-end components. Participated in code reviews and agile ceremonies.',
    tags: ['C#', 'JavaScript', 'Git']
  }
]);
</script>

<template>
  <section id="experience" class="py-20 px-4 w-full min-h-screen bg-white/50 relative overflow-hidden">
    <div class="max-w-4xl mx-auto relative z-10">
      <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight">
        Professional <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-red to-accent-yellow">Work Experience</span>
      </h2>

      <div class="space-y-8">
        <div 
          v-for="(exp, index) in experiences" 
          :key="exp.id"
          class="relative pl-8 md:pl-0"
        >
          <!-- Timeline Vertical Line for Desktop -->
          <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>
          
          <div :class="[
            'md:flex items-center justify-between gap-8 group',
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          ]">
            
            <!-- Timeline Dot -->
            <div class="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md transform -translate-x-[5px] md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 group-hover:scale-125 transition-transform duration-300"></div>

            <!-- Content Card -->
            <div class="md:w-[45%] mb-8 md:mb-0">
              <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:-translate-y-1">
                <div class="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 class="text-xl font-bold text-gray-900">{{ exp.role }}</h3>
                  <span class="text-sm text-primary font-medium">@ {{ exp.company }}</span>
                </div>
                <div class="text-sm text-gray-400 mb-4 font-mono">{{ exp.period }}</div>
                <p class="text-gray-600 mb-4 leading-relaxed">
                  {{ exp.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tag in exp.tags" 
                    :key="tag"
                    class="px-3 py-1 text-xs rounded-full bg-gray-50 text-gray-600 border border-gray-100"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
            
            <!-- Empty Space for Alignment -->
            <div class="md:w-[45%]"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

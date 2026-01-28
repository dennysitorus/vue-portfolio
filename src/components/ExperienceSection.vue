<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TitleHeader from './TitleHeader.vue';

gsap.registerPlugin(ScrollTrigger);

const experiences = ref([
  {
    id: 1,
    role: '.NET Full Stack Developer',
    company: 'PT Adaro Logistics',
    period: 'Jul 2025 - Present',
    description: 'Developing production-grade .NET MVC systems for logistics operations, including real-time fuel calculation. Built .NET 9 APIs supporting Android applications with offline-first capabilities and automated workflows using Telegram bots and Power Automate.',
    tags: ['.NET 9', 'ASP.NET MVC', 'REST API', 'Android', 'Kotlin', 'Jetpack Compose', 'SQL Server', 'Azure DevOps']
  },
  {
    id: 2,
    role: 'Senior Android Engineer (Consulting)',
    company: 'IT Consulting Company',
    period: '2025 (3-month Project)',
    description: 'Led requirement gathering with users, reviewed Android codebases, and handled critical bug fixes and hotfixes. Acted as a technical bridge between users and development teams, including solution walkthroughs and presentations.',
    tags: ['Android', 'Kotlin', 'Consulting', 'Requirement Gathering', 'Code Review', 'Bug Fixing']
  },
  {
    id: 3,
    role: 'IT Development Specialist',
    company: 'PT Suzuki Finance Indonesia',
    period: 'Sept 2021 - Mar 2025',
    description: 'Built and maintained enterprise financial systems using C# and ASP.NET. Optimized SQL Server queries, integrated SSO and third-party services, and refactored legacy modules to improve performance and maintainability.',
    tags: ['C#', 'ASP.NET MVC', 'Web Forms', 'SQL Server', 'T-SQL', 'SSO', 'Enterprise Systems']
  },
  {
    id: 4,
    role: 'Android Developer',
    company: 'PT Argenta Danika Pradhana',
    period: 'Mar 2020 - Sept 2021',
    description: 'Developed Android applications with offline-first support, CameraX, and GPS validation. Built REST APIs with Laravel Lumen and improved application stability through logging and crash monitoring.',
    tags: ['Android', 'Java', 'RxJava', 'Offline-First', 'CameraX', 'Laravel Lumen', 'MySQL', 'REST API']
  },
  {
    id: 5,
    role: 'Technical Product Specialist (IoT & Fleet Systems)',
    company: 'PT DigitalInstincts Teknologi',
    period: 'Oct 2019 - Apr 2020',
    description: 'Supported IoT fleet tracking systems by monitoring telemetry data, validating devices, and assisting M2M teams with troubleshooting and technical documentation to ensure system reliability.',
    tags: ['IoT', 'Telemetry Devices', 'Fleet Management', 'SQL Server', 'M2M', 'System Validation']
  }
]);

const timelineContainer = ref(null);
const progressLine = ref(null);

onMounted(() => {
  if (timelineContainer.value && progressLine.value) {
    gsap.to(progressLine.value, {
      height: '0%', // Unfill as we scroll
      ease: 'none',
      scrollTrigger: {
        trigger: timelineContainer.value,
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: 0.5,
      }
    });
  }
});
</script>

<template>
  <section id="experience" class="py-20 px-4 w-full min-h-screen bg-white/50 relative overflow-hidden">
    <div class="max-w-4xl mx-auto relative z-10">
      <div class="mb-16">
        <TitleHeader
          title="Professional Work Experience"
          sub="Career Path"
          theme="light"
        />
      </div>

      <div class="relative" ref="timelineContainer">
        <!-- Continuous Timeline Line -->
        <div class="absolute left-[3px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2"></div>
        
        <!-- Scroll Progress Line -->
        <div ref="progressLine" class="absolute left-[3px] md:left-1/2 bottom-0 w-0.5 bg-black md:-translate-x-1/2 h-full"></div>

        <div class="space-y-8">
          <div 
            v-for="(exp, index) in experiences" 
            :key="exp.id"
            class="relative pl-8 md:pl-0"
          >
            
            <div :class="[
              'md:flex items-center justify-between gap-8 group',
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            ]">
              
              <!-- Timeline Dot -->
              <div class="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md transform -translate-x-[5px] md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 group-hover:scale-125 transition-transform duration-300"></div>
  
              <!-- Content Card -->
              <div class="md:w-[45%] mb-8 md:mb-0">
                <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:-translate-y-1">
                  <div class="flex flex-wrap items-baseline gap-2">
                    <h3 class="text-xl font-bold text-gray-900">{{ exp.role }}</h3>
                  </div>
                  <div class="text-sm text-gray-400 font-mono mb-2"><span class="text-sm text-primary font-medium">@ {{ exp.company }}</span></div>
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
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import TitleHeader from './TitleHeader.vue';

const projects = [
  {
    id: 1,
    title: 'Sparepart Management',
    category: 'Web',
    image: 'https://res.cloudinary.com/dmauujsdz/image/upload/w_900,q_auto,f_auto/v1769547271/Sparepart_Management_System_whurar.png',
    description: 'Sparepart Management System is a web-based application designed to manage sparepart inventory by recording stock-in and stock-out transactions through structured, approval-based workflows.',
    stack: ['Laravel', 'Livewire', 'Tailwind CSS', 'Alpine.js', 'Bootstrap', 'MySQL'],
    link: '#'
  },
  {
    id: 2,
    title: 'SFI Access',
    category: 'Web',
    image: 'https://res.cloudinary.com/dmauujsdz/image/upload/w_900,q_auto,f_auto/v1769547272/SFI_Access_o85zhr.png',
    description: 'SFI Access is a centralized authentication platform that unifies multiple internal applications through a single sign-on (SSO) mechanism, allowing users to access all systems with one login while maintaining existing business processes and improving security and user experience.',
    stack: ['React', '.NET MVC', 'Bootstrap', 'SQL Server', 'JWT'],
    link: '#'
  },
  {
    id: 3,
    title: 'PORT Connect',
    category: 'Web',
    image: 'https://res.cloudinary.com/dmauujsdz/image/upload/w_900,q_auto,f_auto/v1769547273/Port_Connect_Mockup_cnkcjn.png',
    description: 'Port Connect is a centralized dashboard that manages vessel supply orders placed through an Android application while ships are docked at Merak or Bakauheni ports, enabling efficient coordination of procurement, preparation, and delivery or pickup of operational and crew supplies.',
    stack: ['React', 'Golang', 'PostgreSQL', 'JWT', 'CI/CD', 'Docker'],
    link: '#'
  },
  {
    id: 4,
    title: 'Menarique',
    category: 'Mobile',
    image: 'https://res.cloudinary.com/dmauujsdz/image/upload/w_900,q_auto,f_auto/v1769420980/project1_ejreyd.png',
    description: 'Menarique is a Kotlin-based Android application designed to perform accurate vehicle license plate recognition using OCR and computer vision, supporting vehicle verification and payment status validation workflows.',
    stack: ['OCR', 'Computer Vision', 'Kotlin'],
    link: '#'
  },
  {
    id: 5,
    title: 'BTN Pinpad',
    category: 'Mobile',
    image: 'https://res.cloudinary.com/dmauujsdz/image/upload/w_900,q_auto,f_auto/v1769516902/Gemini_Generated_Image_bv83nmbv83nmbv83_vhegd5.png',
    description: 'BTN Pinpad is an Android-based application designed to support ATM card registration, PIN verification, and mobile PIN enrollment, integrated with centralized device monitoring and remote management capabilities.',
    stack: ['Kotlin', 'Jetpack Compose', 'OTA'],
    link: '#'
  },
  {
    id: 6,
    title: 'Turjawali Patrol',
    category: 'Mobile',
    image: 'https://res.cloudinary.com/dmauujsdz/image/upload/w_900,q_auto,f_auto/v1769513424/Gemini_Generated_Image_oex4wboex4wboex4_y1i0cl.png',
    description: 'Turjawali Patrol is an Android mobile application designed to support patrol logging, attendance tracking, and operational reporting for field personnel, with offline-first capabilities and integrated location verification.',
    stack: ['Java', 'Firebase', 'SQLite', 'Kotlin'],
    link: '#'
  }
];

</script>

<template>
  <section id="projects" class="py-24 px-4 w-full min-h-screen relative">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16">
        <TitleHeader
          title="Selected Projects"
          sub="Highlights"
          theme="light"
        />
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link 
          v-for="project in projects" 
          :key="project.id"
          :to="{ name: 'project-detail', params: { id: project.id }}"
          class="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100 flex flex-col h-full"
        >
          <!-- Category Badge -->
          <div class="absolute top-4 right-4 z-10">
             <span class="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-gray-800 shadow-sm border border-gray-100">
               {{ project.category }}
             </span>
          </div>

          <!-- Card Image & Overlay -->
          <div class="relative h-64 overflow-hidden">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <!-- Card Content -->
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">{{ project.title }}</h3>
            <p class="text-gray-600 line-clamp-6 text-sm mb-6 flex-grow leading-relaxed">{{ project.description }}</p>
            
            <div class="flex flex-wrap gap-2 mt-auto">
              <span v-for="t in project.stack.slice(0,3)" :key="t" class="text-xs font-semibold px-2.5 py-1 bg-gray-50 text-gray-600 rounded-md border border-gray-100">
                {{ t }}
              </span>
              <span v-if="project.stack.length > 3" class="text-xs font-semibold px-2.5 py-1 bg-gray-50 text-gray-400 rounded-md">
                +{{ project.stack.length - 3 }}
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

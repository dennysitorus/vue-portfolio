<script setup>
import { ref } from 'vue';



const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    description: 'A full-featured e-commerce solution built with ASP.NET Core and Vue.js. Features include real-time inventory, secure payments (Stripe), and an admin dashboard.',
    stack: ['ASP.NET Core', 'Vue.js', 'PostgreSQL', 'Redis'],
    link: '#'
  },
  {
    id: 2,
    title: 'Healthcare Portal',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    description: 'Patient management system compliant with HIPAA regulations. Secure document sharing and appointment scheduling.',
    stack: ['.NET 8', 'Blazor', 'Azure SQL'],
    link: '#'
  },
  {
    id: 3,
    title: 'Finance Dashboard',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'Real-time financial data visualization tool for enterprise clients. optimized for high-volume data processing.',
    stack: ['React', 'D3.js', '.NET API'],
    link: '#'
  },
  {
    id: 4,
    title: 'Fitness Tracker App',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80',
    description: 'Mobile application for tracking workouts and nutrition. Integrates with wearable devices.',
    stack: ['Flutter', 'Firebase', 'Node.js'],
    link: '#'
  },
  {
    id: 5,
    title: 'Travel Companion',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    description: 'AR-enabled travel guide application. Points of interest overlay through camera view.',
    stack: ['Unity', 'C#', 'ARCore'],
    link: '#'
  }
];

</script>

<template>
  <section id="projects" class="py-24 px-4 w-full min-h-screen relative">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl md:text-6xl font-bold mb-16 text-center">
        Selected <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-red to-accent-yellow">Projects</span>
      </h2>

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
            <p class="text-gray-600 line-clamp-3 text-sm mb-6 flex-grow leading-relaxed">{{ project.description }}</p>
            
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

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const projectId = route.params.id;

// Assuming projects data is shared or imported. 
// For now duplication is simplest or moving data to a store. 
// I'll duplicate the data structure here for simplicity as no state management was requested.
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    description: 'A full-featured e-commerce solution built with ASP.NET Core and Vue.js. Features include real-time inventory, secure payments (Stripe), and an admin dashboard.',
    fullDescription: 'This project is a comprehensive e-commerce platform designed to scale. It includes a microservices-based backend using ASP.NET Core, enabling high availability and fault tolerance. The frontend utilizes Vue.js for a responsive and interactive user experience. Key features include:\n\n- **Real-time Inventory Management**: Powered by Redis for sub-millisecond updates.\n- **Secure Payments**: Integrated Stripe API with strong customer authentication (SCA).\n- **Admin Dashboard**: Comprehensive analytics and order management tools.\n- **Cloud Native**: Deployed on Azure Kubernetes Service (AKS).',
    stack: ['ASP.NET Core', 'Vue.js', 'PostgreSQL', 'Redis'],
    link: '#'
  },
  {
    id: 2,
    title: 'Healthcare Portal',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    description: 'Patient management system compliant with HIPAA regulations. Secure document sharing and appointment scheduling.',
    fullDescription: 'A secure and compliant healthcare management system. \n\n- **Security**: End-to-end encryption for all patient data.\n- **Compliance**: Fully HIPAA compliant auditing and access controls.\n- **Telehealth**: Integrated video consultation features.',
    stack: ['.NET 8', 'Blazor', 'Azure SQL'],
    link: '#'
  },
  {
    id: 3,
    title: 'Finance Dashboard',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'Real-time financial data visualization tool for enterprise clients. optimized for high-volume data processing.',
    fullDescription: 'High-performance dashboard for financial analytics.\n\n- **Visualization**: D3.js powered interactive charts.\n- **Performance**: Capable of processing 100k+ events per second.',
    stack: ['React', 'D3.js', '.NET API'],
    link: '#'
  },
  {
    id: 4,
    title: 'Fitness Tracker App',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80',
    description: 'Mobile application for tracking workouts and nutrition. Integrates with wearable devices.',
    fullDescription: 'Cross-platform mobile application for fitness enthusiasts.\n\n- **Wearable Integration**: Syncs with Apple Watch and Garmin.\n- **Social**: Challenge friends and share achievements.',
    stack: ['Flutter', 'Firebase', 'Node.js'],
    link: '#'
  },
  {
    id: 5,
    title: 'Travel Companion',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    description: 'AR-enabled travel guide application. Points of interest overlay through camera view.',
    fullDescription: 'Augmented Reality travel guide.\n\n- **AR Navigation**: Point your camera to see navigation arrows and POI details.\n- **Offline Mode**: Download maps and guides for offline use.',
    stack: ['Unity', 'C#', 'ARCore'],
    link: '#'
  }
];

const project = computed(() => projects.find(p => p.id === parseInt(projectId)));
</script>

<template>
  <div class="grain-overlay"></div>
  <div class="min-h-screen bg-gray-50 pt-32 pb-20 px-4 relative z-10">
    <div v-if="project" class="max-w-5xl mx-auto">
      <!-- Back Button -->
      <router-link to="/#projects" class="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white hover:bg-gray-50 text-gray-600 hover:text-primary transition-all duration-300 font-bold rounded-full shadow-sm border border-gray-100 hover:shadow-md hover:-translate-x-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Projects
      </router-link>

      <div class="bg-white rounded-[3rem] shadow-xl overflow-hidden animate-fade-in-up">
        <!-- Project Header Image -->
        <div class="h-[300px] md:h-[600px] relative">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-6 left-6 md:bottom-10 md:left-16 text-white">
              <span class="bg-primary px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider mb-2 md:mb-4 inline-block">{{ project.category }}</span>
              <h1 class="text-3xl md:text-7xl font-bold mb-2 md:mb-4 leading-tight">{{ project.title }}</h1>
          </div>
        </div>

        <div class="p-8 md:p-16 flex flex-col md:flex-row gap-12">
          <div class="md:w-2/3">
            <h2 class="text-2xl font-bold mb-6 text-gray-900">Case Study</h2>
            <div class="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-line">
              {{ project.fullDescription || project.description }}
            </div>
            
            <div class="mt-12">
              <h3 class="text-xl font-bold mb-6">Gallery</h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="h-48 bg-gray-200 rounded-xl"></div>
                <div class="h-48 bg-gray-200 rounded-xl"></div>
              </div>
            </div>
          </div>

          <div class="md:w-1/3">
            <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100 sticky top-32">
                <h3 class="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Technologies</h3>
                <div class="flex flex-wrap gap-2 mb-8">
                  <span v-for="t in project.stack" :key="t" class="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                    {{ t }}
                  </span>
                </div>
                
                <a :href="project.link" target="_blank" class="block w-full py-4 bg-primary text-white text-center font-bold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all">
                  Launch Project
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="text-center pt-20">
      <h1 class="text-4xl font-bold text-gray-400">Project Not Found</h1>
      <router-link to="/" class="mt-8 inline-block text-primary underline">Back to Home</router-link>
    </div>
  </div>
</template>

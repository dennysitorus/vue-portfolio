<script setup>
import { useRoute } from 'vue-router';
import { computed, ref, onMounted, onUnmounted } from 'vue';

const route = useRoute();
const projectId = route.params.id;
const isGalleryOpen = ref(false);
const currentImageIndex = ref(0);

const openGallery = (index) => {
  currentImageIndex.value = index;
  isGalleryOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeGallery = () => {
  isGalleryOpen.value = false;
  document.body.style.overflow = '';
};

const nextImage = () => {
  if (project.value && project.value.gallery) {
    currentImageIndex.value = (currentImageIndex.value + 1) % project.value.gallery.length;
  }
};

const prevImage = () => {
  if (project.value && project.value.gallery) {
    currentImageIndex.value = (currentImageIndex.value - 1 + project.value.gallery.length) % project.value.gallery.length;
  }
};

const handleKeydown = (e) => {
  if (!isGalleryOpen.value) return;
  if (e.key === 'Escape') closeGallery();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});

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
    link: '#',
    gallery: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&q=80',
      'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&q=80',
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80'
    ]
  },
  {
    id: 2,
    title: 'Healthcare Portal',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    description: 'Patient management system compliant with HIPAA regulations. Secure document sharing and appointment scheduling.',
    fullDescription: 'A secure and compliant healthcare management system. \n\n- **Security**: End-to-end encryption for all patient data.\n- **Compliance**: Fully HIPAA compliant auditing and access controls.\n- **Telehealth**: Integrated video consultation features.',
    stack: ['.NET 8', 'Blazor', 'Azure SQL'],
    link: '#',
    gallery: [
      'https://images.unsplash.com/photo-1576091160550-2187d80afea2?w=800&q=80',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
      'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80'
    ]
  },
  {
    id: 3,
    title: 'Finance Dashboard',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'Real-time financial data visualization tool for enterprise clients. optimized for high-volume data processing.',
    fullDescription: 'High-performance dashboard for financial analytics.\n\n- **Visualization**: D3.js powered interactive charts.\n- **Performance**: Capable of processing 100k+ events per second.',
    stack: ['React', 'D3.js', '.NET API'],
    link: '#',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1543286386-713df548e9cc?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80'
    ]
  },
  // {
  //   id: 4,
  //   title: 'Menarique',
  //   category: 'Mobile',
  //   image: 'https://res.cloudinary.com/dmauujsdz/image/upload/w_1200,q_auto,f_auto/v1769420980/project1_ejreyd.png',
  //   description: null,
  //   fullDescription: 'Android mobile application developed to support vehicle verification processes within Suzuki Finance Indonesia.\n\n- **License Plate Recognition**: Utilizes camera-based OCR with a custom-trained YOLOv8 and EasyOCR pipeline connected to a Python Flask backend.\n- **Vehicle & Payment Validation**: Verifies vehicle registration status and checks outstanding payment obligations through internal backend services.\n- **Multiple Input Methods**: Supports license plate input via camera OCR, voice-based speech-to-text, and manual keyboard entry.\n- **Text-to-Speech Feedback**: Provides audio responses to improve usability during hands-free or constrained field operations.\n- **Modern Android Stack**: Built using Kotlin and Jetpack Compose with a focus on reliability and operational efficiency.',
  //   stack: ['OCR', 'Computer Vision', 'Kotlin', 'Jetpack Compose', 'YOLOv8', 'Python', 'Firebase', 'Android'],
  //   link: '#',
  //   gallery: [
  //     'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
  //     'https://images.unsplash.com/photo-1434493789847-2f02ea6ca920?w=800&q=80',
  //     'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80',
  //     'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80'
  //   ]
  // },
  {
    id: 5,
    title: 'Travel Companion',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    description: 'AR-enabled travel guide application. Points of interest overlay through camera view.',
    fullDescription: 'Augmented Reality travel guide.\n\n- **AR Navigation**: Point your camera to see navigation arrows and POI details.\n- **Offline Mode**: Download maps and guides for offline use.',
    stack: ['Unity', 'C#', 'ARCore'],
    link: '#',
    gallery: [
      'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&q=80',
      'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80',
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&q=80'
    ]
  },
  {
    id: 6,
    title: 'Menarique',
    category: 'Mobile',
    image: 'https://res.cloudinary.com/dmauujsdz/image/upload/w_900,q_auto,f_auto/v1769420980/project1_ejreyd.png',
    description: 'Android application for vehicle verification using OCR and voice recognition.',
    fullDescription: `Menarique is an Android mobile application developed to support vehicle verification processes within **Suzuki Finance Indonesia**. The application is designed to ensure that inspected vehicles are officially registered in the company’s internal systems and to validate customer payment compliance during field operations.

The application uses the device camera as the primary input to automatically recognize vehicle license plates. This process is handled through an **OCR pipeline** connected to a **Python Flask** backend, combining **YOLOv8** for license plate detection and **EasyOCR** for text extraction. The detection model was trained manually using a curated dataset consisting exclusively of Suzuki vehicles, enabling higher accuracy within the company’s specific operational context.

After a license plate is successfully detected, the extracted data is forwarded to downstream backend services that integrate with Suzuki Finance’s internal databases. These services return verification results indicating whether the vehicle matches registered records and whether any outstanding payment obligations are associated with the unit.

To support flexibility in real-world usage, Menarique provides three methods for license plate input: **camera-based OCR**, **voice input** through speech-to-text, and **manual keyboard entry**. The application also includes a text-to-speech feature to deliver audio feedback to users, improving usability in hands-free or constrained operational environments. Menarique is built using **Kotlin** and **Jetpack Compose**, focusing on reliability, clarity, and efficiency for daily operational use.`,
    stack: ['OCR', 'Python', 'YOLOv8', 'EasyOCR', 'Computer Vision', 'Kotlin', 'Android', 'Firebase', 'Jetpack Compose'],
    link: '',
    gallery: [
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769420769/Screenshot_20250521_023817_orklpa.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769420776/Screenshot_20250521_023825_tmh6ny.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769420775/Screenshot_20250521_023835_p65ro1.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769420790/Screenshot_20250521_023924_pjlfzf.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769420787/Screenshot_20250521_024011_htxdca.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769420798/Screenshot_20250521_024004_qd28us.png',
    ]
  }
];

const project = computed(() => projects.find(p => p.id === parseInt(projectId)));

const formattedDescription = computed(() => {
  if (!project.value) return '';
  const text = project.value.fullDescription || project.value.description;
  return text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');
});
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
            <h2 class="text-2xl font-bold mb-6 text-gray-900">Project Overview</h2>
            <div class="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-line text-justify" v-html="formattedDescription"></div>
            
            <div class="mt-12" v-if="project.gallery">
              <h3 class="text-xl font-bold mb-6">Gallery</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="(img, index) in project.gallery" :key="index" 
                     class="h-48 md:h-64 rounded-xl overflow-hidden cursor-pointer group relative"
                     @click="openGallery(index)">
                  <img :src="img" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Gallery image">
                  <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
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
                
                <a v-if="project.link && project.link !== '#'" :href="project.link" target="_blank" class="block w-full py-4 bg-primary text-white text-center font-bold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all">
                  {{ project.category === 'Mobile' ? 'View on Play Store' : 'Launch Project' }}
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

  <!-- Lightbox -->
  <div v-if="isGalleryOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300" @click="closeGallery">
    <button class="absolute top-4 right-4 text-white/50 hover:text-white transition-colors" @click="closeGallery">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    
    <button class="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2" @click.stop="prevImage">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
    </button>
    
    <div class="relative max-w-5xl max-h-[90vh] p-4 flex flex-col items-center" @click.stop>
        <transition 
          enter-active-class="transition ease-out duration-300 transform" 
          enter-from-class="opacity-0 scale-90" 
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition ease-in duration-200 transform"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-90"
          mode="out-in"
        >
          <img :key="currentImageIndex" :src="project.gallery[currentImageIndex]" class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" alt="Gallery preview">
        </transition>
        <p class="text-white/50 text-center mt-4 font-mono">{{ currentImageIndex + 1 }} / {{ project.gallery.length }}</p>
    </div>

    <button class="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2" @click.stop="nextImage">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
    </button>
  </div>
</template>

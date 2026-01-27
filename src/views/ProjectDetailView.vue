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
    title: 'Sparepart Management System',
    category: 'Web',
    image: 'https://res.cloudinary.com/dmauujsdz/image/upload/w_1400,q_auto,f_auto/v1769541965/Screenshot_2026-01-28_022344_jkrpvd.png',
    description: '<strong>Sparepart Management System</strong> is an enterprise-oriented web application developed to support structured recording and monitoring of <strong>sparepart inventory movements</strong>, including <strong>incoming</strong> and <strong>outgoing stock</strong> activities within warehouse operations. The system is designed to improve <strong>data integrity</strong>, <strong>traceability</strong>, and <strong>control</strong> over inventory processes by implementing role-based access and approval mechanisms.<br><br>The application enables <strong>Warehouse Staff</strong> to submit stock requests and record sparepart usage, while <strong>Admin Staff</strong> manage master data and system configurations. Each stock-in and stock-out transaction is processed through a <strong>tiered approval workflow</strong>, involving <strong>Warehouse Heads</strong> and <strong>Managers</strong>, ensuring that all inventory movements are properly reviewed, authorized, and documented before execution.<br><br>To support operational monitoring and analysis, the system provides <strong>monthly inventory reports</strong> in <strong>PDF format</strong> as well as <strong>interactive charts</strong> that display average maximum sparepart usage trends. These insights help management identify consumption patterns, anticipate future needs, and reduce the risk of overstocking or stock shortages.<br><br>In addition to transaction management, <strong>Sparepart Management System</strong> offers real-time inventory visibility through dashboards that present current stock levels, minimum stock thresholds, and usage statistics. This allows stakeholders to make informed decisions based on accurate and up-to-date data across warehouse operations.<br><br><strong>Sparepart Management System</strong> is built with a focus on <strong>reliability</strong>, <strong>maintainability</strong>, and <strong>operational efficiency</strong>, reflecting an enterprise-level approach to inventory and workflow management. The application supports scalable warehouse processes while ensuring compliance, accountability, and transparent inventory control across organizational roles.',
    stack: ['Laravel', 'Livewire', 'Tailwind CSS', 'Alpine.js', 'Bootstrap', 'MySQL'],
    link: 'https://projects.awsitsoft.com/warehouse/',
    gallery: [
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769541964/Screenshot_2026-01-28_022326_ynhdmc.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769541965/Screenshot_2026-01-28_022344_jkrpvd.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769541963/Screenshot_2026-01-28_022412_ecntjv.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769541963/Screenshot_2026-01-28_022418_f2b29o.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769541964/Screenshot_2026-01-28_022433_goxgqt.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769541964/Screenshot_2026-01-28_022449_wcf0cj.png',
    ]
  },
  {
    id: 2,
    title: 'SFI Access',
    category: 'Web',
    image: 'https://res.cloudinary.com/dmauujsdz/image/upload/w_1400,q_auto,f_auto/v1769543516/Screenshot_2026-01-28_025048_bsscqu.png',
    description: '<strong>SFI Access</strong> is an enterprise authentication and access management application developed to consolidate multiple internal systems into a <strong>single sign-on (SSO)</strong> environment. The application addresses the challenge of fragmented authentication flows by allowing users to authenticate once and securely access multiple applications without repeated login actions.<br><br> Prior to the implementation of <strong>SFI Access</strong>, each application operated with its own independent authentication mechanism, resulting in duplicated login processes and increased user friction. With SFI Access, authentication is centralized while ensuring that existing <strong>business processes</strong>, application logic, and operational workflows remain unchanged and unaffected.<br><br> The application functions as a unified access gateway, handling user authentication, session management, and authorization mapping across integrated systems. Once authenticated, users can seamlessly navigate between applications without re-entering credentials, improving operational efficiency and reducing authentication-related overhead.<br><br> <strong>SFI Access</strong> is designed to integrate securely with existing applications through standardized authentication and identity validation mechanisms, ensuring consistency, scalability, and maintainability across the ecosystem. Centralized login management also enhances security control, auditing capability, and access visibility at the system level.<br><br> Built with a focus on <strong>reliability</strong>, <strong>security</strong>, and <strong>system interoperability</strong>, <strong>SFI Access</strong> supports enterprise needs for unified identity management while maintaining flexibility for future application expansion. The platform provides a solid foundation for scalable system integration, improved user experience, and streamlined access governance across organizational applications.',
    stack: ['React', '.NET MVC', 'Bootstrap', 'SQL Server', 'JWT'],
    link: '#',
    gallery: []
  },
    {
    id: 3,
    title: 'PORT Connect',
    category: 'Web',
    image: 'https://res.cloudinary.com/dmauujsdz/image/upload/w_1400,q_auto,f_auto/v1769546019/Frame_1_zzaqjn.png',
    description: '<strong>Port Connect</strong> is an integrated dashboard application developed to support the management of <strong>vessel supply orders</strong> while ships are docked at <strong>Merak</strong> or <strong>Bakauheni ports</strong>. The application serves as a centralized control platform that connects ship-side procurement activities with port-side operational fulfillment.<br><br> The system is designed to integrate with an <strong>Android-based ordering application</strong> used by vessels, allowing ship operators or crew members to place orders directly from onboard systems. Once submitted, orders are synchronized with the <strong>Port Connect dashboard</strong>, enabling port operators to manage order processing, preparation, and delivery coordination in real time.<br><br> <strong>Port Connect</strong> supports the procurement of various operational and consumption goods required by vessels, including <strong>ship equipment</strong> and <strong>crew supplies</strong> such as mooring ropes, hygiene kits, dining utensils, staple meals, snacks, and other daily necessities for crew members. Orders can be prepared for <strong>direct delivery to the vessel</strong> or <strong>pickup at the port</strong>, depending on operational requirements and docking schedules.<br><br> The dashboard provides visibility into order status, item availability, fulfillment progress, and delivery readiness, enabling efficient coordination between port operators and vessel crews. This centralized workflow helps reduce delays during port stays and ensures that required supplies are available when vessels are ready to depart.<br><br> <strong>Port Connect</strong> is built with a focus on <strong>system integration</strong>, <strong>operational efficiency</strong>, and <strong>scalability</strong>, supporting seamless communication between mobile applications and backend systems. The platform reflects an enterprise-level approach to port logistics management, ensuring reliable order handling, streamlined supply distribution, and improved service efficiency within port operations.',
    stack: ['React', 'Golang', 'PostgreSQL', 'JWT', 'CI/CD', 'Docker'],
    link: '#',
    gallery: [
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769546021/Frame_suadbw.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769546019/Frame_1_zzaqjn.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769546019/Frame_2_wihajn.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769546018/Frame_3_wjsvbm.png',
    ]
  },
  {
    id: 4,
    title: 'Menarique',
    category: 'Mobile',
    image: 'https://res.cloudinary.com/dmauujsdz/image/upload/w_900,q_auto,f_auto/v1769420980/project1_ejreyd.png',
    description: 'Android application for vehicle verification using OCR and voice recognition.',
    fullDescription: `Menarique is an Android mobile application developed to support vehicle verification processes within <strong>Suzuki Finance Indonesia</strong>. The application is designed to ensure that inspected vehicles are officially registered in the company’s internal systems and to validate customer payment compliance during field operations.<br>
The application uses the device camera as the primary input to automatically recognize vehicle license plates. This process is handled through an <strong>OCR pipeline</strong> connected to a <strong>Python Flask</strong> backend, combining <strong>YOLOv8</strong> for license plate detection and <strong>EasyOCR</strong> for text extraction. The detection model was trained manually using a curated dataset consisting exclusively of Suzuki vehicles, enabling higher accuracy within the company’s specific operational context.<br>
After a license plate is successfully detected, the extracted data is forwarded to downstream backend services that integrate with Suzuki Finance’s internal databases. These services return verification results indicating whether the vehicle matches registered records and whether any outstanding payment obligations are associated with the unit.<br>
To support flexibility in real-world usage, Menarique provides three methods for license plate input: <strong>camera-based OCR</strong>, <strong>voice input</strong> through speech-to-text, and <strong>manual keyboard entry</strong>. The application also includes a text-to-speech feature to deliver audio feedback to users, improving usability in hands-free or constrained operational environments. Menarique is built using <strong>Kotlin</strong> and <strong>Jetpack Compose</strong>, focusing on reliability, clarity, and efficiency for daily operational use.
`,
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
  },
  {
    id: 5,
    title: 'BTN Pinpad',
    category: 'Mobile',
    image: 'https://res.cloudinary.com/dmauujsdz/image/upload/w_900,q_auto,f_auto/v1769516902/Gemini_Generated_Image_bv83nmbv83nmbv83_vhegd5.png',
    description: 'Android application for attendance and work report.',
    fullDescription: `<strong>BTN Pinpad</strong> is an Android-based application developed to support secure banking operations within <strong>Bank BTN</strong>, focusing on <strong>ATM card registration</strong>, <strong>PIN verification</strong>, and <strong>mobile PIN enrollment</strong> for customers. The application is designed to streamline transaction processes at branch level while ensuring secure handling of customer credentials and device operations.<br>
The application enables bank officers to perform <strong>ATM card registration</strong>, <strong>PIN verification</strong>, and <strong>mobile PIN setup</strong> directly through a dedicated <strong>pinpad device</strong>. PIN input and verification flows are handled securely within the application to support operational standards and banking security requirements.<br>
BTN Pinpad also includes <strong>device activation</strong> and <strong>remote configuration</strong> features, allowing operators to initialize and manage devices efficiently. The application supports <strong>over-the-air (OTA) updates</strong>, enabling software updates to be deployed remotely via <strong>cloud infrastructure</strong> without requiring physical access to the device.<br>
In addition to the mobile application, the system is integrated with a <strong>web-based management platform</strong> used for <strong>audit</strong>, <strong>monitoring</strong>, and <strong>master data management</strong>. This platform provides visibility into device status, activation history, and operational health across branches, supporting centralized oversight and compliance needs.<br>
<strong>BTN Pinpad</strong> is built with a focus on <strong>reliability</strong>, <strong>security</strong>, and <strong>operational efficiency</strong>, ensuring that branch personnel and customers can perform banking transactions smoothly while enabling centralized monitoring and lifecycle management of deployed devices.`,
    stack: ['Java', 'RxJava', 'QR Code', 'Firebase', 'OneSignal', 'Laravel'],
    link: '',
    gallery: [
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769516880/Login_Screen_sjlsxo.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769514876/PIN_Screen_u2kjwv.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769514908/Home_Screeen_qzgxsg.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769514876/Settings_Screen_ocit2j.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769516885/Menu_-_Device_Activation_w8fp65.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769516882/Menu_-_Device_Activation_Message_t5nobx.png',
    ]
  },
    {
    id: 6,
    title: 'Turjawali Patrol',
    category: 'Mobile',
    image: 'https://res.cloudinary.com/dmauujsdz/image/upload/w_900,q_auto,f_auto/v1769513424/Gemini_Generated_Image_oex4wboex4wboex4_y1i0cl.png',
    description: 'Android application for attendance and work report.',
    fullDescription: `Turjawali Patrol is an Android mobile application developed to support daily operational activities for field-based personnel, including <strong>security guards</strong>, <strong>office assistants</strong>, and <strong>cleaning service staff</strong>. The application is designed to centralize <strong>patrol logging</strong>, <strong>attendance tracking</strong>, and <strong>guard tour (jaga dan atur)</strong> activities within a single operational system.<br>
The application enables users to record patrol activities, attendance (time-in), and guard tour events directly from their mobile devices. Attendance and guard tour processes are supported through <strong>QR code scanning</strong>, ensuring accurate validation at designated checkpoints. Each attendance action can also be tagged with <strong>location data</strong>, providing additional verification for operational records.<br>
Turjawali Patrol is built with an <strong>offline-first architecture</strong>, allowing users to continue performing patrols, attendance, and activity reporting even when network connectivity is unavailable. All operational data is stored <strong>locally on the device</strong> and automatically synchronized with backend services once a network connection is restored, ensuring continuity of work in low-signal environments.<br>
To support safety and incident response, the application includes <strong>Attention (Atensi)</strong> and <strong>SOS</strong> features. These features enable users to send alerts and emergency notifications to <strong>other users within the same company</strong>, allowing faster coordination and response during critical situations.<br>
The application also provides a <strong>personal reporting module</strong>, allowing users to view their own patrol logs, attendance history, activity reports, and data synchronization status directly from the app. <strong>Turjawali Patrol</strong> is built using <strong>Kotlin</strong> for Android development, with a focus on <strong>reliability</strong>, <strong>clarity</strong>, and <strong>operational efficiency</strong> in real-world field usage.
`,
    stack: ['Java', 'RxJava', 'QR Code', 'Firebase', 'OneSignal', 'Laravel'],
    link: 'https://play.google.com/store/apps/details?id=com.turjawali.patrolnew',
    gallery: [
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769513922/Screenshot_1748866266_fjlttr.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769513923/Screenshot_1748866262_m7a9y1.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769513922/Screenshot_1748866273_rafxha.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769513930/Screenshot_1748866317_h9547j.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769513926/Screenshot_1748866302_rpbzpe.png',
      'https://res.cloudinary.com/dmauujsdz/image/upload/v1769513925/Screenshot_1748866296_igiw1u.png',
    ]
  },
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
                  {{ project.category === 'Mobile' ? 'View on Play Store' : 'Launch Demo' }}
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

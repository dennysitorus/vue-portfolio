<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  company: '',
  message: ''
});

const isSubmitting = ref(false);
const submitted = ref(false);

const submitForm = async () => {
    isSubmitting.value = true;
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    isSubmitting.value = false;
    submitted.value = true;
    
    // Reset after 3 seconds
    setTimeout(() => {
        submitted.value = false;
        form.value = { name: '', email: '', company: '', message: '' };
    }, 3000);
};
</script>

<template>
  <section id="contact" class="py-24 px-4 w-full bg-white relative">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-6xl font-bold mb-6">
          Let's <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-red to-accent-yellow">Connect</span>
        </h2>
        <p class="text-gray-500 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Fill out the form below or send me an email directly.
        </p>
      </div>

      <div class="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] shadow-lg border border-gray-100 relative overflow-hidden">
        
        <form @submit.prevent="submitForm" class="space-y-6 relative z-10" v-if="!submitted">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-wide">Name</label>
              <input 
                v-model="form.name" 
                type="text" 
                required
                class="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-gray-300"
                placeholder="John Doe"
              >
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 uppercase tracking-wide">Email</label>
              <input 
                v-model="form.email" 
                type="email" 
                required
                class="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-gray-300"
                placeholder="john@example.com"
              >
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-bold text-gray-700 uppercase tracking-wide">Company <span class="text-gray-400 font-normal lowercase">(optional)</span></label>
            <input 
              v-model="form.company" 
              type="text" 
              class="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-gray-300"
              placeholder="Your Company Ltd."
            >
          </div>

          <div class="space-y-2">
            <label class="text-sm font-bold text-gray-700 uppercase tracking-wide">Message</label>
            <textarea 
              v-model="form.message" 
              required
              rows="5"
              class="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-gray-300 resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            :disabled="isSubmitting"
            class="w-full py-4 md:py-5 bg-black text-white rounded-xl font-bold text-base md:text-lg hover:bg-gray-900 hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
          >
            <span v-if="isSubmitting">Sending...</span>
            <span v-else>Send Message</span>
            <svg v-if="!isSubmitting" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>

        <div v-else class="text-center py-20 animate-fade-in-up">
            <div class="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h3 class="text-3xl font-bold mb-4">Message Sent!</h3>
            <p class="text-gray-500">Thanks for reaching out. I'll get back to you shortly.</p>
        </div>

      </div>
    </div>
  </section>
</template>

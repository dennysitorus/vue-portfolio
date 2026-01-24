<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import TitleHeader from './TitleHeader.vue';
import ContactExperience from './ContactExperience.vue';

const formRef = ref(null);

const formData = ref({
  name: '',
  email: '',
  companionName: '',
  message: '',
});

const loading = ref(false);

const handleChange = (e) => {
  const { name, value } = e.target;
  formData.value = {
    ...formData.value,
    [name]: value,
  };
};

const handleSubmit = async (e) => {
  e.preventDefault();

  loading.value = true;

  if (!formRef.value) return;

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      formRef.value,
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    );
  } catch (e) {
    console.log('EmailJS Error, ', e);
  } finally {
    loading.value = false;
  }

  // reset form
  formData.value = { name: '', email: '', message: '' };
};
</script>

<template>
  <section id="contact" class="flex justify-center items-center py-24 min-h-screen px-5 md:px-10 bg-black text-white font-sans">
    <div class="w-full h-full md:px-10 px-5">
      <TitleHeader
        title="Get in Touch – Let's Connect"
        sub="💬 Have questions or ideas? Let's talk! 🚀"
      />
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-10 mt-16">
        <div class="xl:col-span-5">
          <div class="flex flex-col justify-center items-center border border-[#1c1c21] bg-[#0e0e10] rounded-xl p-10">
            <form
              ref="formRef"
              @submit="handleSubmit"
              class="w-full flex flex-col gap-7"
            >
              <div>
                <label for="name" class="block text-[#d9ecff] mb-2 font-semibold">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  v-model="formData.name"
                  @input="handleChange"
                  placeholder="What should i call you?"
                  required
                  class="w-full px-4 py-4 md:text-base text-sm text-white placeholder:text-[#839cb5] bg-[#2d2d38] rounded-md border-none outline-none focus:ring-2 focus:ring-[#839cb5]/50 transition-all"
                />
              </div>

              <div>
                <label for="email" class="block text-[#d9ecff] mb-2 font-semibold">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  v-model="formData.email"
                  @input="handleChange"
                  placeholder="Your email address, please?"
                  required
                  class="w-full px-4 py-4 md:text-base text-sm text-white placeholder:text-[#839cb5] bg-[#2d2d38] rounded-md border-none outline-none focus:ring-2 focus:ring-[#839cb5]/50 transition-all"
                />
              </div>

              <div>
                <label for="companionName" class="block text-[#d9ecff] mb-2 font-semibold">Companion Name <span class="text-sm text-[#839cb5] font-normal">(Optional)</span></label>
                <input
                  type="text"
                  id="companionName"
                  name="companionName"
                  v-model="formData.companionName"
                  @input="handleChange"
                  placeholder="Who's sticking with you?"
                  class="w-full px-4 py-4 md:text-base text-sm text-white placeholder:text-[#839cb5] bg-[#2d2d38] rounded-md border-none outline-none focus:ring-2 focus:ring-[#839cb5]/50 transition-all"
                />
              </div>

              <div>
                <label for="message" class="block text-[#d9ecff] mb-2 font-semibold">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  v-model="formData.message"
                  @input="handleChange"
                  placeholder="Tell me anything"
                  rows="5"
                  required
                  class="w-full px-4 py-4 md:text-base text-sm text-white placeholder:text-[#839cb5] bg-[#2d2d38] rounded-md border-none outline-none focus:ring-2 focus:ring-[#839cb5]/50 transition-all min-h-[120px] resize-y"
                />
              </div>

              <button type="submit" class="w-full">
                <div class="px-4 py-4 rounded-lg bg-[#282732] flex justify-center items-center relative cursor-pointer overflow-hidden w-full transition-all duration-300 hover:bg-[#1c1c21] group">
                  <div class="absolute -right-10 origin-center top-1/2 -translate-y-1/2 w-[120%] h-[120%] group-hover:size-10 group-hover:right-10 rounded-full bg-[#d9ecff] transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <p class="md:text-lg text-white font-semibold transition-all duration-500 z-10 group-hover:text-[#0e0e10] group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5">
                    {{ loading ? "Sending..." : "Send Message" }}
                  </p>
                  <div class="group-hover:bg-[#d9ecff] size-10 rounded-full absolute right-10 top-1/2 -translate-y-1/2 flex justify-center items-center overflow-hidden z-10">
                    <img src="/images/arrow-down.svg" alt="arrow" class="size-5 xl:-translate-y-32 translate-y-0 animate-bounce group-hover:translate-y-0 transition-all duration-500 invert group-hover:invert-0" />
                  </div>
                </div>
              </button>
            </form>
          </div>
        </div>
        <div class="xl:col-span-7 min-h-[600px]">
          <div class="bg-[#1f1f1f] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
            <ContactExperience />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* No internal styles needed, using Tailwind */
</style>

<script setup>
import { shallowRef, ref, onMounted, onUnmounted } from 'vue';
import { useLoop } from '@tresjs/core';
import { Color, CanvasTexture, BufferGeometry, Float32BufferAttribute } from 'three';

// Native Mouse & Window tracking
const mouseX = ref(0);
const mouseY = ref(0);
const windowWidth = ref(window.innerWidth);
const windowHeight = ref(window.innerHeight);

const updateMouse = (e) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
};

const updateSize = () => {
  windowWidth.value = window.innerWidth;
  windowHeight.value = window.innerHeight;
};

onMounted(() => {
  window.addEventListener('mousemove', updateMouse);
  window.addEventListener('resize', updateSize);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMouse);
  window.removeEventListener('resize', updateSize);
});

const groupRef = shallowRef(null);

// Configuration
const PARTICLE_COUNT = 2000;
const Z_LIMIT = 20; // How close until reset
const Z_START = -50; // How far back they spawn
const SPEED = 0.05;

// Generate initial particle positions
const positions = new Float32Array(PARTICLE_COUNT * 3);
const colors = new Float32Array(PARTICLE_COUNT * 3);
const colorPalette = [
  new Color('#512BD4'), // dotnet-purple
  new Color('#0078D4'), // dotnet-blue
  new Color('#00C7FD'), // dotnet-cyan
  new Color('#2C3E50'), // dark-slate (for depth)
  new Color('#FFFFFF')  // white
];

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const i3 = i * 3;
  // X and Y spread wide to cover view
  positions[i3] = (Math.random() - 0.5) * 100;     // x
  positions[i3 + 1] = (Math.random() - 0.5) * 100; // y
  positions[i3 + 2] = Math.random() * (Z_LIMIT - Z_START) + Z_START; // z

  // Random color
  const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
  colors[i3] = c.r;
  colors[i3 + 1] = c.g;
  colors[i3 + 2] = c.b;
}

// Create Geometry explicitly to avoid template binding issues
const geometry = new BufferGeometry();
geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));

// Generate a simple circle texture for round particles
const generateCircleTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    ctx.beginPath();
    ctx.arc(16, 16, 15, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
  }
  
  return new CanvasTexture(canvas);
};

const particleTexture = generateCircleTexture();

const { onBeforeRender } = useLoop();

onBeforeRender(({ delta }) => {
  if (!groupRef.value) return;

  // 1. Move stars forward (Liftoff effect)
  const positionAttribute = geometry.attributes.position;
  
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3;
    
    // Move Z forward (towards positive)
    positionAttribute.array[i3 + 2] += SPEED * (delta * 60); // frame-rate independent-ish

    // Reset if passes camera
    if (positionAttribute.array[i3 + 2] > Z_LIMIT) {
      positionAttribute.array[i3 + 2] = Z_START;
      // Re-randomize X/Y to prevent tunnel patterns
      positionAttribute.array[i3] = (Math.random() - 0.5) * 100;
      positionAttribute.array[i3 + 1] = (Math.random() - 0.5) * 100;
    }
  }
  positionAttribute.needsUpdate = true;

  // 2. Interactive Steering (Rotate based on mouse)
  // Normalize mouse from -1 to 1
  const normMouseX = (mouseX.value / windowWidth.value) * 2 - 1;
  const normMouseY = -(mouseY.value / windowHeight.value) * 2 + 1;

  // Smoothly interpolate rotation
  groupRef.value.rotation.y += (normMouseX * 0.5 - groupRef.value.rotation.y) * 0.05;
  groupRef.value.rotation.x += (-normMouseY * 0.5 - groupRef.value.rotation.x) * 0.05;
});
</script>

<template>
  <TresGroup ref="groupRef">
    <TresPoints :geometry="geometry">
      <TresPointsMaterial
        :size="0.20"
        :vertex-colors="true"
        :size-attenuation="true"
        :transparent="true"
        :opacity="0.8"
        :map="particleTexture"
        :alpha-test="0.5"
      />
    </TresPoints>
  </TresGroup>
</template>

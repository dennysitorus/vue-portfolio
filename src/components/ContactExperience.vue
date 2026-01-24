<script setup>
import { TresCanvas } from '@tresjs/core';
import { OrbitControls, GLTFModel } from '@tresjs/cientos';
import { onErrorCaptured, ref } from 'vue';


const controlsRef = ref(null);

onErrorCaptured((err) => {
  console.error("🔴 3D Model Loading Error:", err);
  return true;
});
</script>

<template>
  <TresCanvas shadows>
    <TresPerspectiveCamera :position="[-149.19, 254.91, 307.93]" :fov="45" make-default />
    <!-- CameraLogger removed -->
    <TresAmbientLight :intensity="0.5" color="#fff4e6" />

    <TresDirectionalLight :position="[5, 5, 3]" :intensity="2.5" color="#fffba0" />

    <TresDirectionalLight
      :position="[5, 9, 1]"
      cast-shadow
      :intensity="2.5"
      color="#ffd9b3"
    />

    <OrbitControls
      ref="controlsRef"
      enable-zoom
      enable-pan
    />

    <TresGroup :scale="[1, 1, 1]">
      <TresMesh
        receive-shadow
        :position="[0, -1.5, 0]"
        :rotation="[-Math.PI / 2, 0, 0]"
      >
        <TresCircleGeometry :args="[300, 64]" />
        <TresMeshStandardMaterial color="#fffba0" />
      </TresMesh>
    </TresGroup>

    <TresGroup :scale="1.1" :position="[0, -1.5, -1.5]" cast-shadow>
      <Suspense>
        <GLTFModel path="/models/computer-optimized.glb" />
        <template #fallback>
            <TresMesh :position="[0,0,0]">
                <TresBoxGeometry :args="[1, 1, 1]" />
                <TresMeshBasicMaterial color="red" />
            </TresMesh>
        </template>
      </Suspense>
    </TresGroup>
  </TresCanvas>
</template>

<script setup>
import { useGLTF } from '@tresjs/cientos';
import { Primitive } from '@tresjs/core';

const { scene } = await useGLTF('/models/computer-optimized.glb');
</script>

<template>
  <Primitive :object="scene" />
</template>

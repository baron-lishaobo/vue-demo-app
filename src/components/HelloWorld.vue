<script setup lang="ts">
import { ref } from 'vue'
import Test from './Test.vue'
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <Test>

  </Test>
  <h1>{{ msg }}</h1>

  </template>

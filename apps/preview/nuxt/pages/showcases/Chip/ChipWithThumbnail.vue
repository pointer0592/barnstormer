<template>
  <BsChip v-model="chipRedActive" size="sm" class="mr-2">
    <template #prefix><BsThumbnail class="bg-red-500" size="sm" /></template>
    Red
  </BsChip>
  <BsChip v-model="chipBlueActive">
    <template #prefix><BsThumbnail class="bg-secondary-400" size="base" /></template>
    Blue
  </BsChip>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsChip, BsThumbnail } from '@barnstormer/vue';

const chipRedActive = ref();
const chipBlueActive = ref();
</script>

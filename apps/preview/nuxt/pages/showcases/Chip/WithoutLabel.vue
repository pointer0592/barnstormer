<template>
  <BsChip v-model="chipRedActive" size="sm" square class="mr-2">
    <BsThumbnail class="bg-red-500" size="sm" aria-label="Red thumbnail chip" />
  </BsChip>
  <BsChip v-model="chipBlueActive" square>
    <BsThumbnail class="bg-blue-500" color="blue" size="base" aria-label="Blue thumbnail chip" />
  </BsChip>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsChip, BsThumbnail } from '@barnstormer/vue';

const chipRedActive = ref();
const chipBlueActive = ref();
</script>

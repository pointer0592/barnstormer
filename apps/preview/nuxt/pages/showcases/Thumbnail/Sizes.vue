<template>
  <div class="flex items-center justify-around max-w-sm">
    <BsThumbnail size="sm" class="mr-2 bg-primary-500" />
    <BsThumbnail size="base" class="mr-2 bg-primary-500" />
    <BsThumbnail size="lg" class="mr-2 bg-primary-500" />
    <BsThumbnail size="xl" class="bg-primary-500" />
  </div>
</template>

<script lang="ts" setup>
import { BsThumbnail } from '@barnstormer/vue';
</script>

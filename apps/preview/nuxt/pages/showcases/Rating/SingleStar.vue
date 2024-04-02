<template>
  <div class="flex flex-col gap-2">
    <div class="font-medium typography-text-xs">
      <BsIconStarFilled class="text-warning-500 w-[1.5em] h-[1.5em]" />
      {{ value }}
    </div>
    <div class="font-medium typography-text-sm">
      <BsIconStarFilled class="text-warning-500 w-[1.5em] h-[1.5em]" />
      {{ value }}
    </div>
    <div class="font-medium">
      <BsIconStarFilled class="text-warning-500 w-[1.5em] h-[1.5em]" />
      {{ value }}
    </div>
    <div class="font-medium typography-text-lg">
      <BsIconStarFilled class="text-warning-500 w-[1.5em] h-[1.5em]" />
      {{ value }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BsIconStarFilled } from '@barnstormer/vue';

const value = ref(4.5);
</script>

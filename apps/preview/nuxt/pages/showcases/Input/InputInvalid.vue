<template>
  <label>
    <span class="text-sm font-medium">Label</span>
    <BsInput invalid />
  </label>
  <div class="flex justify-between">
    <div>
      <p class="text-sm text-negative-700 font-medium mt-0.5">Error</p>
      <p class="typography-hint-xs text-neutral-500 mt-0.5">Help Text</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { BsInput } from '@barnstormer/vue';
</script>
